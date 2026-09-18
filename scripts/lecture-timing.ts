// Rough planning estimate for this fictional course: ordinary slides take
// two minutes, titles/transitions five seconds, and activities their stated
// duration. Notes do not buy additional minutes. The fixed break and optional
// final discussion are outside core time. These are assumptions, not measured
// delivery. The user-approved plan needs no rehearsal.
//
// Usage: node scripts/lecture-timing.ts [--json]

import { existsSync, readdirSync, readFileSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { lectureMeeting, lectureSchedule, minutesBetween } from "../src/data/timetable.ts";

/** Minutes a slide takes to deliver, by what kind of slide it is. */
const SLIDE_MINUTES = {
  banner: 5 / 60,
  transition: 5 / 60,
  impact: 2,
  quote: 2,
  hand: 2,
  centered: 2,
  diagram: 2,
  table: 2,
  exercise: 0, // carries its own visible timing; counted separately
  content: 2,
  break: 0, // fixed clock time, not teaching
  discussion: 0, // optional use of contingency, not needed for the core target
} as const;

/** The slot this course is timetabled into. */
export const SLOT_MINUTES = minutesBetween(lectureMeeting.slotStart, lectureMeeting.slotEnd);
export const FIRST_HALF_MINUTES = minutesBetween(lectureSchedule.start, lectureSchedule.breakStart);
export const TARGET_MINUTES = FIRST_HALF_MINUTES
  + minutesBetween(lectureSchedule.breakEnd, lectureSchedule.coreEnd);
/** A rough estimate may be ten minutes either side of the nominal target. */
export const PLANNING_TOLERANCE = 10;
/** Leave room for a sensible slide/activity boundary around the fixed break. */
export const BREAK_TOLERANCE = 5;

export interface WeekEstimate {
  week: string;
  slides: number;
  deckMinutes: number;
  exerciseMinutes: number;
  lectureWords: number;
  beforeBreakMinutes: number;
  afterBreakMinutes: number;
  /** The figure to plan against: the deck, which is what gets delivered. */
  totalMinutes: number;
  shortfall: number;
  byKind: Record<string, number>;
}

function classify(slide: string): keyof typeof SLIDE_MINUTES {
  const timing = slide.match(/\{\/\*\s*timing:\s*(transition|break|discussion)\s*\*\/\}/)?.[1];
  if (timing) return timing as "transition" | "break" | "discussion";
  if (EXERCISE.test(slide)) return "exercise";
  const cls = slide.match(/\{\/\*\s*_class:\s*([a-z-]+)\s*\*\/\}/)?.[1];
  if (cls && cls in SLIDE_MINUTES) return cls as keyof typeof SLIDE_MINUTES;
  // A slide whose body is a figure --- a drawing or a photographic plate ---
  // gets walked through rather than glanced at.
  if (/^\s*<(SequenceDiagram|StateMachine|TimingLine|Envelope|Form|DepthLadder|Chain|Register|Plate)\b/m.test(slide)) {
    return "diagram";
  }
  if (/^\|.*\|$/m.test(slide)) return "table";
  return "content";
}

/** Strip the frontmatter, then split on the slide separator. */
export function slidesOf(source: string): string[] {
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    // Remove the declarations, not the title sharing their first slide block.
    .replace(/^import(?:\s+[\s\S]*?\s+from)?\s+["'][^"'\r\n]+["'];?[ \t]*(?:\r?\n|$)/gm, "");
  return body
    .split(/^---\s*$/m)
    .map((s) => s.trim())
    .filter((s) => s !== "");
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
  let beforeBreak = 0;
  let afterBreak = 0;
  let pastBreak = false;

  for (const slide of slides) {
    const kind = classify(slide);
    byKind[kind] = (byKind[kind] ?? 0) + 1;
    if (kind === "break") {
      pastBreak = true;
      continue;
    }
    if (kind === "discussion") continue;
    const declared = declaredExercise(slide);
    const minutes = declared ?? SLIDE_MINUTES[kind];
    if (declared !== undefined) exerciseMinutes += declared;
    else deckMinutes += minutes;
    if (pastBreak) afterBreak += minutes;
    else beforeBreak += minutes;
  }

  const lectureWords = wordsOf(lectureSource.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, ""));
  const totalMinutes = Math.round((deckMinutes + exerciseMinutes) * 10) / 10;

  return {
    week,
    slides: slides.length,
    deckMinutes: Math.round(deckMinutes * 10) / 10,
    exerciseMinutes,
    lectureWords,
    beforeBreakMinutes: Math.round(beforeBreak * 10) / 10,
    afterBreakMinutes: Math.round(afterBreak * 10) / 10,
    totalMinutes,
    shortfall: Math.round((TARGET_MINUTES - totalMinutes) * 10) / 10,
    byKind,
  };
}

