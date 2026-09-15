#!/usr/bin/env node
// Renders the link-preview card, src/assets/images/card.png (1200×630), from
// the same seeded stroke module the site's diagrams use, so the card is drawn
// in the course's hand rather than pasted in from somewhere else.
//
// Run with `node scripts/render-card.ts`. The output is committed; the build
// never runs this.
//
// The handwriting labels are Kalam (SIL Open Font License, scripts/card/OFL.txt)
// outlined into SVG paths with opentype.js. Rasterising text through sharp
// can't be trusted to find a font file: on macOS its text layout goes through
// the system's font machinery and silently falls back to a sans-serif. Paths
// look the same on any machine. The title and code use system faces
// (Helvetica Neue, Menlo) that ship with macOS.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";
import { arrow, box, dashed, line, rng } from "../src/lib/sketch.ts";

const W = 1200;
const H = 630;
const paper = "#fcfaf6";
const ink = "#29231d";
const gold = "#b97d1c";
const bronze = "#8a5c13";
const graphite = "#6b6154";
const out = fileURLToPath(new URL("../src/assets/images/card.png", import.meta.url));

const fontBuffer = readFileSync(fileURLToPath(new URL("./card/Kalam-Regular.ttf", import.meta.url)));
const kalam = opentype.parse(fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength));

// opentype.js is pinned to 1.3.4: 2.0.0 parses some of Kalam's glyphs into
// path data containing NaN, and librsvg silently stops drawing at the first
// one ("obvious." rendered as "obvio"). Ligature features stay off; Latin
// labels need none.
const plain = { kerning: true, features: { liga: false, rlig: false } };

/** Kalam text as a filled path, with its baseline at y. */
const hand = (text: string, x: number, y: number, size: number, colour: string, anchor: "start" | "middle" = "start") => {
  const left = anchor === "middle" ? x - kalam.getAdvanceWidth(text, size, plain) / 2 : x;
  return `<path d="${kalam.getPath(text, left, y, size, plain).toPathData(1)}" fill="${colour}"/>`;
};

const r = rng("social card handshake");
const ax = 760;
const bx = 1080;
const mid = (ax + bx) / 2;
const stroke = (d: string, colour: string, width = 2.4) =>
  `<path d="${d}" fill="none" stroke="${colour}" stroke-width="${width}" stroke-linecap="round"/>`;

const rows = [
  { y: 250, from: ax, to: bx, colour: ink },
  { y: 360, from: bx, to: ax, colour: gold },
  { y: 470, from: ax, to: bx, colour: ink, dashed: true },
];

const drawing = [
  stroke(box(ax - 50, 110, 100, 52, r), ink),
  stroke(box(bx - 50, 110, 100, 52, r), ink),
  stroke(line(ax, 172, ax, 560, r, 0.6), graphite, 1.8),
  stroke(line(bx, 172, bx, 560, r, 0.6), graphite, 1.8),
  ...rows.flatMap((row) => {
    const dir = Math.sign(row.to - row.from);
    const a = arrow(row.from + 12 * dir, row.y, row.to - 14 * dir, row.y, r);
    return [
      stroke(row.dashed ? dashed(row.from + 12 * dir, row.y, row.to - 14 * dir, row.y, r) : a.shaft, row.colour),
      stroke(a.head, row.colour),
    ];
  }),
  stroke(line(60, 560, 620, 560, r, 1.2), graphite, 1.6),
].join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  ${drawing}
  <text x="${ax}" y="145" font-family="Menlo" font-size="24" fill="${ink}" text-anchor="middle">A</text>
  <text x="${bx}" y="145" font-family="Menlo" font-size="24" fill="${ink}" text-anchor="middle">B</text>
  <text x="60" y="120" font-family="Menlo" font-size="26" fill="${bronze}">SLOP1562 / NT 101</text>
  <text x="60" y="205" font-family="Helvetica Neue" font-weight="bold" font-size="58" fill="${ink}">Undocumented</text>
  <text x="60" y="270" font-family="Helvetica Neue" font-weight="bold" font-size="58" fill="${ink}">Protocols</text>
  <text x="60" y="325" font-family="Helvetica Neue" font-size="28" fill="${graphite}">Field Methods in Neurotypical</text>
  <text x="60" y="362" font-family="Helvetica Neue" font-size="28" fill="${graphite}">Interoperation</text>
  <text x="60" y="600" font-family="Helvetica Neue" font-size="22" fill="${graphite}">Slop University</text>
  ${hand("How are you?", mid, 232, 36, ink, "middle")}
  ${hand("Good, you?", mid, 342, 36, gold, "middle")}
  ${hand("a token, not a status report", mid, 398, 25, bronze, "middle")}
  ${hand("(both keep walking)", mid, 452, 30, ink, "middle")}
  ${hand("The protocol is undocumented,", 60, 440, 36, bronze)}
  ${hand("not obvious.", 60, 482, 36, bronze)}
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log(`wrote ${out}`);
