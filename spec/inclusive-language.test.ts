import { describe, expect, it } from "vitest";
import { deficitRegister } from "./support/deficit-register";
import { htmlPages, nodesOf, readPage, visibleText } from "./support/site";

// A cited work's title is someone else's words wherever it appears --- the
// reading's own heading, a link to it --- so every reading title is treated as
// quoted. Kapp et al. may call their paper "Deficit, difference, or both?"; the
// course quoting that title is not the course saying "deficit".
const readingTitles = nodesOf("readings")
  .map((n) => n.title)
  .sort((a, b) => b.length - a.length);
const withoutCitedTitles = (text: string) =>
  readingTitles.reduce((rest, title) => rest.split(title).join(" "), text);

// CLAUDE.md, "Vocabulary": the deficit register is the frame this course exists
// to refuse, so no page may speak in it except to quote someone else. This is
// the argument enforced, not a style check.

describe("the deficit-register detector", () => {
  it.each([
    "she suffers from social anxiety",
    "a high-functioning student",
    "the low functioning end",
    "we can fix you",
    "students need to be corrected",
    "nobody is here to be fixed",
    "autistic people were treated for it",
    "there is no cure",
    "try to act normal",
    "normal people just know",
    "learn to pass as normal",
    "a social deficit",
    "communication impairments",
    "symptoms of autism",
    "special needs provision",
    "differently abled",
    "a burden on the group",
  ])("flags %j", (sentence) => {
    expect(deficitRegister(sentence)).not.toEqual([]);
  });

  it.each([
    "the fix is bilateral",
    "treat a 1.2 second pause as a timeout",
    "fix the email before you send it",
    "the misunderstanding gets corrected",
    "the correct answer is to ask",
    "treat them as adults",
    "a curated reading list",
    "keep the secure copy",
    "an unburdened schedule",
    "self-repair in the next turn",
  ])("lets %j through", (sentence) => {
    expect(deficitRegister(sentence)).toEqual([]);
  });

  it("ignores marked quotations of someone else's framing", () => {
    const html = `<body><p>The clinic called it a <span data-quoted>social deficit</span>.
      See <cite>Deficit, difference, or both?</cite></p></body>`;
    expect(deficitRegister(visibleText(html, { withoutQuotations: true }))).toEqual([]);
    expect(deficitRegister(visibleText(html))).not.toEqual([]);
  });
});

describe("every built page", () => {
  const pages = htmlPages();

  it("finds the pages to read", () => {
    expect(pages.length).toBeGreaterThan(20);
  });

  it.each(pages)("%s stays out of the deficit register", (page) => {
    const text = withoutCitedTitles(visibleText(readPage(page), { withoutQuotations: true }));
    const hits = deficitRegister(text).map((hit) => `${hit.term}: "…${hit.excerpt}…"`);
    expect(hits, "quote someone else's framing with data-quoted, or say what is true").toEqual([]);
  });
});
