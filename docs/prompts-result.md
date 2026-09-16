# Prompts and results --- second build session (15--16 September 2026)

A curated record of this session: each prompt as it was typed, a trimmed
version of what came back, and the commits it produced. It is source material
for `PROCESS.md`, like `docs/notes/process-evidence.md`, and not a draft of it.

- **Prompts are verbatim.** The answers to a clarifying question are included,
  because they changed what got built.
- **Omitted: prompts that are only "continue" or only a slash command.** They
  carry no instruction of their own, so they get no section. Any work they
  resumed is filed under the prompt that asked for it. That includes "continue
  the work in Lecture slides and illustrations session", which picked up
  section 3's task in a second session. A prompt that says "continue" and then
  gives a new instruction, like section 1's, is kept. A line Claude Code
  inserts on resume isn't a prompt either.
- **Timestamps are when each prompt was sent**, read from Claude Code's session
  transcripts rather than estimated, in Canberra time (AEST, UTC+10; daylight
  saving hadn't started).
- **Responses are curated** --- cut to the decisions and results, not the tool
  output.
- **Every hash below comes from `git log`**, not from memory. The work's full
  range is
  [`07cea35...849a75d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/compare/07cea35...849a75d);
  this log's own commits follow it.
- **The work ran across two Claude Code sessions.** Everything up to `399b641`
  came from the first (`58785399`). Commits `0310bfe` to `849a75d` came from a
  second (`c14c47e2`), which resumed section 3's task. Their results were first
  read back from the commit messages; that session later rewrote them from its
  own transcript (section 4). The end state at the bottom
  was re-checked with the tools, not copied from them.

---

## 1. Decks for every week, and pictures

*Sent 2026-09-15 23:10:47 AEST*

> 1. continue to finish slides for the rest of lectures
> 2. add some adequate pictures, illustration, memes for the lecture page, slides and the homepage

**Result --- decks.** Weeks 3--12 each got a deck built from its written
lecture, with speaker notes and citations copied from the reading records.
Week 10's deck carries the sanctioned register break as three plain slides,
then "Right. Mechanics." on a slide of its own; its speaker notes say the shift
is deliberate. The design doc had scoped decks to weeks 1 and 2; it now settles
all twelve.

**Result --- pictures.** "Memes" were read as the course's own visual jokes in
its own hand --- a stamped status, a pencilled margin note --- rather than
borrowed internet images, because the harness fixes the visual system as a
hand-drawn standards document. Five new build-time SVG primitives: `Envelope`
(weeks 3 and 10), `Form` (week 2), `DepthLadder` (week 9), `Chain` (week 11)
and `Register` (week 12). The home page got the weekly loop, drawn with the
existing state machine.

Weeks 6, 7 and 8 deliberately got no drawing: each already shows its key
artefact as a populated table, and two drawings that only repeated a table were
written and deleted. The rule that came out of it: a drawing earns its place
when it shows a mechanism the prose can't.

**Found and fixed along the way**, none of it visible to `pnpm check`:

- `--nt-mono` resolved to nothing on every deck, so monospace diagram labels
  had been rendering in the body sans since the decks shipped.
- `StateMachine` put horizontal transition labels inside its boxes, which made
  week 5's diagram unreadable.
- Week 3 claimed a page position for Grice's "Be polite" aside that neither the
  lecture, the reading nor the recorded check supported.
- The vocabulary test caught a deck of mine shortening "corrects a
  misunderstanding of yours" to "corrects you".

| Commit | What it did |
| --- | --- |
| [`39434d2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/39434d2) | Week 3 deck; drops the unverified page claim |
| [`95abdb0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/95abdb0) | Week 4 and 5 decks |
| [`d3bf8b4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/d3bf8b4) | Week 6 and 7 decks; week 7's crisis slide kept plain |
| [`2d298d0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/2d298d0) | Week 8 and 9 decks |
| [`2e8444d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/2e8444d) | Week 10 deck with the register break; vocabulary fix |
| [`0813e48`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/0813e48) | Weeks 11 and 12; design doc settles all twelve decks |
| [`1d09cd0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/1d09cd0) | `Envelope`, weeks 3 and 10 |
| [`73b6276`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/73b6276) | `Form`, week 2 |
| [`711c079`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/711c079) | `DepthLadder`, week 9 |
| [`4e47384`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/4e47384) | `Chain`, week 11; `Register`, week 12 |
| [`458c068`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/458c068) | Home-page loop; state-machine label fix |
| [`5b8aac0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/5b8aac0) | Drawings onto the decks; deck monospace fix |
| [`9ba883f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/9ba883f) | Records the drawing rule and the three table-only weeks |

---

## 2. Bugs, real images, two-hour lectures

*Sent 2026-09-16 13:00:50 AEST*

> 1. have you fixed the bugs you found? if not, fix them
> 2. not only drawings, I want to you search the internet for actual image - anything can be found on Google / public domain is acceptable
> 3. estimate the lecture length of each week. there should be 2 hours of lecture each week. extend the slides / note if the content is not enough.

**Result --- bugs.** All four had been fixed in the commits above, and that was
confirmed against the current code before anything else.

**Result --- measuring.** `scripts/lecture-timing.ts` (`pnpm check:timing`)
estimates each week's runtime from slide types and speaker-note lines, and
in-room exercises count the duration shown in their own heading. Baseline:
**every week ran 26--46 minutes against a 105-minute content target** (a
120-minute slot, less arrival and a break).

**Clarifying question, and the answers** *(answered 2026-09-16 13:10:27
AEST)*. Two decisions were put back to the user before the slow work started:

- *What should the extra ~70 minutes a week be made of?* --- **"New research
  per week as well"**: new sources through the full pipeline, plus exercises
  and worked examples.
- *How should photographs sit with the drawings?* --- **"alongside, document
  source and link, any licence including copyrighted."**

On the second, public-domain and CC sources were still preferred wherever an
equally good image existed, because the repo goes public when it ships. All
four images ended up free, so there is nothing to clear.

**Result --- images.** Four plates. Each licence was read from the Wikimedia
Commons API rather than a search result, and each file is committed rather than
hotlinked, with provenance in `docs/notes/image-provenance.md`:

- International Code of Signals, week 1 --- its `Cancel` and `Substitute` rows
  are week 5's repair signals, published.
- A Montreal manual telephone exchange, c. 1897, week 4.
- Mission Control during Apollo 13, week 7.
- The March 1977 ARPANET logical map, week 11. It carries its own disclaimer
  about its accuracy.

**Result --- research.** Four discovery agents searched in parallel and wrote
briefs to `docs/notes/research-briefs/`, each marking what was truncated or
UNVERIFIED. Every abstract was then re-checked against Crossref or OpenAlex
before it shipped. Weeks 1, 4 and 5 came first. The finding worth citing:
**week 5's apology template was wrong** --- Kirchhoff, Wagner & Strack (2012)
found an attempt at explanation helps, which the week had banned, and the
template had no "I'm sorry" in it. Both are fixed, and the page shows what
changed.

**Mistakes, recorded:**

- `pnpm check` was piped through `tail`, the pipe's exit status hid a red run,
  and a commit went in anyway.
- Playwright scratch screenshots were swept into a commit.
- `pnpm test` had been collecting tests from a git worktree under
  `.claude/worktrees/` that this session didn't create. The gate is now scoped
  to this tree, and that work was left untouched.

| Commit | What it did |
| --- | --- |
| [`8f81af5`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/8f81af5) | Plates for weeks 4, 7 and 11; `Plate.astro`; `scripts/commons.py`; provenance file |
| [`d6c8b08`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/d6c8b08) | Test gate scoped to this tree; scratch output untracked |
| [`cf0953b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/cf0953b) | Timing estimator; week 1 researched (Duranti 1997; Stivers & Rossano 2010) |
| [`2f4891b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/2f4891b) | Signal-code plate for week 1 |
| [`4b12e25`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/4b12e25) | `pnpm check:timing` wired in; baseline recorded |
| [`01372a6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/01372a6) | Week 4 researched (Roberts et al. 2011; Kendrick 2015); research briefs added |
| [`bf79a3e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/bf79a3e) | Week 5 researched; apology template corrected (Kirchhoff et al. 2012; Fehr et al. 2010) |

---

## 3. CI, then every remaining week

*Sent 2026-09-16 15:34:17 AEST*

> check why CI is failing and fix it. after that finish changes for all weeks

**Result --- CI.** Nothing in the build was broken. Build, typecheck, every
spec test and the `deploy` job passed, and the deployed site verified online.
The only red step was `check:evidence`, and it had been red on every run,
including runs from before this session: `PROCESS.md` was still the starter
template, including the template's two example hashes, `a1b2c3d` and `e4f5a6b`.

That file is the student's own account under the course's AI-use policy, and
the harness says an agent must not write it. So instead of "fixing" CI by
writing it, the evidence log was brought up to date with real hashes.

The user's own commit [`3d2c45d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/3d2c45d), made outside Claude Code, then removed the
template comment from `PROCESS.md`.

**Result --- weeks, first session.** Weeks 6, 7 and 8 went through the pipeline
before the first session stopped:

- **Week 6** --- Bradley et al. (2021): time spent camouflaging is what seems
  most damaging, so the ledger's recovery-hours unit turned out to be the right
  guess. Hull et al. (2019), the CAT-Q: equivalent structure across diagnostic
  group.
- **Week 7** --- Phung et al. (2021) name four phenomena (BIMS), so the week's
  three time scales were an incomplete map; the correction is made in week 7
  rather than saved for the errata. Strömberg et al. (2022) measured sensory
  overload.
- **Week 8** --- disability support staff name "relying on students to
  self-advocate" as a barrier (Davies & Bagnall 2024), so the week teaches the
  email and says whose job the asking shouldn't be.

Week 9 was started too --- Sprecher, Treger & Wondra (2013), with its lecture
and deck changes --- but was still uncommitted, at about 78 of 105 minutes, when
the first session stopped. It landed in `0310bfe` from the second session.

**Mistake, recorded:** a banned word ("burden") reached a week 8 speaker note,
and a piped `pnpm check` let that commit through red a second time. Fixed in
`399b641`.

| Commit | What it did |
| --- | --- |
| [`30397cf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/30397cf) | Evidence log updated with this session's hashes |
| [`3d2c45d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/3d2c45d) | *(user)* `PROCESS.md`: template comment removed |
| [`d0dae67`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/d0dae67) | Week 6 researched |
| [`03fc888`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/03fc888) | Week 7 researched; week 6 deck to slot |
| [`2e5876d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/2e5876d) | Week 8 researched |
| [`399b641`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/399b641) | Banned word removed from a week 8 speaker note |

**Result --- weeks, second session.** The same task was resumed in a second
session (`c14c47e2`), prompted only by "continue". It found week 9 drafted but
uncommitted at 78.2 minutes, and week 8 committed but still 11.5 minutes short,
then took every remaining week through the pipeline. Sixteen readings landed
--- fifteen new, plus the first session's Sprecher et al. draft --- each checked
against an abstract on PubMed, OpenAlex or Crossref. Three glossary terms were
added: *responsiveness*, *follow-up question* and *anticipated stigma*.

| Week | Before | After | What the new sources changed |
| --- | --- | --- | --- |
| 9 | 78.2 | 104.8 | Laurenceau et al. (1998): the depth scale had no field for whether a step *landed*. Huang et al. (2017): follow-up questions raise liking, and people don't expect them to. Huang was checked with its record attached --- a 2025 correction after an independent audit, Kluger & Malloy's 2019 reanalysis, the authors' reply --- and the week teaches it that way. Also Sprecher et al. (2013), from the first session |
| 8 | 93.5 | 103.9 | Brooks, Gino & Schweitzer (2015): the louder fear, that asking makes you look worse, runs the wrong way, and its moderators say *who* to write to |
| 2 | 26.4 | 105.1 | Nisbett & Wilson (1977): asking a fluent user "why" gets a plausible theory, and their accuracy condition became the week's interview technique. Hinds (1999): more expertise, worse prediction of a novice's difficulty, resistant to warning. Malle (2006): the actor--observer asymmetry the asleep test nearly leaned on averages d = −0.016 to 0.095, so the rule is now labelled the course's own |
| 3 | 32.8 | 103.0 | Lee & Pinker (2010): an envelope marks what the sender is unsure of. Keysar & Henly (2002): speakers overestimate being understood; overhearers don't. Chevallier et al. (2010): predicted a group difference in scalar inference and found none |
| 10 | 46.4 | 101.7 | Quinn & Chaudoir (2009): the cost of *not* telling tracks anticipated stigma, a belief an environment produces. Corrigan & Matthews (2003): disclosure as levels. Everything new sits outside the register break |
| 11 | 36.6 | 103.3 | Alkhaldi et al. (2019): readability predicted favourability independent of diagnosis. Morrison et al. (2020): in a real five-minute conversation both groups made the same judgement, and only one group's interest in meeting again followed it |
| 12 | 31.7 | 104.3 | Moskowitz (2004) replaces "has drawn published criticism" with the actual comment. Sala, Hooley & Stokes (2020) ground romance in what autistic and non-autistic participants said themselves |

Minutes are `pnpm check:timing` estimates against the 105-minute target.

Cut for want of a retrievable abstract, and recorded as cut in the reviews:
Sprecher et al.'s *Taking turns* (a different 2013 paper, re-checked and still
unreadable) and Cho & Keltner (2019), the later update OI-3 most wanted.

Repaired in earlier work along the way: the first session's new rows in the
week 8 and week 9 reviews sat below their tables instead of in them; week 9's
review cited one 2013 Sprecher paper while listing "Sprecher et al. (2013)" as
cut, without saying they were different papers; and week 8's review still used
a banned word.

**Clarifying question, and the answer** *(answered 2026-09-16 16:53:35 AEST)*.
Two Chrome browsers were connected, and the visual check had to run in one.
*Which Chrome should drive the visual check of the new deck slides?* ---
**"Browser 1 (macOS)"**. It changed no content, but it is where the audit ran
that found the plate bugs.

**Result --- checked by looking.** Every slide of all twelve decks was measured
against its 720px box, and the seven rewritten lecture pages and the fifteen
newly researched reading pages were loaded at 390px wide. The pages were clean.
The decks had two faults, both dating from the plates added in `8f81af5`, and
neither was visible to the build, axe, the link checker or the spec tests:
week 4's plate hung 306px off the bottom of its slide, and plates on slides were
fetched at 543px wide from scans of 1000 and 1920px. Both were fixed in
`849a75d`.

**Mistakes, recorded:**

- Five uncited claims about what "most" of a room would guess or do were
  caught before they shipped. Two were in the first session's week 9
  speaker-note draft; three were written in this one --- speaker notes in weeks
  10 and 12, and a line of week 10's lecture ("every year the list is mostly
  about the room"). Each became an instruction to the lecturer, or a count of
  that room only.
- A week 12 slide invented four "ethics rules" for the field experiment. The
  lab has had four ethics *questions* since it was written, and the capstone
  brief cites them by name. No check could see two competing lists; reading the
  lab did, and the slide now previews the lab's questions.
- The vocabulary test failed two of my own sentences: "they over-correct, and
  start treating you carefully" (week 10), and "nothing here was a cure for
  anything" (week 12), written to reject the framing and still banned.
- Week 9's first pass overshot to 111.1 minutes. It was trimmed by cutting two
  redundant slides, not by shortening the rest.
- Week 10's new exercise first landed on the slide directly before the register
  break, so the break would have been entered from a show of hands. It moved
  back one slide.
- A guessed DOI for *Taking turns* resolved to an unrelated paper. It never
  shipped; the identifier was settled by title search, and the review says so.
- The browser audit's first pass flagged five slides, and four of them were
  only the visually hidden text equivalents the drawings carry. Separately, a
  screenshot taken before a lazy image loaded showed a black box that looked
  like a styling bug. Both were caught before anything was changed.

| Commit | What it did |
| --- | --- |
| [`0310bfe`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/0310bfe) | Week 9 researched |
| [`65bb2b7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/65bb2b7) | Week 8: fear of looking worse; review table repaired |
| [`09fafb3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/09fafb3) | Week 2 researched |
| [`f67fdc1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/f67fdc1) | Week 3 researched |
| [`9a231ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/9a231ee) | Week 10 researched; register break left alone |
| [`0f1678a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/0f1678a) | Week 11 researched; ARPANET plate onto the deck |
| [`cffe562`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/cffe562) | Week 12 researched; all twelve weeks pass `check:timing` |
| [`9536998`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/9536998) | Evidence log for the two-hour work, mistakes included |
| [`849a75d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/849a75d) | Plates on slides get a height budget and a `sizes` hint |

---

## 4. This log

*Sent 2026-09-16 21:56:18 AEST*

> add the prompts and resulted response (curated) and git commits in this session to @docs/prompts-result.md

**Result.** This file. Hashes and commit contents were read from `git log`, the
latest CI run was read with `gh run view`, and the end state below was
re-measured.

*Sent 2026-09-16 22:00:59 AEST*

> add timestamp for each prompt. I've deleted some prompts, ignore them

**Result.** Timestamps read from the two session transcripts. Checking them
also corrected this file: the later commits came from a second session, not
from after compaction; and Sprecher et al. was drafted in the first session but
committed in the second.

*Sent 2026-09-16 22:32:17 AEST*

> ignore all "continue" and slash command only prompts. add that rule to the file.

**Result.** The rule is stated at the top of this file. The budget check and
every "continue" prompt lost their sections, and the second session's work was
filed under section 3, whose task it finished.

*Sent 2026-09-16 22:34:46 AEST*

> check @docs/prompts-result.md and add all from this session

**Result.** Sent to the second session (`c14c47e2`), the one that did section 3's
later work, so its results there are now first-hand rather than read back from
commit messages: minutes before and after for each week, the sources cut, the
repairs to earlier work, the clarifying answer, and the mistakes the commit
messages left out. Timestamps come from that session's transcript. The
"continue" that started it and a `/model` command are omitted under the rule
above. `39205d9` was missing from the table below and is added. This edit's own
commit is the next one in `git log`, since a file can't cite the hash of the
commit that contains it.

| Commit | What it did |
| --- | --- |
| [`0b48398`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/0b48398) | This log, first version |
| [`db09d15`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/db09d15) | Timestamps added; two-session split corrected |
| [`39205d9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/39205d9) | Continue-only and slash-command-only prompts dropped |

---

## End state, as checked when this file was written

- **Decks:** 12 of 12 weeks.
- **Timing (`pnpm check:timing`):** all twelve weeks 96.0--105.1 minutes; 0 of
  12 more than 10 minutes short of the 105-minute target.
- **Readings:** 71, each checked against its source before it shipped; 16 of
  them landed in the second session.
- **Layout, measured in the browser:** no slide in any of the twelve decks
  extends past its 720px box, and no rewritten lecture page or new reading
  scrolls sideways at 390px. Measured after `849a75d`; every commit since
  touches only this file.
- **Plates:** 4, all public domain or CC BY-SA, with provenance recorded.
- **CI:** the build, spec and deploy jobs pass. `check:evidence` still fails,
  now only because `PROCESS.md` cites the template's example hashes `a1b2c3d`
  and `e4f5a6b`. It goes green when those citations are replaced with real
  commits --- the tables above are there for that.
