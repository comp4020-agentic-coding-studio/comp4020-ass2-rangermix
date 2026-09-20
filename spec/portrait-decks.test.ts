import { describe, expect, it } from "vitest";
import { nodesOf, pageFor, readPage } from "./support/site";

const lectures = nodesOf("lectures").filter((node) => node.meta?.slides);

describe("decks remain useful while reading on a phone", () => {
  it.each(lectures.map((lecture) => [lecture.id, lecture] as const))(
    "%s has a route back to its lecture",
    (_id, lecture) => {
      const html = readPage(`${String(lecture.meta!.slides)}/index.html`);
      expect(new RegExp(`href="[^"]*${lecture.id}/"[^>]*>\\s*Back to lecture`).test(html)).toBe(true);
    },
  );

  it("offers the same comic transcripts as the lecture pages", () => {
    const withComics = lectures.filter((lecture) => pageFor(lecture.id).includes("Read the comic as text"));
    expect(withComics.length).toBeGreaterThan(0);
    for (const lecture of withComics) {
      const html = readPage(`${String(lecture.meta!.slides)}/index.html`);
      expect(/<summary[^>]*>Read the comic as text<\/summary>/.test(html), lecture.id).toBe(true);
    }
  });
});
