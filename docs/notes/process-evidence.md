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

## 7. Second session: decks for every week, plates, and the two-hour slot

Three asks, in order: a deck for all twelve weeks; real photographs beside the
drawings; and every lecture sized to the two hours it is timetabled for.

### Decks, weeks 3--12

`39434d2` · `95abdb0` · `d3bf8b4` · `2d298d0` · `2e8444d` · `0813e48`

Built from each written lecture, never beside it. `0813e48` also strikes the
design doc's "decks for weeks 1 and 2" and records why all twelve need one.
Week 10's deck carries the register break as three plain slides with the
snap-back on its own, and its speaker notes say the shift is deliberate ---
a deck being the likeliest place for someone to smooth it out (`2e8444d`).

### Drawings, and what they cost to get right

`1d09cd0` · `73b6276` · `711c079` · `4e47384` · `458c068` · `5b8aac0` · `9ba883f`

Five new primitives (`Envelope`, `Form`, `DepthLadder`, `Chain`, `Register`),
nine of twelve weeks, plus the home page. `9ba883f` records the rule that
decided placement --- a drawing earns its place when it shows a mechanism the
prose can't --- and why weeks 6, 7 and 8 keep tables instead. Two drawings were
written and deleted to establish that.

**Three bugs in already-shipped work, none visible to `pnpm check`:**

- `--nt-mono` resolved to nothing on every deck, so every monospace label in a
  diagram had been falling back to the body sans since the decks shipped
  (`5b8aac0`).
- `StateMachine` put horizontal transition labels inside its boxes; week 5's
  diagram had been unreadable (`458c068`).
- Week 3 asserted a page position neither the lecture, the reading nor the
  recorded check supported (`39434d2`).

### Photographs, with provenance

`8f81af5` · `2f4891b`

Four plates, each licence read off the Commons API rather than a search
result, committed rather than hotlinked: a Montreal manual exchange (week 4),
Mission Control during Apollo 13 (week 7), the 1977 ARPANET map (week 11), and
the International Code of Signals (week 1). `scripts/commons.py` does the
lookup; `docs/notes/image-provenance.md` records each licence verbatim and
says plainly that anything not clearly free would be marked as such, because
this repo goes public on ship.

### The two-hour gap

`cf0953b` · `4b12e25` · `01372a6` · `bf79a3e`

`scripts/lecture-timing.ts` (`pnpm check:timing`) estimates each week's
runtime by slide type rather than word count. **Baseline: every week ran
26--46 minutes against a 105-minute content target.** It stays out of
`pnpm check` for the same reason `check:readings` does.

Weeks 1, 4 and 5 rebuilt to ~96 minutes each, through the pipeline in order,
with seven new sources --- every abstract re-verified against Crossref or
OpenAlex rather than taken from the discovery brief. The briefs themselves are
in `docs/notes/research-briefs/`, and they record what was truncated and what
is UNVERIFIED; two week 4 candidates stay cut on exactly that ground.

**The find worth citing:** week 5's apology template was wrong. Kirchhoff,
Wagner & Strack (2012) list an attempt at explanation among the four elements
that mattered for a severe offence, and the week had banned explanation
outright; the template also had no "I'm sorry" in it. Both fixed, with the
change shown on the page rather than quietly swapped (`bf79a3e`).

### Also in this session

- `d6c8b08`: `pnpm test` was collecting a git worktree's copy of the suite
  from under `.claude/worktrees/`, including a test file uncommitted there.
  The gate is now scoped to this tree and that work was left alone. The same
  commit untracks Playwright scratch screenshots swept in by a broad
  `git add`.

## Session: filling the two-hour slot (weeks 2, 3, 8--12)

Twelve lecture decks existed and none of them filled the two hours the week is
timetabled for; `pnpm check:timing` measured the gap at 26--46 minutes per week.
Week 1 had already been taken to 96.7 minutes. This session did the remaining
eleven weeks' worth that were still short, in the pipeline's order each time:
search, verify the abstract, write the review row, write the reading entry,
write the lecture, then build the deck from the written lecture.

