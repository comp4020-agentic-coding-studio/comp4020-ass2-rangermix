# Decks for weeks 3--12, and the illustration pass

Working state for two jobs the original plan (`implementation-plan.md`, tasks
18--19) scoped small and the user asked to widen:

1. A deck for every week, not just weeks 1 and 2.
2. Pictures --- illustrations and the course's own visual jokes --- on the
   lecture pages, the decks and the home page.

`docs/course-design.md` settles both, so this file is working state: what
landed, what was deliberately left out, and why.

## Job 1: decks 3--12 --- done

Built from the written lecture, never beside it (harness, content pipeline
step 5). Each deck:

- `title: "NT 101, Week NN: <lecture title>"`, description naming the argument.
- At least eight `---` slides (`spec/weeks.test.ts` counts `<section>`); the
  twelve run 10--17.
- The same argument and the same diagrams as the lecture.
- Speaker notes in a ```` ```notes ```` fence, written as what the lecturer
  says rather than a restatement of the slide.
- Citations as `<span class="source">`, copied from the reading's own record
  rather than retyped, and never a claim the lecture doesn't already carry.
- `slides: /decks/week-NN/` set on the lecture.

All twelve weeks have a deck. Week 10's carries the register break: three
slides with no class, no diagram and no joke, then "Right. Mechanics." on a
slide of its own. `spec/settled-text.test.ts` guards the lecture's wording, not
the deck's; the deck's is shorter by necessity and must not soften the
snap-back. Its speaker notes say so, because a deck is the likeliest place for
someone to smooth it out.

## Job 2: pictures --- done

The constraint that decided everything: the visual system is a standards
document drawn by hand (`CLAUDE.md`, Visual system). Every picture is
build-time SVG from `src/lib/sketch.ts`. No raster illustrations, no stock art,
no imported internet memes --- an imported meme is someone else's visual
register, and a course arguing that conventions should be documented cannot
borrow an undocumented one for a laugh.

So the satire is carried by the course's own hand: a stamped status, a note
pencilled in a margin, a deadpan caption under a rigorous drawing. The joke is
the register, never the student.

### New primitives

| Component | What it draws | Used by |
| --- | --- | --- |
| `Envelope` | what was said, what it meant, and what stayed out of the envelope | weeks 3, 10 |
| `Form` | a blank numbered form with ruled lines to write on | week 2 |
| `DepthLadder` | the depth scale with the plus-or-minus-one window drawn round a rung | week 9 |
| `Chain` | the diffusion-chain method: three chains, one composition each | week 11 |
| `Register` | an open-issues sheet with a rubber-stamped status per row | week 12 |

The home page reuses the existing `StateMachine` for the weekly loop rather
than gaining a sixth primitive.

Planned in the first draft of this file and not built: `ConformanceTable`,
`Stamp` as a standalone, `Ledger`, `Runbook`, `RateLimit`. The stamp lives
inside `Register`, where its one use is; the rest were for weeks that turned
out not to need a drawing (below), or duplicated a table.

### Where drawings went, and where they deliberately didn't

Drawings now: home page, and weeks 1, 2, 3, 4, 5, 9, 10, 11, 12.

**Weeks 6, 7 and 8 keep tables and get no drawing.** Each already renders its
signature artefact as a populated table --- the masking ledger, the runbook's
six sections with examples, the email's seven clauses beside a quotable
specimen. A blank form or a second rendering of the same rows beside them is
decoration, and `CLAUDE.md` says to cut decoration. Two were written and
deleted to establish that: an annotated version of week 8's email, and a
runbook form for week 7 that landed directly under the table it duplicated.

The rule that came out of it: **a drawing earns its place when it shows a
mechanism the prose can't.** Week 9's ladder shows a rule a table can only
state. Week 3's envelope shows a wrapping. Week 2's form shows an artefact that
was only ever a numbered list. A picture of rows that already exist as rows
shows nothing.

## Bugs this pass found in already-shipped work

Worth recording, because all three were invisible to `pnpm check` and only
turned up by opening a page and looking at it.

- **`--nt-mono` resolved to nothing on every deck.** astromotion emits only the
  fonts named in `fontVariables` and none of the theme's `--at-font-*` tokens,
  so every monospace label inside a diagram fell back to the body sans. Week
  1's actors and week 5's state names had been in the wrong face since they
  shipped. `--nt-mono` and `--nt-ink` now carry their own fallbacks, the way
  `--nt-hand` always did.
- **`StateMachine` put horizontal transition labels inside its boxes.** The gap
  between two boxes is 140px and the labels are wider than that, so week 5's
  "most specific initiator" and "one-turn accept" ran into the boxes either
  side. Labels for horizontal transitions now sit above the row.
- **Week 3 asserted a page the check never reached.** The lecture put Grice's
  "Be polite" aside a page after the maxims, the reading's annotation put it on
  the same page, and the review's recorded check (pp. 45--47) settles neither.
  Both now say "in the same passage".

## Rules learned while doing this

- **A deck slide cannot carry a claim the lecture doesn't.** The lecture is the
  checked artefact; the deck inherits its citations and nothing more. Week 9's
  deck says out loud that only Hall's abstract was read, because the week's own
  spec line asks the student to do the same.
- **A drawing must not imply data the course doesn't have.** Week 11 draws the
  diffusion-chain *method*, not the results: a line that visibly thinned as it
  travelled would look like a measurement. The mixed chain's seats are left
  unmarked because the review recorded the compositions, not the seating order.
- **Geometry is only checkable by looking.** Every drawing here had at least one
  collision or clipped line that built cleanly, passed axe, and was obviously
  wrong on screen. Text overflowing a fixed box was the recurring one, so each
  new primitive sizes its frame to its contents.
- **A drawing needs a text equivalent, not alt text.** Each new primitive pairs
  its SVG with a visually hidden list or definition list, because a stamped
  status or a conforming window read aloud is the point of the picture.
- **The preview server caches CSS across rebuilds.** A token fix that was
  correct in `dist/` read as unchanged in the browser until the page was loaded
  with a cache-busting query. Worth remembering before concluding a style fix
  didn't work.

## Job 3: two hours per week

Added after the first two jobs, when the user pointed out that a week's
lecture is timetabled for two hours and none of these decks filled one.

`pnpm check:timing` (`scripts/lecture-timing.ts`) estimates each week's
runtime. It classifies every slide by what delivering it costs --- a title
slide is a minute, a sequence diagram walked through top to bottom is three
and a half, a table is three --- and adds time for speaker-note lines, which
are things said aloud that aren't on the slide. In-room exercises announce
their own length in their heading, and that visible figure is what gets
counted; a hidden marker beside it would be a second copy to keep in step.

The figures are planning numbers, not a finding about lecturing. They are
there so "this week is short" is a claim someone can re-run and argue with.

**Target:** 105 minutes of content in a 120-minute slot, leaving arrival, a
mid-lecture break and overrun.

**Baseline, before any of this:** every week ran 26--46 minutes. All twelve
were short, by about 70 minutes each.

### What the extra time is made of

The user chose the slow path: new research per week as well as applied
material. So each week gets

1. **new sources**, through the pipeline in order --- search, read the
   abstract, confirm the specific claim, write the review row, write the
   reading entry, and only then write slides;
2. **in-room exercises**, seated and short, and deliberately *not* what
   Thursday's lab does. The lab goes out and collects; the lecture exercises
   rehearse a script or force a criterion;
3. **worked examples** and a **recap of the terms** the week builds on, which
   is also what makes "reuse the vocabulary exactly" checkable in the room.

### Status

- [x] Week 1 --- Duranti (1997) and Stivers & Rossano (2010); two exercises; 96.7 min
- [ ] Weeks 2--12

### Rules learned

- **Do not reproduce a list the abstract only counts.** Duranti proposes six
  criteria and finds four types of Samoan greeting; Stivers and Rossano name
  response-mobilising features. Only the abstracts were read, so the course
  names the count and not the contents, and says on the slide that it is doing
  so. That is the citation rule applied to the course itself, and it turns out
  to teach better than a fabricated list would.
- **A new source should change the advice, not decorate it.** Stivers and
  Rossano earned their place because obligation-as-a-gradient changes what the
  week tells both halves of the room to do. A source that only restates what
  the week already said would be padding with a DOI on it.
