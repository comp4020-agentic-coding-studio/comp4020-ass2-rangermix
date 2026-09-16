# Prompts and results --- second build session (15--16 September 2026)

A curated record of this session: each prompt as it was typed, a trimmed
version of what came back, and the commits it produced. It is source material
for `PROCESS.md`, like `docs/notes/process-evidence.md`, and not a draft of it.

- **Prompts are verbatim.** Slash commands and the answers to a clarifying
  question are included, because they changed what got built.
- **Timestamps are when each prompt was sent**, read from Claude Code's session
  transcripts rather than estimated, in Canberra time (AEST, UTC+10; daylight
  saving hadn't started).
- **Responses are curated** --- cut to the decisions and results, not the tool
  output.
- **Every hash below comes from `git log`**, not from memory. The session's
  full range is
  [`07cea35...849a75d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/compare/07cea35...849a75d).
- **The work ran across two Claude Code sessions.** Everything up to `399b641`
  came from the first (`58785399`). Commits `0310bfe` to `849a75d` came from a
  second (`c14c47e2`), opened by the prompt in section 6, so their "result"
  summaries are taken from those commit messages. The end state at the bottom
  was re-checked with the tools, not copied from them.

---

## 1. Budget check

*Sent 2026-09-15 23:07:03 AEST*

> `/comp4020:balance`

**Result.** Queried the course proxy's `/api/me` with the key already in the
environment: the week's spend was well under the weekly cap, with the reset due
Thursday 9:00 am Canberra time. No files changed.

---

## 2. Decks for every week, and pictures

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

## 3. Bugs, real images, two-hour lectures

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

## 4. CI, then every remaining week

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
before this session stopped:

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
this session stopped. It landed in `0310bfe` from the second session.

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

---

## 5. "continue", in the first session

*Sent 2026-09-16 16:03:38 AEST, and again at 16:08:28 AEST*

> continue

> continue

The first was interrupted by the user at 16:05:51, and the reply was "No
response requested." The second got no reply in this session at all. The work
did not stall, though: 31 seconds later it was picked up in a second session
(section 6).

When this session was resumed at 21:52:38, Claude Code inserted "Continue from
where you left off." automatically, and the reply was again "No response
requested." That line wasn't typed by the user, so it isn't listed as a prompt.

---

## 6. Second session: finish the weeks

*Sent 2026-09-16 16:08:59 AEST, in session `c14c47e2`*

> continue the work in Lecture slides and illustrations session

**Result.** The remaining weeks went through the same pipeline, and week 8 got
a follow-up. Highlights, from the commit messages:

- **Week 9** --- Laurenceau et al. (1998) and Huang et al. (2017), the latter
  cited with its later correction and reanalysis attached. The commit also
  carries Sprecher et al. (2013), drafted but left uncommitted in the first
  session (section 4): the gap between listeners and disclosers vanished once
  they swapped roles.
- **Week 8** --- Brooks, Gino and Schweitzer (2015) address the fear that
  asking makes you look worse; the review's misplaced table rows were repaired.
- **Week 2** --- Nisbett & Wilson (1977) and Hinds (1999) on why fluent people
  can't state the rules. An effect size the week would have found convenient
  was checked and reported honestly: Malle's meta-analysis, d = −0.016 to 0.095.
- **Week 3** --- Lee & Pinker (2010); Keysar & Henly (2002), which puts
  measured error on the sender's side; Chevallier et al. (2010), which found no
  group difference.
- **Week 10** --- Quinn & Chaudoir (2009) price the cost of *not* disclosing,
  and Corrigan & Matthews (2003) supply disclosure as levels. The register break
  is untouched.
- **Week 11** --- Alkhaldi et al. (2019): readability and favourability,
  independent of diagnosis. Morrison et al. (2020): a real five-minute
  conversation between strangers.
- **Week 12** --- the vague "has drawn published criticism" became the actual
  comment, Moskowitz (2004). Romance is now grounded in Sala, Hooley & Stokes
  (2020). All twelve weeks pass `check:timing`.

**Mistakes, recorded:**

- Speaker notes claimed things about "what most of the room would guess"; none
  was cited, so they became instructions to the lecturer instead.
- Measuring every slide in the browser found week 4's plate hanging off the
  bottom of its slide, and being served a scan too small for a projector.
  Nothing else in the checks had caught either.

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

## 7. This log

*Sent 2026-09-16 21:56:18 AEST*

> add the prompts and resulted response (curated) and git commits in this session to @docs/prompts-result.md

**Result.** This file. Hashes and commit contents were read from `git log`, the
latest CI run was read with `gh run view`, and the end state below was
re-measured.

*Sent 2026-09-16 22:00:59 AEST*

> add timestamp for each prompt. I've deleted some prompts, ignore them

**Result.** Timestamps read from the two session transcripts. Checking them
also corrected this file on three points:

- The later commits came from a second session, not from after compaction.
- "Continue from where you left off." was inserted by Claude Code on resume,
  not typed.
- The two typed "continue" prompts didn't leave the work stalled; it moved to
  the second session.

| Commit | What it did |
| --- | --- |
| [`0b48398`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/0b48398) | This log, first version |

---

## End state, as checked when this file was written

- **Decks:** 12 of 12 weeks.
- **Timing (`pnpm check:timing`):** all twelve weeks 96.0--105.1 minutes; 0 of
  12 more than 10 minutes short of the 105-minute target.
- **Readings:** 71, each checked against its source before it shipped.
- **Plates:** 4, all public domain or CC BY-SA, with provenance recorded.
- **CI:** the build, spec and deploy jobs pass. `check:evidence` still fails,
  now only because `PROCESS.md` cites the template's example hashes `a1b2c3d`
  and `e4f5a6b`. It goes green when those citations are replaced with real
  commits --- the tables above are there for that.
