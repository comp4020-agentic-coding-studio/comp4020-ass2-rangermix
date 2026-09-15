#!/usr/bin/env node
// Re-checks every reading's citation against Crossref: title, year and first
// author, from the DOI the entry gives. Run it with `pnpm check:readings`.
//
// It catches the fabricated or misremembered citation --- the wrong year, an
// author guessed from the topic, a title paraphrased from memory --- which is
// the worst failure this course has available. It cannot tell whether a paper
// says what the week claims it says; that is what the `checked:` record on each
// entry answers for, and what a person reading the source does.
//
// Not part of `pnpm check` on purpose: a check that fails when Crossref is
// slow is a flaky check. Entries with a URL and no DOI are listed for checking
// by hand.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { parse } from "yaml";

interface Reading {
  file: string;
  title: string;
  authors: string[];
  year: number;
  doi?: string;
  url?: string;
}

interface CrossrefWork {
  title?: string[];
  subtitle?: string[];
  author?: { family?: string; name?: string }[];
  editor?: { family?: string }[];
  issued?: { "date-parts"?: number[][] };
  "published-print"?: { "date-parts"?: number[][] };
  "published-online"?: { "date-parts"?: number[][] };
}

export function normalise(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function readReadings(dir: string): Reading[] {
  return readdirSync(dir)
    .filter((name) => /\.mdx?$/.test(name))
    .map((name) => {
      const source = readFileSync(join(dir, name), "utf8");
      const front = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
      return { file: name, ...(parse(front) as Omit<Reading, "file">) };
    });
}

/** Compare one entry with its Crossref record; an empty list means it matches. */
export function compare(reading: Reading, work: CrossrefWork): string[] {
  const problems: string[] = [];

  const main = normalise(work.title?.[0] ?? "");
  const full = normalise([work.title?.[0], ...(work.subtitle ?? [])].filter(Boolean).join(" "));
  const ours = normalise(reading.title);
  // Crossref sometimes keeps a subtitle the citation drops, or a footnote
  // marker ("Sequencing in Conversational Openings 1") the citation shouldn't.
  const footnote = main.replace(/ \d$/, "");
  if (!(ours === main || ours === full || ours === footnote || (main.length > 0 && ours.startsWith(main)))) {
    problems.push(`title: frontmatter "${reading.title}" / Crossref "${work.title?.[0]}${work.subtitle?.length ? `: ${work.subtitle[0]}` : ""}"`);
  }

  const years = [work.issued, work["published-print"], work["published-online"]]
    .map((date) => date?.["date-parts"]?.[0]?.[0])
    .filter((year): year is number => typeof year === "number");
  if (!years.includes(reading.year)) {
    problems.push(`year: frontmatter ${reading.year} / Crossref ${[...new Set(years)].join(" or ") || "none"}`);
  }

  const first = work.author?.[0]?.family ?? work.author?.[0]?.name ?? work.editor?.[0]?.family ?? "";
  const ourFamily = normalise(reading.authors[0]?.split(",")[0] ?? "");
  if (normalise(first) !== ourFamily) {
    problems.push(`first author: frontmatter "${reading.authors[0]}" / Crossref "${first}"`);
  }
  return problems;
}

async function crossref(doi: string): Promise<CrossrefWork | string> {
  const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
    headers: { "User-Agent": "slop1562-readings-check (course site citation check)" },
  });
  if (!response.ok) return `Crossref answered ${response.status} for ${doi}`;
  return ((await response.json()) as { message: CrossrefWork }).message;
}

async function main(): Promise<void> {
  const dir = process.argv[2] ?? "src/content/readings";
  const readings = readReadings(dir);
  let failed = false;
  for (const reading of readings) {
    if (!reading.doi) {
      console.log(`! ${reading.file}: no DOI --- check ${reading.url ?? "(no URL either)"} by hand`);
      continue;
    }
    const work = await crossref(reading.doi);
    if (typeof work === "string") {
      console.log(`✗ ${reading.file}: ${work}`);
      failed = true;
      continue;
    }
    const problems = compare(reading, work);
    if (problems.length === 0) {
      console.log(`✓ ${reading.file}`);
    } else {
      failed = true;
      for (const problem of problems) console.log(`✗ ${reading.file}: ${problem}`);
    }
  }
  console.log(`${readings.length} reading(s) checked`);
  if (failed) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
