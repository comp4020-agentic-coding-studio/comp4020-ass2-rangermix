import { describe, expect, it } from "vitest";
import { api, htmlPages, inCanberra, nodesOf, readPage, visibleText, weekdayOf } from "./support/site";

// The timetable is the page a student reads before they have read anything
// else: where to be, when, and the conventions the room runs on. Two things
// can go quietly wrong with it, and both are what these tests hold.
//
// One: it drifts. Every date on it is generated from the lectures, the labs
// and the assessments, and a hand-typed calendar would be a second source of
// truth that nobody updates. So the check is that every teaching date and
// every deadline in the course API reaches the page.
//
// Two: it states a claim about itself that stops being true. The page tells a
// student that the four public holidays it lists miss both teaching days, and
// that is why the course meets on a Tuesday and a Thursday. That is an
// arithmetic claim, and it is checked here rather than trusted.

const ROUTE = "timetable/index.html";
const page = readPage(ROUTE);
const text = visibleText(page);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** "2027-02-23" as the day-and-month a reader looks for: "23 Feb". */
const dayToken = (iso: string) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]}`;
const dayOnly = (value: unknown) => String(value).slice(0, 10);

describe("the timetable", () => {
  it("stands before the lectures in the navigation, on every page", () => {
    const pages = htmlPages().filter((route) => !route.startsWith("decks/"));
    expect(pages.length).toBeGreaterThan(20);
    for (const route of pages) {
      const nav = readPage(route).match(/<nav[\s\S]*?<\/nav>/i)?.[0];
      expect(nav, `${route} has a navigation`).toBeDefined();
      const timetable = nav!.indexOf("/timetable/");
      const lectures = nav!.indexOf("/lectures/");
      expect(timetable, `${route} links the timetable`).toBeGreaterThan(-1);
      expect(lectures, `${route} links the lectures`).toBeGreaterThan(-1);
      expect(timetable, `${route} puts the timetable first`).toBeLessThan(lectures);
    }
  });

  // Measured, not a style rule: at every desktop width the navigation sits in
  // an 864px column beside the logo, and a seventh item drops the whole list
  // to a second row. It happened twice --- Glossary, then this page --- and was
  // found by eye both times, so the count is held here instead.
  it("keeps the navigation to the six items that fit beside the logo", () => {
    const menu = readPage("index.html").match(/<ul[^>]*id="at-nav-menu"[\s\S]*?<\/ul>/)?.[0] ?? "";
    expect((menu.match(/<a\b/g) ?? []).length).toBe(6);
  });

  it("says when each of the week's three fixed points is, and where two of them are", () => {
    expect(text).toMatch(/Tuesday 14:00.16:00/);
    expect(text).toMatch(/Thursday 14:00.15:00/);
    expect(text).toContain("Sunday 23:59");
    expect(text).toContain("Theatre 1, Applied Interaction Building");
    expect(text).toContain("Room 2.14, Applied Interaction Building");
  });

  it("carries every lecture and lab, with its date and a link to it", () => {
    const meetings = [...nodesOf("lectures"), ...nodesOf("sessions")];
    expect(meetings).toHaveLength(24);
    for (const meeting of meetings) {
      const date = dayOnly(meeting.meta?.date);
      expect(text, `${meeting.id} is dated on the timetable`).toContain(dayToken(date));
      expect(text, `${meeting.id} is named on the timetable`).toContain(meeting.title);
      expect(page, `${meeting.id} is linked from the timetable`).toContain(`/${meeting.id}/`);
    }
  });

  it("carries every deadline in the course, the journal's eleven included", () => {
    const deadlines = nodesOf("assessments").flatMap((assessment) => [
      ...(((assessment.meta?.submissions as unknown[] | undefined) ?? []).length > 0
        ? ((assessment.meta?.submissions as unknown[]) ?? [])
        : [assessment.meta?.due]),
    ]);
    expect(deadlines.length).toBeGreaterThanOrEqual(14);
    for (const deadline of deadlines) {
      const { date } = inCanberra(deadline);
      expect(text, `${date} is on the timetable`).toContain(dayToken(date));
    }
    for (const assessment of nodesOf("assessments")) {
      expect(page, `${assessment.id} is linked`).toContain(`/${assessment.id}/`);
    }
  });

  it("shows the break as two weeks with nothing in them", () => {
    expect(text).toMatch(/12 April 2027 to 25 April 2027/);
    expect(text).toMatch(/no lecture, no lab, no deadline/i);
  });

  it("names four public holidays, and none of them falls on a teaching day", () => {
    const holidays = [...text.matchAll(/\(([A-Z][a-z]{2}) (\d{1,2}) ([A-Z][a-z]{2,8})\)/g)];
    expect(holidays, "the page lists the holidays it clears").toHaveLength(4);
    for (const [, weekday, day, month] of holidays) {
      const index = MONTHS.findIndex((m) => month.startsWith(m));
      expect(index, `${month} is a month`).toBeGreaterThan(-1);
      const iso = `2027-${String(index + 1).padStart(2, "0")}-${day.padStart(2, "0")}`;
      expect(weekdayOf(iso), `${iso} is a ${weekday}`).toBe(weekday);
      expect(["Tue", "Thu"], `${iso} misses both teaching days`).not.toContain(weekday);
    }
  });

  it("ends where the course record ends", () => {
    expect(text, "the last deadline is the course's endDate").toContain(dayToken(api.course.endDate));
  });
});
