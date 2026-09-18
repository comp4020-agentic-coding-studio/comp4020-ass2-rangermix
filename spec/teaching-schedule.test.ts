import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { estimateWeek, timingIssues } from "../scripts/lecture-timing";
import { byWeek, pageFor, visibleText } from "./support/site";

const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const minute = (value: string) => value.split(":").map(Number).reduce((h, m) => h * 60 + m);

describe("the published teaching schedule", () => {
  it.each(weeks)("week %i's lab fits one contiguous 50-minute working period", (week) => {
    const lab = byWeek("sessions", week)[0];
    const html = pageFor(lab.id);
    const ranges = [...visibleText(html).matchAll(/(\d+:\d{2})(?:–|—|--)(\d+:\d{2})/g)]
      .map(([, from, to]) => [minute(from), minute(to)])
      .filter(([from]) => from < 60);
    expect(ranges.length).toBeGreaterThan(2);
    expect(ranges[0][0]).toBe(0);
    for (let i = 0; i < ranges.length; i++) {
      expect(ranges[i][1]).toBeGreaterThan(ranges[i][0]);
      if (i > 0) expect(ranges[i][0]).toBe(ranges[i - 1][1]);
    }
    expect(ranges.at(-1)![1]).toBe(50);
    expect(visibleText(html)).toContain("14:05");
    expect(visibleText(html)).toContain("14:55");
  });

  it.each(weeks)("week %i displays the fixed break and ends in an optional question", (week) => {
    const slug = `week-${String(week).padStart(2, "0")}`;
    const source = read(`src/decks/${slug}.deck.mdx`).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
    const slides = source.split(/^---\s*$/m).filter((slide) => slide.trim());
    const breaks = slides.filter((slide) => slide.includes("timing: break"));
    expect(breaks).toHaveLength(1);
    const displayedBreak = breaks[0].replace(/```notes[\s\S]*?```/g, "");
    expect(displayedBreak).toContain("14:55");
    expect(displayedBreak).toContain("15:05");
    const last = slides.at(-1)!.replace(/```notes[\s\S]*?```/g, "");
    expect(last).toContain("timing: discussion");
    expect(last).toContain("?");
    expect(last).toMatch(/optional discussion/i);
    expect(last).toContain("15:55");
    expect(visibleText(pageFor(`lectures/${slug}`))).toContain("15:55");
    expect(timingIssues([estimateWeek(slug, source, "")])).toEqual([]);
  });
});
