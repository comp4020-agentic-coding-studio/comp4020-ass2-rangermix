// Hand-drawn strokes as SVG path data, at build time.
//
// The visual system is a standards document drawn by hand: rigorous structure,
// provisional execution. Every stroke here wobbles, overshoots its corners and
// is drawn twice, the way a pencil line is --- but from a seed, so the same
// diagram draws identically on every build and a diff shows only real changes.

export type Random = () => number;

/** A seeded PRNG (mulberry32 over a string hash). Same seed, same drawing. */
export function rng(seed: string): Random {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const n = (value: number) => Math.round(value * 10) / 10;

/** One pass of a wobbly line: a quadratic curve whose control point drifts off
 *  the straight path in proportion to the line's length. */
function pass(x1: number, y1: number, x2: number, y2: number, r: Random, wobble: number): string {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const amp = Math.min(4, 0.9 + length / 150) * wobble;
  const j = () => (r() - 0.5) * 2 * amp;
  const t = 0.35 + r() * 0.3;
  const mx = x1 + (x2 - x1) * t;
  const my = y1 + (y2 - y1) * t;
  return `M${n(x1 + j() * 0.5)} ${n(y1 + j() * 0.5)}Q${n(mx + j())} ${n(my + j())} ${n(x2 + j() * 0.5)} ${n(y2 + j() * 0.5)}`;
}

/** A pencil line: two slightly different passes over the same path. */
export function line(x1: number, y1: number, x2: number, y2: number, r: Random, wobble = 1): string {
  return `${pass(x1, y1, x2, y2, r, wobble)} ${pass(x1, y1, x2, y2, r, wobble * 0.7)}`;
}

/** A line with an open, hand-flicked arrowhead at (x2, y2). */
export function arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r: Random,
): { shaft: string; head: string } {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 11 + r() * 3;
  const barb = (side: 1 | -1) => {
    const a = angle + Math.PI + side * (0.42 + r() * 0.12);
    return pass(x2, y2, x2 + Math.cos(a) * size, y2 + Math.sin(a) * size, r, 0.4);
  };
  return { shaft: line(x1, y1, x2, y2, r), head: `${barb(1)} ${barb(-1)}` };
}

/** A box whose sides overshoot the corners, as a quick rectangle does. */
export function box(x: number, y: number, w: number, h: number, r: Random): string {
  const o = () => 2 + r() * 4;
  return [
    line(x - o(), y, x + w + o(), y, r),
    line(x + w, y - o(), x + w, y + h + o(), r),
    line(x + w + o(), y + h, x - o(), y + h, r),
    line(x, y + h + o(), x, y - o(), r),
  ].join(" ");
}

/** A dashed pencil line, for a reply the protocol expects but nobody says. */
export function dashed(x1: number, y1: number, x2: number, y2: number, r: Random, dash = 14, gap = 9): string {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / length;
  const uy = (y2 - y1) / length;
  const parts: string[] = [];
  // Dashes of uneven length, as a hand makes them.
  for (let at = 0; at < length; ) {
    const end = Math.min(at + dash * (0.7 + r() * 0.6), length);
    parts.push(pass(x1 + ux * at, y1 + uy * at, x1 + ux * end, y1 + uy * end, r, 0.5));
    at = end + gap * (0.75 + r() * 0.5);
  }
  return parts.join(" ");
}

/** An open hand-drawn tick box, for spec lines. */
export function tickBox(size: number, r: Random): string {
  return box(3, 3, size - 6, size - 6, r);
}
