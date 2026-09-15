import { describe, expect, it } from "vitest";
import { nodesOf, pageFor, readPage, visibleText } from "./support/site";

// CLAUDE.md, "Citations": a fabricated citation is the worst failure this
// course has available. No test can read the paper, so this one holds the
// record instead: every reading says where to find it and what it was checked
// against, and a student can follow it there.

const readings = nodesOf("readings");

describe("every reading", () => {
  it.each(readings.map((n) => [n.id, n] as const))("%s can be found and was checked", (id, n) => {
    const meta = n.meta ?? {};
    expect((meta.authors as unknown[] | undefined)?.length ?? 0, `${id} authors`).toBeGreaterThan(0);
    expect(Number(meta.year), `${id} year`).toBeGreaterThan(1900);
    expect(String(meta.venue ?? ""), `${id} venue`).not.toBe("");
    expect(meta.doi ?? meta.url, `${id} has a DOI or a URL`).toBeTruthy();
    if (meta.doi) expect(String(meta.doi)).toMatch(/^10\.\d{4,9}\/\S+$/);

    const checked = meta.checked as { against?: string; on?: string } | undefined;
    expect(checked?.against, `${id} records what it was checked against`).toMatch(
      /^(full text|abstract|publisher record)$/,
    );
    expect(checked?.on, `${id} records when`).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    const page = pageFor(id);
    const href = meta.doi ? `https://doi.org/${meta.doi}` : String(meta.url);
    expect(page, `${id} links to the source`).toContain(`href="${href}"`);
  });

  it("appears on the reading list", () => {
    const list = visibleText(readPage("readings/index.html"));
    for (const n of readings) expect(list).toContain(n.title);
  });
});
