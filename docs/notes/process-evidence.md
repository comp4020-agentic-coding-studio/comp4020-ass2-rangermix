# Process evidence, for PROCESS.md

This is source material for the student's own `PROCESS.md`, **not a draft of
it**. The course's AI-use policy makes the process overview "by definition
your own account", so an agent doesn't write it. What's here is the record: the
decisions in order, the commit that carries each, and the reason. Pick what
your narrative needs, and say it in your own words.

The brief's spine for `PROCESS.md`: what you decided a good course looks like,
which decisions you encoded in the harness (a rule in `CLAUDE.md` or a check in
`spec/`), and which you deliberately left out. The sections below follow that
spine.

Commit URLs take the form
`https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/<sha>`.
`pnpm check:evidence` needs the link text to be the hash, for example
[`dcdfee6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/dcdfee6).

## 1. What "a good course" meant, and where each decision lives

| Decision about the course | Encoded as | Commit |
| --- | --- | --- |
| One idea carried through: the protocol is undocumented, not obvious | `CLAUDE.md` "The argument" | `1d4e50f` |
| Both registers on every page, sincere and satirical | `CLAUDE.md` rule | `1d4e50f` |
| Mixed class; never addresses one side of the room | `CLAUDE.md` rule; the design | `20f1503` |
| Content pipeline: research, review, content, slides | `CLAUDE.md` rule | `20f1503` |
| The deficit register is banned outside marked quotation | `spec/inclusive-language.test.ts`, with the detector's own positive and negative cases | `7752322` |
| A reading must record what it was checked against | `readings` schema + `spec/readings.test.ts` | `7752322`, `021ded8` |
| Citations re-checked against Crossref | `pnpm check:readings` (deliberately out of `pnpm check`) | `50e62e1` |
| Week 10's register break, and the no-diagnosis clause, verbatim | `spec/settled-text.test.ts` | `7752322` |
| Twelve dated weeks, Tuesday lecture / Thursday lab, nothing in the break | `spec/calendar.test.ts` | `7752322` |
| Deadlines true in Canberra time across the DST change | `spec/assessment.test.ts` | `7752322` |
| Every week specifies itself; no spec line reused across weeks | `spec/weeks.test.ts`; `CLAUDE.md` convention | `7752322`, `021ded8` |
| The weekly hour is a Lab, and students never see "session" | `spec/weeks.test.ts` | `7752322` |
| Each week has a signature artefact no other week has | the plan's week table; judged by a person, not tested | `ac46812` |

## 2. Failures fixed at the harness level, not retried

These are the moments the rubric's HD band describes: "failures diagnosed and
fixed at the harness level rather than retried".

1. **Vivid study details written from memory.** The first draft of week 2
   illustrated Garfinkel's breaching experiments with the examples everyone
   repeats, but only the abstract had been checked. The rule that caught
   fabricated authors and years didn't cover illustrations. Harness rule
   added: a study's details are claims; read each cited sentence against its
   review row before shipping. `c0e114b`.
   It then caught more of the same before commit: Grice's flouting mechanism
   in week 3 (`e6a6634`); an author described as an autistic advocate and a
   first-publication date in week 6 (`3d536c3`); a video design borrowed from a
   different study in week 10 (`ddcc868`).
2. **Uncited "most people" claims, three weeks running.** Weeks 5, 8 and 9 each
   needed the same hand correction: "the part people most often leave out",
   "the move most students miss". Harness rule added, then applied back to the
   weeks already written. `8866005`, `86bc3a4`.
3. **The deficit register creeping in through a metaphor.** Week 6's budget
   framing produced "don't run at a deficit for long". The vocabulary test
   failed the build. `3d536c3`.
4. **"Session" leaking into lab prose.** Caught twice in week 10's lab by
   the Lab-label test. `ddcc868`.
5. **A test that was wrong, not the content.** The break test started the break
   on Saturday 10 April; the design starts it Monday 12 April and has a journal
   deadline on Sunday 11 April. The fix made the test accurate, not weaker.
   `7c7075e`.

## 3. Calls that beat the obvious alternative

- **Tests before any content** (`7752322`), so each week had a contract to turn
  green, and the commits turning them green are the record.
- **Research all twelve weeks before writing one** (`dcdfee6`), instead of
  researching per week as written. It made the cuts visible in one commit:
  Schegloff & Sacks 1973, Jefferson 1980, Brown & Levinson's face theory,
  Sprecher et al. 2013, and Hall's popular hour figures were all dropped because
  only a summary could be read.
- **Readings as a collection with a verification record**, not a bibliography
  (`021ded8`). A citation nobody checked looks exactly like one somebody did.
- **Hand-drawn diagrams as build-time SVG from one seeded module**
  (`dbbe203`), not a diagram library and not raster art: deterministic diffs,
  dark mode for free, and the same drawings in pages, decks and the social card.
- **The week's page is the lecture** (`021ded8`): the lecture template didn't
  render `spec:` at all, which would have silently broken "every week
  specifies itself".
- **Decks import the lecture's diagram component** (`fd1404a`), so a slide
  can't drift from its lecture.
- **The card outlines its handwriting into paths** (`feaa695`), after two
  silent failures: sharp ignoring the font file, and opentype.js 2.0 emitting
  NaN path data. Both were found by opening the PNG, not by trusting the
  script's output line.

## 4. How the result was known to be right

- `pnpm check` green: 289 spec tests, axe on 85 pages, links, deck structure.
- `pnpm check:readings`: 43 of 43 readings match Crossref on title, year and
  first author.
- Every page measured at 390px wide for horizontal overflow; key pages
  screenshotted at both marking viewports, light and dark. `955a52c`.
- Visual checks that changed the build: diagram labels oversized at desktop
  (`dbbe203`), a state-machine label on its own arrow (`f3472b7`), a two-column
  hero squeezing the drawing, and a seventh nav item wrapping the navigation
  (`2f66a99`).

## 5. Deliberately left out

- **No browser test for layout.** Viewports were checked by measurement and by
  eye; a headless layout suite would have added a heavy dependency to protect
  what a person checks in minutes.
- **No automated terminology-reuse check.** The glossary records each term
  and its week; whether a later week re-coins a term is a reading judgement.
- **Crossref checking stays out of `pnpm check`**, because a network-dependent
  check turns red for reasons unrelated to the course.
- **No test that weeks are distinct.** Only spec lines are checked for
  repetition; whether two weeks could be swapped is the rubric's question, and
  a person's.

## 6. Earlier process, before this build session

- `98af2d7` ("1") and `be2b647` ("basic claude") have uninformative messages.
  Cite around them, or say so.
- `1d4e50f`, `20f1503`: the harness and design written in a cloud session that
  couldn't push, and arrived as patch files; `abf69e8` is the rule that came
  out of it.