**All twelve weeks now pass `check:timing`, running 96.0--105.1 minutes.**

| Commit | Week | What the new research changed |
| --- | --- | --- |
| `0310bfe` | 9 | Laurenceau et al. (1998) and Huang et al. (2017). The depth scale had no field for whether a step *landed*; responsiveness is it. Huang arrives with a 2025 correction notice and a 2019 published dispute, so the week teaches a finding **with its maintenance record** --- the course's argument, from the research side |
| `65bb2b7` | 8 | Brooks, Gino & Schweitzer (2015). The week answered "they'll say no" and not the louder fear, that asking makes you look worse. Their three moderators are the week's only advice about *who* to write to |
| `09fafb3` | 2 | Nisbett & Wilson (1977), Hinds (1999), Malle (2006). The week was one sentence from justifying the asleep test with the actor--observer asymmetry; 173 studies put it near zero, so the rule is now labelled as the course's own |
| `f67fdc1` | 3 | Lee & Pinker (2010), Keysar & Henly (2002), Chevallier et al. (2010). Moves the fault to the end that sent the hint: speakers overestimate being understood, overhearers don't |
| `9a231ee` | 10 | Quinn & Chaudoir (2009), Corrigan & Matthews (2003). The week priced telling and nothing else. Anticipated stigma is a belief an *environment* produces, so it is the measurement under week 8's structural recommendation |
| `0f1678a` | 11 | Alkhaldi et al. (2019), Morrison et al. (2020). Readability correlated with favourability *independent of diagnosis*; and in a real five-minute conversation the judgement travelled to both groups while the withdrawal didn't |
| `cffe562` | 12 | Sala et al. (2020), Moskowitz (2004). "Contested" replaced by the actual comment, whose objection is that the claim isn't testable as written --- now the standard the course's own errata are measured against |

Fifteen new readings, every one verified against a retrievable abstract
(PubMed, OpenAlex or Crossref) and every one passing `pnpm check:readings`.
Three candidates were cut for having no retrievable abstract and the cuts are
recorded in the reviews rather than dropped: Sprecher et al.'s *Taking turns*,
Cho & Keltner (2019), and Petty & Cacioppo --- the last named on week 12's own
"where to start reading" table as the entry point it could not check.

### Three failures worth citing, because no check would have caught two of them

- **The convenient citation.** Week 2 wanted the actor--observer asymmetry to
  justify the asleep test. Checking it first is what produced the better week:
  the rule is now the course's own, and the one condition the effect survived
  under --- negative events --- is the condition every field note is written in.
- **A re-coined list.** Week 12's deck grew four "ethics rules" for the field
  experiment. The lab has carried four ethics *questions* since it was written,
  and the capstone brief cites them by name. Two competing four-item lists in
  one week is exactly what the harness's reuse-terms rule exists to stop, and
  `pnpm check` is blind to it.
- **Frequency claims in speaker notes.** Four notes across weeks 9, 10 and 12
  claimed what most of a room would guess or do. Notes are content; each is now
  an instruction to the lecturer instead.

`spec/inclusive-language.test.ts` caught two of mine directly: "over-correct
... treating you carefully" in a week 10 table, and "nothing here was a cure
for anything" in week 12 --- written to *reject* the framing and still a build
failure. "A convention is not a condition" is shorter and lands harder.

### What CI says, and what it is waiting for

As of `cffe562`, the `check` job's only failing step is **`check:evidence`**,
on three counts: this repo's `PROCESS.md` is still the template, and the
template's two example hashes (`a1b2c3d`, `e4f5a6b`) don't resolve. Build,
typecheck, all 393 spec tests and the `deploy` job pass, and the deployed site
verifies online.

That gate closes when **you** write `PROCESS.md`. Nothing in this file is a
draft of it --- the hashes above are here so the citations are a paste rather
than an archaeology job.