/** The same validation is used by human-readable and JSON CLI output. */
export function timingIssues(weeks: WeekEstimate[]): string[] {
  return weeks.flatMap((week) => {
    const issues: string[] = [];
    if (Math.abs(week.shortfall) > PLANNING_TOLERANCE) {
      issues.push(`${week.week}: ${week.totalMinutes} core minutes is outside the ${TARGET_MINUTES - PLANNING_TOLERANCE}–${TARGET_MINUTES + PLANNING_TOLERANCE} planning band.`);
    }
    if (week.byKind.break !== 1) issues.push(`${week.week}: expected one fixed break slide.`);
    else if (Math.abs(week.beforeBreakMinutes - FIRST_HALF_MINUTES) > BREAK_TOLERANCE) {
      issues.push(`${week.week}: the break follows ${week.beforeBreakMinutes} estimated core minutes; place it within ${FIRST_HALF_MINUTES - BREAK_TOLERANCE}–${FIRST_HALF_MINUTES + BREAK_TOLERANCE} minutes.`);
    }
    if (week.byKind.discussion !== 1) issues.push(`${week.week}: expected one optional discussion slide.`);
    return issues;
  });
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

// Node resolves import.meta.filename through symlinks, while argv may retain
// them (for example macOS temporary directories). Compare the actual files.
if (process.argv[1] && existsSync(process.argv[1]) && import.meta.filename === realpathSync(process.argv[1])) {
  const all = estimateAll();
  const issues = timingIssues(all);
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(all, null, 2));
  } else {
    const pad = (s: string | number, n: number) => String(s).padStart(n);
    console.log(`Rough core target: ${TARGET_MINUTES} min; planning band ${TARGET_MINUTES - PLANNING_TOLERANCE}–${TARGET_MINUTES + PLANNING_TOLERANCE} min in a ${SLOT_MINUTES} min booking.`);
    console.log(`Start ${lectureSchedule.start}; break ${lectureSchedule.breakStart}–${lectureSchedule.breakEnd}; core ends around ${lectureSchedule.coreEnd}; optional discussion stops by ${lectureSchedule.end}.`);
    console.log(`Place the break at a useful boundary within ${FIRST_HALF_MINUTES - BREAK_TOLERANCE}–${FIRST_HALF_MINUTES + BREAK_TOLERANCE} estimated core minutes.`);
    console.log("Five seconds per title/transition, two minutes per ordinary slide; activities use their stated time. Notes add no time. Break/discussion excluded.\n");
    console.log("week      slides  deck  activity  core  to target  before break  after break");
    for (const w of all) {
      const flag = Math.abs(w.shortfall) > PLANNING_TOLERANCE ? "  CHECK" : "";
      console.log(
        `${w.week}  ${pad(w.slides, 6)}  ${pad(w.deckMinutes, 4)}  ${pad(w.exerciseMinutes, 8)}  ${pad(w.totalMinutes, 4)}  ${pad(w.shortfall, 9)}  ${pad(w.beforeBreakMinutes, 12)}  ${pad(w.afterBreakMinutes, 11)}${flag}`,
      );
    }
    console.log(`\n${issues.length} planning issue(s) across ${all.length} weeks.`);
  }
  for (const issue of issues) console.error(issue);
  if (issues.length) process.exitCode = 1;
}
