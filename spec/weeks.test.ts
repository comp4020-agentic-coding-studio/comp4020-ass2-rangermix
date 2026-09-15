import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { DIST, nodesOf, pageFor, readPage, visibleText } from "./support/site";

// CLAUDE.md, "Conventions" and "Alignment": every week specifies itself, the
// weekly contact hour is a Lab, and a week's content traces back to its
// readings. The published spec adds: "at least one lecture carries a real
// deck, linked from its page".

const lectures = nodesOf("lectures");
const labs = nodesOf("sessions");
const specListItems = (html: string) =>
  (html.match(/<section class="spec-list"[\s\S]*?<\/section>/)?.[0].match(/<li>/g) ?? []).length;

describe("every week specifies itself", () => {
  it.each([...lectures, ...labs].map((n) => [n.id]))("%s renders its spec: block", (id) => {
    expect(specListItems(pageFor(id)), `${id} shows spec lines a reader can check`).toBeGreaterThanOrEqual(2);
  });

  it("never reuses a spec line across weeks", () => {
    const lines = [...lectures, ...labs].flatMap((n) => (n.spec ?? []).map((line) => [line, n.id]));
    const seen = new Map<string, string>();
    const repeats = lines.filter(([line, id]) => {
      const before = seen.get(line.toLowerCase());
      seen.set(line.toLowerCase(), id);
      return before !== undefined && before !== id;
    });
    expect(repeats, "a spec line that fits any week specifies none of them").toEqual([]);
  });
});

describe("the weekly contact hour is a Lab", () => {
  it("is called Labs in the listing and the navigation", () => {
    const listing = readPage("sessions/index.html");
    expect(listing).toMatch(/<h1[^>]*>\s*Labs\s*<\/h1>/);
    expect(visibleText(readPage("index.html"))).toMatch(/\bLabs\b/);
  });

  it.each(labs.map((n) => [n.id]))("%s is headed as a Lab", (id) => {
    expect(pageFor(id)).toMatch(/<h1[^>]*>\s*Week \d+ Lab:/);
  });

  it("never shows a student the template's word for it", () => {
    for (const id of ["sessions", ...labs.map((n) => n.id)]) {
      const text = visibleText(readPage(join(id, "index.html")));
      expect(text, id).not.toMatch(/\bsessions?\b/i);
    }
  });
});

describe("weeks and their readings", () => {
  const readings = nodesOf("readings");

  it("has a reading list", () => {
    expect(readings.length).toBeGreaterThanOrEqual(24);
  });

  it.each(lectures.map((n) => [n.id, n] as const))("%s hangs off at least two readings", (_id, n) => {
    expect(n.related.filter((ref) => ref.startsWith("readings/")).length).toBeGreaterThanOrEqual(2);
  });

  it.each(readings.map((n) => [n.id, n] as const))("%s earns its place against a week", (_id, n) => {
    expect(n.related.some((ref) => ref.startsWith("lectures/"))).toBe(true);
  });
});

describe("slides", () => {
  const withSlides = lectures.filter((n) => typeof n.meta?.slides === "string");

  it("at least one lecture carries a deck", () => {
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });

  it.each(withSlides.map((n) => [n.id, String(n.meta?.slides)] as const))(
    "%s links to a real deck at %s",
    (id, slides) => {
      const deck = join(DIST, slides, "index.html");
      expect(existsSync(deck), `${slides} is built`).toBe(true);
      expect(pageFor(id)).toContain(`decks/${slides.split("/").at(-2)}/`);
      const slideCount = (readPage(join(slides, "index.html")).match(/<section\b/g) ?? []).length;
      expect(slideCount, "a real deck, not a placeholder").toBeGreaterThanOrEqual(8);
    },
  );
});
