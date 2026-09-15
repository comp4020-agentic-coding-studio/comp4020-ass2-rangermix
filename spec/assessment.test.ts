import { describe, expect, it } from "vitest";
import { formatCourseDate } from "../src/lib/dates";
import { inCanberra, nodesOf, pageFor, visibleText } from "./support/site";

// The published spec: "assessment that adds up to 100%". The rest is
// docs/course-design.md's scheme, where the dates are part of the promise: a
// course that teaches a cost budget has to publish its deadlines exactly.

const assessments = nodesOf("assessments");
const journal = assessments.find((n) => /field journal/i.test(n.title));

const JOURNAL_SUNDAYS = [
  "2027-03-07",
  "2027-03-14",
  "2027-03-21",
  "2027-03-28",
  "2027-04-04",
  "2027-04-11",
  "2027-05-02",
  "2027-05-09",
  "2027-05-16",
  "2027-05-23",
  "2027-05-30",
];

describe("assessment", () => {
  it("adds up to 100%", () => {
    const total = assessments.reduce((sum, n) => sum + Number(n.meta?.weight), 0);
    expect(total).toBe(100);
  });

  it("is the four tasks the design settled, at their weights", () => {
    const weights = Object.fromEntries(assessments.map((n) => [n.title, Number(n.meta?.weight)]));
    expect(Object.values(weights).sort()).toEqual([20, 20, 30, 30]);
    expect(Object.keys(weights).join(" | ")).toMatch(/Field Journal/);
    expect(Object.keys(weights).join(" | ")).toMatch(/Protocol Specification/);
    expect(Object.keys(weights).join(" | ")).toMatch(/Interoperation Report/);
    expect(Object.keys(weights).join(" | ")).toMatch(/Personal Protocol Document/);
  });

  it.each(assessments.map((n) => [n.id, n] as const))("%s states its contract on its page", (id, n) => {
    expect(n.spec?.length ?? 0, `${id} declares spec lines`).toBeGreaterThan(0);
    expect(pageFor(id)).toContain('class="spec-list"');
  });

  it("closes the capstone on Sunday 13 June, after teaching ends", () => {
    const capstone = assessments.find((n) => /personal protocol document/i.test(n.title));
    expect(inCanberra(capstone?.meta?.due)).toEqual({ date: "2027-06-13", weekday: "Sun", time: "23:59" });
  });
});

describe("the Field Journal", () => {
  const submissions = (journal?.meta?.submissions as unknown[] | undefined) ?? [];

  it("is turned in every Sunday of weeks 2–12, at 23:59 Canberra time", () => {
    expect(submissions.map((s) => inCanberra(s))).toEqual(
      JOURNAL_SUNDAYS.map((date) => ({ date, weekday: "Sun", time: "23:59" })),
    );
  });

  it("is due, finally, on its last Sunday", () => {
    expect(inCanberra(journal?.meta?.due).date).toBe(JOURNAL_SUNDAYS.at(-1));
  });

  it("publishes every submission date on its page", () => {
    const text = visibleText(pageFor(journal!.id));
    for (const date of JOURNAL_SUNDAYS) expect(text).toContain(formatCourseDate(date));
  });
});
