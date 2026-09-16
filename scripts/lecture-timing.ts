// Estimate how long each week's lecture runs, and say which weeks don't fill
// their two-hour slot.
//
// A deck's runtime isn't its word count: a title slide is ten seconds, a
// sequence diagram walked through top to bottom is four minutes, and a
// speaker note is a line a lecturer says out loud that isn't on the slide at
// all. So the estimate classifies each slide and adds time for its notes.
//
// The numbers below are this course's planning figures, not a finding about
// lecturing. They exist so that "this week is short" is a claim someone can
// re-run and argue with, rather than a feeling.
//
// Usage: node scripts/lecture-timing.ts [--json]

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** Minutes a slide takes to deliver, by what kind of slide it is. */
const SLIDE_MINUTES = {
  banner: 1.0, // the title: welcome the room and go
  impact: 1.5, // one sentence, said slowly, left up
  quote: 2.0, // read it out, then unpack it
  hand: 1.5, // an aside in the handwriting face
  centered: 2.0, // the closing checklist
  diagram: 3.5, // walked through, not glanced at
  table: 3.0, // a column at a time
  exercise: 0, // carries its own visible timing; counted separately
  content: 2.5, // prose, bullets, a claim and its source
} as const;

/** A speaker-note line is something said aloud that isn't on the slide. */
const MINUTES_PER_NOTE_LINE = 0.4;

/** Words a lecturer gets through in a minute, talking to a room. */
const WORDS_PER_MINUTE = 140;

/** The slot this course is timetabled into. */
export const SLOT_MINUTES = 120;
/** Content target: the slot, less arrival, a mid-lecture break and overrun. */
export const TARGET_MINUTES = 105;

export interface SlideEstimate {
  kind: keyof typeof SLIDE_MINUTES;
  minutes: number;
  noteLines: number;
  /** Minutes the slide's own heading gives the room. */
  declared?: number;
}

export interface WeekEstimate {
  week: string;
  slides: number;
  deckMinutes: number;
  exerciseMinutes: number;
  lectureWords: number;
  lectureMinutes: number;
  /** The figure to plan against: the deck, which is what gets delivered. */
  totalMinutes: number;
  shortfall: number;
  byKind: Record<string, number>;
}

function classify(slide: string): keyof typeof SLIDE_MINUTES {
  const cls = slide.match(/\{\/\*\s*_class:\s*([a-z-]+)\s*\*\/\}/)?.[1];
  if (cls && cls in SLIDE_MINUTES) return cls as keyof typeof SLIDE_MINUTES;
  if (EXERCISE.test(slide)) return "exercise";
  // A slide whose body is a component call is a drawing.
  if (/^\s*<(SequenceDiagram|StateMachine|TimingLine|Envelope|Form|DepthLadder|Chain|Register)\b/m.test(slide)) {
    return "diagram";
  }
  if (/^\|.*\|$/m.test(slide)) return "table";
  return "content";
}

/** Strip the frontmatter, then split on the slide separator. */
function slidesOf(source: string): string[] {
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  return body
    .split(/^---\s*$/m)
    .map((s) => s.trim())
    .filter((s) => s !== "" && !/^import\s/.test(s.split("\n")[0] ?? ""));
}

function noteLinesOf(slide: string): number {
  const fences = [...slide.matchAll(/```notes\r?\n([\s\S]*?)```/g)];
  return fences.reduce(
    (n, m) => n + m[1].split("\n").filter((l) => l.trim().startsWith("-")).length,
    0,
  );
}

// An in-room exercise announces its own length on the slide, so the room can
// pace itself. That visible figure is the one counted here: a hidden marker
// beside it would be a second copy to keep in step.
const EXERCISE = /^#{2,3}\s+In the room.*?\((\d+(?:\.\d+)?)\s*min\)/m;

function declaredExercise(slide: string): number | undefined {
  const m = slide.match(EXERCISE);
  return m ? Number(m[1]) : undefined;
}

/** Visible prose on a slide, with notes, components and markup removed. */
function wordsOf(text: string): number {
  const stripped = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/^import\s.*$/gm, " ")
    .replace(/[#*_>|`]/g, " ");
  return stripped.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length;
}

export function estimateWeek(week: string, deckSource: string, lectureSource: string): WeekEstimate {
  const slides = slidesOf(deckSource);
  const byKind: Record<string, number> = {};
  let deckMinutes = 0;
  let exerciseMinutes = 0;

  for (const slide of slides) {
    const kind = classify(slide);
    byKind[kind] = (byKind[kind] ?? 0) + 1;
    const declared = declaredExercise(slide);
    if (kind === "exercise" || declared !== undefined) {
      exerciseMinutes += declared ?? 0;
      continue;
    }
    deckMinutes += SLIDE_MINUTES[kind] + noteLinesOf(slide) * MINUTES_PER_NOTE_LINE;
  }

  const lectureWords = wordsOf(lectureSource.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, ""));
  const totalMinutes = Math.round((deckMinutes + exerciseMinutes) * 10) / 10;

  return {
    week,
    slides: slides.length,
    deckMinutes: Math.round(deckMinutes * 10) / 10,
    exerciseMinutes,
    lectureWords,
    lectureMinutes: Math.round((lectureWords / WORDS_PER_MINUTE) * 10) / 10,
    totalMinutes,
    shortfall: Math.round((TARGET_MINUTES - totalMinutes) * 10) / 10,
    byKind,
  };
}

const DECKS = join(import.meta.dirname, "..", "src", "decks");
const LECTURES = join(import.meta.dirname, "..", "src", "content", "lectures");

export function estimateAll(): WeekEstimate[] {
  return readdirSync(DECKS)
    .filter((f) => f.endsWith(".deck.mdx"))
    .sort()
    .map((file) => {
      const week = file.replace(".deck.mdx", "");
      return estimateWeek(
        week,
        readFileSync(join(DECKS, file), "utf8"),
        readFileSync(join(LECTURES, `${week}.mdx`), "utf8"),
      );
    });
}

if (process.argv[1] && import.meta.filename === process.argv[1]) {
  const all = estimateAll();
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(all, null, 2));
  } else {
    const pad = (s: string | number, n: number) => String(s).padStart(n);
    console.log(`Target: ${TARGET_MINUTES} min of content in a ${SLOT_MINUTES} min slot.\n`);
    console.log("week      slides  deck  exercise  total  shortfall  lecture prose");
    for (const w of all) {
      const flag = w.shortfall > 10 ? "  SHORT" : "";
      console.log(
        `${w.week}  ${pad(w.slides, 6)}  ${pad(w.deckMinutes, 4)}  ${pad(w.exerciseMinutes, 8)}  ${pad(w.totalMinutes, 5)}  ${pad(w.shortfall, 9)}  ${pad(w.lectureWords + "w", 8)}${flag}`,
      );
    }
    const short = all.filter((w) => w.shortfall > 10);
    console.log(
      `\n${short.length} of ${all.length} weeks are more than 10 min short of ${TARGET_MINUTES} min.`,
    );
    if (short.length) process.exitCode = 1;
  }
}
