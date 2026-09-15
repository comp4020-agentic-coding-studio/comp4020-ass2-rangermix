// Readers for what the build actually produced. Every spec test asserts against
// dist/ --- the generated course API and the rendered pages --- so the tests
// hold whatever the pages are built from.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

export const DIST = resolve("dist");

export interface ApiNode {
  id: string;
  type: string;
  title: string;
  description?: string;
  related: string[];
  spec?: string[];
  meta?: Record<string, unknown>;
}

export interface CourseApi {
  course: {
    code: string;
    title: string;
    level: number;
    startDate: string;
    endDate: string;
    learningOutcomes?: string[];
  };
  nodes: ApiNode[];
  edges: { from: string; to: string }[];
}

export const api = JSON.parse(readFileSync(join(DIST, "api/index.json"), "utf8")) as CourseApi;

export const nodesOf = (type: string): ApiNode[] => api.nodes.filter((n) => n.type === type);

export const byWeek = (type: string, week: number): ApiNode[] =>
  nodesOf(type).filter((n) => Number(n.meta?.week) === week);

/** The rendered page for a node id such as `lectures/week-01`. */
export function pageFor(id: string): string {
  const path = join(DIST, id, "index.html");
  if (!existsSync(path)) throw new Error(`${id} has no built page at ${relative(DIST, path)}`);
  return readFileSync(path, "utf8");
}

export function readPage(route: string): string {
  return readFileSync(join(DIST, route), "utf8");
}

/** Every rendered HTML page, as dist-relative paths. Generated assets, the
 *  search index and the JSON API are not pages anyone reads. */
export function htmlPages(dir = DIST): string[] {
  const skip = new Set(["_astro", "api", "pagefind"]);
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) {
      return dir === DIST && skip.has(entry.name) ? [] : htmlPages(join(dir, entry.name));
    }
    return entry.name.endsWith(".html") ? [relative(DIST, join(dir, entry.name))] : [];
  });
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
  mdash: "—",
  ndash: "–",
  hellip: "…",
};

function decode(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, code: string) => {
    if (code.startsWith("#x") || code.startsWith("#X")) return String.fromCodePoint(parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(parseInt(code.slice(1), 10));
    return ENTITIES[code.toLowerCase()] ?? whole;
  });
}

/**
 * The words a reader sees on a page: the title, the description and the body
 * text, with markup, scripts and styles removed.
 *
 * `withoutQuotations` also drops two kinds of marked quotation, which is how a
 * page names someone else's framing without adopting it: any element carrying
 * a `data-quoted` attribute, and `<cite>` (the title of a cited work). The match
 * is not nesting-aware, so a quoted element must not contain another element of
 * its own tag name.
 */
export function visibleText(html: string, { withoutQuotations = false } = {}): string {
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "";
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? "";
  let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  body = body.replace(/<(script|style|template|noscript)\b[\s\S]*?<\/\1>/gi, " ");
  body = body.replace(/<!--[\s\S]*?-->/g, " ");
  let head = `${title} ${description}`;
  if (withoutQuotations) {
    const quoted = /<([a-z][a-z0-9]*)\b[^>]*\bdata-quoted\b[^>]*>[\s\S]*?<\/\1>/gi;
    body = body.replace(quoted, " ").replace(/<cite\b[^>]*>[\s\S]*?<\/cite>/gi, " ");
    head = head.replace(/data-quoted/g, "");
  }
  const text = `${head} ${body}`.replace(/<[^>]+>/g, " ");
  return decode(text).replace(/\s+/g, " ").trim();
}

/** Typography-insensitive text, so a settled passage matches whatever the
 *  markdown pipeline did to its quotes and dashes. */
export function normalise(text: string): string {
  return text
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/—/g, "---")
    .replace(/–/g, "--")
    .replace(/\s+/g, " ")
    .trim();
}

const canberraParts = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Canberra",
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** A timestamp as a Canberra wall clock reads it, DST included. */
export function inCanberra(value: unknown): { date: string; weekday: string; time: string } {
  const parts = Object.fromEntries(
    canberraParts.formatToParts(new Date(String(value))).map((part) => [part.type, part.value]),
  );
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    weekday: parts.weekday,
    time: `${parts.hour}:${parts.minute}`,
  };
}

/** A bare `YYYY-MM-DD` course date's weekday, with no timezone to move it. */
export function weekdayOf(date: unknown): string {
  return new Date(`${String(date).slice(0, 10)}T00:00:00Z`).toLocaleDateString("en-AU", {
    weekday: "short",
    timeZone: "UTC",
  });
}
