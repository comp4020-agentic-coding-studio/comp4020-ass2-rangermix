import { describe, expect, it } from "vitest";
import { api, byWeek, inCanberra, nodesOf, weekdayOf } from "./support/site";

// The published spec: "one niche course at Slop University, under a SLOPxxxx
// code that keeps the three digits your repo arrived with, running across
// twelve dated teaching weeks". The dates are docs/course-design.md's calendar:
// Tuesday lecture, Thursday lab, and a two-week break that nothing lands in.

const CALENDAR: [week: number, lecture: string, lab: string][] = [
  [1, "2027-02-23", "2027-02-25"],
  [2, "2027-03-02", "2027-03-04"],
  [3, "2027-03-09", "2027-03-11"],
  [4, "2027-03-16", "2027-03-18"],
  [5, "2027-03-23", "2027-03-25"],
  [6, "2027-03-30", "2027-04-01"],
  [7, "2027-04-06", "2027-04-08"],
  [8, "2027-04-27", "2027-04-29"],
  [9, "2027-05-04", "2027-05-06"],
  [10, "2027-05-11", "2027-05-13"],
  [11, "2027-05-18", "2027-05-20"],
  [12, "2027-05-25", "2027-05-27"],
];

const BREAK = { from: "2027-04-10", to: "2027-04-25" };
const day = (value: unknown) => String(value).slice(0, 10);

describe("the course record", () => {
  it("keeps the code's allocated digits", () => {
    expect(api.course.code).toMatch(/^SLOP[1-468]562$/);
    expect(api.course.level).toBe(Number(api.course.code[4]));
  });

  it("runs from the first teaching Monday to the capstone deadline", () => {
    expect(api.course.startDate).toBe("2027-02-22");
    expect(api.course.endDate).toBe("2027-06-13");
  });

  it("states what a student leaves able to do", () => {
    expect(api.course.learningOutcomes?.length ?? 0).toBeGreaterThanOrEqual(3);
  });
});

describe("twelve dated teaching weeks", () => {
  it("has exactly twelve lectures and twelve labs", () => {
    expect(nodesOf("lectures")).toHaveLength(12);
    expect(nodesOf("sessions")).toHaveLength(12);
  });

  it.each(CALENDAR)("week %i: lecture on %s, lab on %s, and the two connected", (week, lecture, lab) => {
    const lectures = byWeek("lectures", week);
    const labs = byWeek("sessions", week);
    expect(lectures, `week ${week} lectures`).toHaveLength(1);
    expect(labs, `week ${week} labs`).toHaveLength(1);
    expect(day(lectures[0].meta?.date)).toBe(lecture);
    expect(day(labs[0].meta?.date)).toBe(lab);
    expect(weekdayOf(lecture)).toBe("Tue");
    expect(weekdayOf(lab)).toBe("Thu");
    expect(lectures[0].related, "a week's lab explores what its lecture argued").toContain(labs[0].id);
  });

  it("puts nothing in the mid-semester break", () => {
    const dated = [
      ...nodesOf("lectures").map((n) => [n.id, day(n.meta?.date)]),
      ...nodesOf("sessions").map((n) => [n.id, day(n.meta?.date)]),
      ...nodesOf("assessments").flatMap((n) => [
        [n.id, inCanberra(n.meta?.due).date],
        ...((n.meta?.submissions as unknown[] | undefined) ?? []).map((s) => [n.id, inCanberra(s).date]),
      ]),
    ];
    const inBreak = dated.filter(([, date]) => date >= BREAK.from && date <= BREAK.to);
    expect(inBreak).toEqual([]);
  });

  it("gives every week its own title", () => {
    const titles = nodesOf("lectures").map((n) => n.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
