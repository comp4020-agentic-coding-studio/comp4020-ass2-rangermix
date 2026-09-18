import { describe, expect, it } from "vitest";
import { midSemesterBreak } from "../src/data/timetable";
import { byWeek, htmlPages, inCanberra, nodesOf, normalise, pageFor, readPage, visibleText } from "./support/site";

// These are student-facing instructions that can disagree even when every
// URL resolves and every structured date is valid. Check the rendered words
// against the calendar and section headings, not a second copy of their numbers.

describe("the last lab before the break", () => {
  const lab = byWeek("sessions", midSemesterBreak.afterWeek)[0];
  const journal = nodesOf("assessments").find((node) => node.id === "assessments/field-journal")!;
  const deadlines = (journal.meta?.submissions as string[]).map((value) => ({ value, ...inCanberra(value) }));
  const labDay = String(lab.meta?.date).slice(0, 10);
  const reminders = [
    ["before the break", deadlines.find((deadline) => deadline.date > labDay && deadline.date < midSemesterBreak.from)],
    ["after the break", deadlines.find((deadline) => deadline.date > midSemesterBreak.to)],
  ] as const;
  const day = new Intl.DateTimeFormat("en-AU", {
    weekday: "long", day: "numeric", month: "long", timeZone: "Australia/Canberra",
  });

  it.each(reminders)("names the journal deadline %s", (_period, deadline) => {
    expect(deadline, "the journal has a deadline on this side of the break").toBeDefined();
    const expected = day.format(new Date(deadline!.value)).replace(",", "");
    expect(visibleText(pageFor(lab.id))).toContain(expected);
  });
});

// A named destination is the contract; its clause number may change whenever
// a section is inserted. These cases cover both self-checks and running prose.
const references = [
  ["lectures/week-01", "The handshake, specified", /reply types in §(\d+)/],
  ["lectures/week-03", "The decoder", /§(\d+)'s decoder/],
  ["lectures/week-04", "The inference is general. The calibration is local.", /three language groups in §(\d+)/],
  ["lectures/week-06", "It is a measured thing, not a mood", /CAT-Q result from §(\d+)/],
  ["lectures/week-07", "When it's more than a runbook", /Hold that until §(\d+)/],
  ["lectures/week-08", "Specimen: the email to a tutor", /all seven clauses in §(\d+)/],
  ["lectures/week-08", "Specimen: the email to a tutor", /scripts in §(\d+)/],
  ["lectures/week-09", "The rate limit", /evidence under the rule in §(\d+)/],
  ["lectures/week-09", "The rate limit", /which §(\d+) says/],
] as const;

describe("numbered section references", () => {
  it.each(references)("%s points to %s with %s", (id, destination, pattern) => {
    const html = pageFor(id);
    const article = html.match(/<article\b[^>]*class="protocol-doc"[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? "";
    const headings = [...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => normalise(visibleText(match[1])).replace(/#$/, "").trim());
    const actualNumber = headings.indexOf(destination) + 1;
    expect(actualNumber, `${id} still contains the named destination`).toBeGreaterThan(0);
    const reference = normalise(visibleText(html)).match(pattern);
    expect(reference, `${id} still contains the instruction`).not.toBeNull();
    expect(Number(reference![1]), `${id}: ${destination} is clause ${actualNumber}`).toBe(actualNumber);
  });

  it("accounts for every numbered reference in the lectures", () => {
    for (const lecture of nodesOf("lectures")) {
      const text = normalise(visibleText(pageFor(lecture.id)));
      const actual = text.match(/§\d+/g) ?? [];
      const covered = references.filter(([id, , pattern]) => id === lecture.id && pattern.test(text));
      expect(actual.length, `${lecture.id}: add the intended destination for any new reference`).toBe(covered.length);
    }
  });
});

describe("page orientation", () => {
  it("gives every ordinary course page one nonempty main heading", () => {
    const pages = htmlPages().filter((route) => !route.startsWith("decks/"));
    expect(pages.length).toBeGreaterThan(20);
    const failures = pages.flatMap((route) => {
      const main = readPage(route).match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
      const headings = [...main.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
      return headings.length === 1 && visibleText(headings[0][1]).replace(/#$/, "").trim()
        ? [] : [`${route}: expected one nonempty h1 in main, found ${headings.length}`];
    });
    expect(failures).toEqual([]);
  });
});
