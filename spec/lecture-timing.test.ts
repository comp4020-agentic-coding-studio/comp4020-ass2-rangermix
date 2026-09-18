import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import * as timing from "../scripts/lecture-timing";

const deck = (slides: string[]) => `---\ntitle: Timing example\n---\n${slides.join("\n\n---\n\n")}\n`;
const title = 'import Plate from "../components/Plate.astro";\n\n{/* _class: banner */}\n# The title';
const pause = "{/* timing: break */}\n## Break\n14:55–15:05. Resume at 15:05.";
const discussion = "{/* timing: discussion */}\n## If time remains\nWhat would make you revise the rule?\nOptional discussion. Finish by 15:55.";

describe("the rough lecture estimate", () => {
  it("retains a title sharing its block with imports, at five seconds", () => {
    const result = timing.estimateWeek("example", deck([title, "## One regular slide\nSome explanation."]), "");
    expect(result.slides).toBe(2);
    expect(result.byKind.banner).toBe(1);
    expect(result.totalMinutes).toBe(2.1);
  });

  it("removes multiline imports without treating them as slides", () => {
    const result = timing.estimateWeek("example", deck([
      'import {\n  A,\n  B\n} from "./figures";\nimport "./styles.css";',
      "## Content\nOne explanation.",
    ]), "");
    expect(result.slides).toBe(1);
    expect(result.totalMinutes).toBe(2);
  });

  it("uses two minutes for an ordinary slide, regardless of note count", () => {
    const body = "## Example\nExplain what happened.";
    const notes = "\n```notes\n- Point at the example.\n- Do not pause.\n```";
    expect(timing.estimateWeek("example", deck([body + notes]), "").totalMinutes).toBe(2);
    expect(timing.estimateWeek("example", deck(["| Before | After |\n| --- | --- |\n| A | B |"]), "").totalMinutes).toBe(2);
  });

  it("counts an immediate transition as five seconds", () => {
    const result = timing.estimateWeek("example", deck([
      "{/* timing: transition */}\nRight. Mechanics.\n```notes\n- Go straight on.\n```",
    ]), "");
    expect(result.totalMinutes).toBe(0.1);
    expect(result.byKind.transition).toBe(1);
  });

  it("counts the declared activity once, without base-slide or note time", () => {
    const result = timing.estimateWeek("example", deck([
      "## In the room — test a rule (7 min)\nTwo minutes alone, three in pairs, two to compare.\n```notes\n- Debrief inside the seven minutes.\n```",
    ]), "");
    expect(result.exerciseMinutes).toBe(7);
    expect(result.deckMinutes).toBe(0);
    expect(result.totalMinutes).toBe(7);
  });

  it("excludes the break and optional discussion while tracking both core halves", () => {
    const result = timing.estimateWeek("example", deck([title, "## Before", pause, "## After", discussion]), "");
    expect(result.totalMinutes).toBe(4.1);
    expect(result.beforeBreakMinutes).toBe(2.1);
    expect(result.afterBreakMinutes).toBe(2);
    expect(result.byKind.break).toBe(1);
    expect(result.byKind.discussion).toBe(1);
  });

  it("derives 85 content minutes from the new clock times", () => {
    expect(timing.TARGET_MINUTES).toBe(85);
    expect(timing.SLOT_MINUTES).toBe(120);
  });

  it("can be imported by a stdin diagnostic without running the CLI", () => {
    const url = new URL("../scripts/lecture-timing.ts", import.meta.url).href;
    const result = spawnSync(process.execPath, ["--input-type=module", "-"], {
      encoding: "utf8",
      input: `import { TARGET_MINUTES } from ${JSON.stringify(url)}; console.log(TARGET_MINUTES);`,
    });
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout.trim()).toBe("85");
  });

  it("checks both ends of the disclosed planning band", () => {
    expect(timing.timingIssues).toBeTypeOf("function");
    const make = (minutes: number) => timing.estimateWeek("example", deck([
      `## In the room — first half (50 min)\nA prepared case.`, pause,
      `## In the room — second half (${minutes - 50} min)\nA prepared comparison.`, discussion,
    ]), "");
    expect(timing.timingIssues([make(75), make(85), make(95)])).toEqual([]);
    expect(timing.timingIssues([make(74)])).toHaveLength(1);
    expect(timing.timingIssues([make(96)])).toHaveLength(1);
  });

  it("allows a useful break boundary within five minutes of the planned first half", () => {
    const make = (before: number) => timing.estimateWeek("example", deck([
      `## In the room — first half (${before} min)\nA prepared case.`, pause,
      `## In the room — second half (${85 - before} min)\nA prepared comparison.`, discussion,
    ]), "");
    expect(timing.timingIssues([make(45), make(50), make(55)])).toEqual([]);
    for (const before of [0, 44, 56, 85]) {
      expect(timing.timingIssues([make(before)])).toEqual([
        `example: the break follows ${before} estimated core minutes; place it within 45–55 minutes.`,
      ]);
    }
  });

  it.each([[60, 1], [85, 0], [101, 1]])("the CLI reports %i minutes with the same exit status in both formats", (minutes, status) => {
    const root = mkdtempSync(join(tmpdir(), "lecture-timing-spec-"));
    try {
      for (const directory of ["scripts", "src/data", "src/decks", "src/content/lectures"]) {
        mkdirSync(join(root, directory), { recursive: true });
      }
      for (const file of ["scripts/lecture-timing.ts", "src/data/timetable.ts"]) {
        writeFileSync(join(root, file), readFileSync(new URL(`../${file}`, import.meta.url)));
      }
      writeFileSync(join(root, "package.json"), '{"type":"module"}');
      writeFileSync(join(root, "src/content/lectures/week-01.mdx"), "# Example");
      writeFileSync(join(root, "src/decks/week-01.deck.mdx"), deck([
        "## In the room — first half (50 min)\nPrepared case.", pause,
        `## In the room — second half (${minutes - 50} min)\nPrepared comparison.`, discussion,
      ]));
      for (const args of [[], ["--json"]]) {
        const result = spawnSync(process.execPath, [join(root, "scripts/lecture-timing.ts"), ...args], { encoding: "utf8" });
        expect(result.status, result.stderr).toBe(status);
        if (args.length) expect(JSON.parse(result.stdout)[0].totalMinutes).toBe(minutes);
        else expect(result.stdout).toContain("week-01");
        if (status) expect(result.stderr).toContain("outside the 75–95 planning band");
        else expect(result.stderr).toBe("");
      }
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
