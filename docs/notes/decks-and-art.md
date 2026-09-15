# Decks for weeks 3--12, and the illustration pass

Working state for two jobs the original plan (`implementation-plan.md`, tasks
18--19) deliberately scoped small and the user has now asked to widen:

1. A deck for every week, not just weeks 1 and 2.
2. Pictures --- illustrations and the course's own visual jokes --- on the
   lecture pages, the decks and the home page.

`docs/course-design.md` is updated to settle both, so this file is working
state only: what is done, what is left, and the decisions that shaped it.

## Job 1: decks 3--12

Built from the written lecture, never beside it (harness, content pipeline
step 5). Each deck:

- `title: "NT 101, Week NN: <lecture title>"`, description naming the argument.
- At least eight `---` slides (`spec/weeks.test.ts` counts `<section>`).
- The same argument and the same diagrams as the lecture. A slide that
  contradicts its lecture is a bug.
- Speaker notes in a ```` ```notes ```` fence on the slides that need them,
  written as what the lecturer says, not a restatement of the slide.
- Citations as `<span class="source">` and never a claim the lecture doesn't
  already carry with a checked reading.
- `slides: /decks/week-NN/` set on the lecture.

### Status

- [x] Week 3 --- Payload and Envelope
- [x] Week 4 --- Latency and Turn-Taking
- [x] Week 5 --- Error Handling and Repair
- [x] Week 6 --- Masking: Cost Accounting
- [x] Week 7 --- Emergency: Overload, Shutdown, Recovery
- [x] Week 8 --- Institutional Protocols
- [x] Week 9 --- Escalation Rates
- [ ] Week 10 --- Disclosure (carries the register break; see below)
- [ ] Week 11 --- Interoperation, Not Conversion
- [ ] Week 12 --- Advanced Topics and Further Study

**Week 10's deck carries the register break.** The lecture drops the protocol
register for four paragraphs and snaps back with "Right. Mechanics." The deck
does the same thing in deck form: one slide in the `hand` class, no protocol
vocabulary, no diagram, then the snap-back as its own slide. Do not "fix" it.
`spec/settled-text.test.ts` guards the lecture's wording; the deck's version is
shorter by necessity but must not soften the snap-back.

## Job 2: pictures

The constraint that decides everything here: the visual system is a standards
document drawn by hand (`CLAUDE.md`, Visual system). Every picture on this site
is build-time SVG from `src/lib/sketch.ts`. No raster illustrations, no stock
art, no imported internet memes --- an imported meme is someone else's visual
register, and a course arguing that conventions should be documented cannot
borrow an undocumented one for a laugh.

So "memes" here means **the course's own visual jokes, in the course's own
hand**: a conformance badge stamped on a page, an errata sticker, a deadpan
caption under a rigorous diagram. The joke is the register, never the student.

### New primitives

| Component | What it draws | Weeks using it |
| --- | --- | --- |
| `ConformanceTable` | a drawn conformance matrix: implementation × clause × verdict | 3, 8, 11 |
| `Stamp` | a rubber stamp, rotated, over the corner of a block --- deadpan | home, 6, 10, 12 |
| `Ledger` | the masking ledger as a drawn double-entry sheet | 6 |
| `Runbook` | a drawn card with tear-off lines, for the week 7 runbook | 7 |
| `RateLimit` | escalation depth against stages, drawn as a step plot | 9 |
| `Handshake` (exists as `HeroSketch`) | the home-page opening handshake | home |

### Status

- [ ] `Stamp` primitive + the home page's stamps
- [ ] `ConformanceTable` primitive, used in weeks 3, 8, 11
- [ ] `Ledger`, week 6
- [ ] `Runbook`, week 7
- [ ] `RateLimit`, week 9
- [ ] Every new drawing checked at 1920x1080 and 390x844, light and dark
- [ ] Every new drawing carries a text equivalent (axe clean, and the exchange
      readable without the picture)

## Rules learned while doing this

Filled in as the work lands, not before --- a ticked box or a stated lesson
that no commit backs is the failure this file exists to prevent.

- **A deck slide cannot carry a claim the lecture doesn't.** The lecture is the
  checked artefact; the deck inherits its citations and nothing more.
- **A drawing needs a text equivalent, not alt text.** The sketch components
  already pair every SVG with a visually hidden list; new primitives match
  that, because a conformance verdict read aloud is the point of the table.
