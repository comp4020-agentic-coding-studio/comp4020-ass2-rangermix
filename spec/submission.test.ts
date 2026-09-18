import { describe, expect, it } from "vitest";
import { htmlPages, nodesOf, readPage, visibleText } from "./support/site";

// A sentence saying "the submission page" is not a route a student can use.
// The public prototype needs a reachable guide and an honest account of what
// it can accept, without silently inventing an operational LMS.
const GUIDE = "submissions/index.html";
const assessments = nodesOf("assessments");
const entryPoints = [
  "timetable/index.html",
  "assessments/index.html",
  ...assessments.map((assessment) => `${assessment.id}/index.html`),
];
const mainOf = (route: string) => readPage(route).match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";

describe("where to submit work", () => {
  it.each(entryPoints)("links to the guide from the main content of %s", (route) => {
    const links = [...mainOf(route).matchAll(/<a\b[^>]*href="([^"]*\/submissions\/)"[^>]*>([\s\S]*?)<\/a>/g)];
    expect(links.length, `${route} provides a usable submission route`).toBeGreaterThan(0);
    expect(links.some((link) => /submi/i.test(visibleText(link[2]))), "the link says what it is for").toBe(true);
  });

  it("states that this prototype accepts no submissions and provides no upload form", () => {
    expect(htmlPages(), "the guide is a real built page").toContain(GUIDE);
    const main = mainOf(GUIDE);
    expect(visibleText(main)).toMatch(/prototype does not accept submissions/i);
    expect(main).not.toMatch(/<form\b|<input\b[^>]*type="file"/i);
  });

  it("links each task's brief and the existing help and extension policies", () => {
    expect(htmlPages()).toContain(GUIDE);
    const main = mainOf(GUIDE);
    for (const assessment of assessments) {
      expect(main, `${assessment.title} has a route back to its requirements`).toContain(`/${assessment.id}/`);
    }
    expect(main).toContain('/policies/#extensions"');
    expect(main).toContain('/policies/#asking-for-help"');
  });

  it("sends timetable readers to the extension policy without promising every task an extension", () => {
    const main = mainOf("timetable/index.html");
    expect(main).toContain('/policies/#extensions"');
    expect(visibleText(main)).not.toMatch(/seven days, once per task/i);
  });
});
