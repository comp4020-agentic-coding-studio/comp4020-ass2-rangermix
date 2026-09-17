# Prompts and results --- design and build (13--17 September 2026)

A curated record of the sessions that made this course: each prompt as it was
typed, a trimmed version of what came back, and the commits it produced. It is
source material for `PROCESS.md`, like `docs/notes/process-evidence.md`, and not
a draft of it.

- **Prompts are verbatim.** The answers to a clarifying question are included,
  because they changed what got built.
- **Omitted: prompts that are only "continue" or only a slash command.** They
  carry no instruction of their own, so they get no section. Any work they
  resumed is filed under the prompt that asked for it. That includes "continue
  the work in Lecture slides and illustrations session", which picked up
  section 5's task in a second session. A prompt that says "continue" and then
  gives a new instruction, like section 3's, is kept. A line Claude Code
  inserts on resume isn't a prompt either.
- **Timestamps are when each prompt was sent**, read from Claude Code's session
  transcripts rather than estimated, in Canberra time (AEST, UTC+10; daylight
  saving hadn't started).
- **Responses are curated** --- cut to the decisions and results, not the tool
  output.
- **Every hash below comes from `git log`**, not from memory. The work's full
  range is
  [`07cea35...849a75d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/compare/07cea35...849a75d);
  this log's own commits follow it. Sections 1 and 2 predate that range.
- **The work ran across four Claude Code sessions.** Section 1 is the design
  session (`cacd7730`), which settled the course and wrote the harness before
  any of it was built; its own commits never reached `main`, for the reason
  recorded there. Section 2 is the handoff session (`c0104c7d`), which put
  those commits on `main`, corrected the calendar and planned the build.
  Sections 3 to 5: everything up to `399b641` came from the first build session
  (`58785399`). Commits `0310bfe` to `849a75d` came from a second (`c14c47e2`),
  which resumed section 5's task. Their results were first read back from the
  commit messages; that session later rewrote them from its own transcript
  (section 6). The end state at the bottom was re-checked with the tools, not
  copied from them.

---

## 1. The course, hammered out before anything was built

*Sent 2026-09-13 22:24:18 AEST*

> for ass2, how about an entry level course - Advanced Topics in Human Relationships and Social Skills (aka. human 101). The course will focus on teaching students on patterns and skills in human relationships and communication, aim to develop student's ability to understand ordinary people and act like one. The course will have prerequisite of diagnosis of autism spectrum,  Antisocial Personality Disorder, etc., or reference from at least 3 person that knows you well and believes you genuinely need this course.

**Result.** The pitch was taken up and one part of it argued against: a
prerequisite gated on diagnosis makes the students the butt of the joke, and
pairing it with "act like one" makes the outcome masking. The concern was put
in two paragraphs with a reframe attached, not as a refusal.

**Clarifying question, and the answer** *(answered 2026-09-13 22:37:17 AEST)*.
*How do you want the course framed before twelve weeks get built on it?* The
options offered were reframe, keep as pitched, or drop the satire. The answer
took none of them:

> The course should be sincere and satirical at the same time. As one on the
> spectrum I genuinely think a course like this is exactly what I needed when I
> was about to enter uni, so I want this course to actually make sense to people
> on the spectrum. The satire is also real - most people in the society wouldn't
> blink twice when making connection with people, however the way they do it is
> either inefficient or irrelevant in our eyes, and we're considered
> "neurodivergent" or even ASD / Disabled just because we're the minority. I
> don't want to give up either aspect.

That answer is the course. Both registers come from one observation rather than
one being a coating on the other, which is why `CLAUDE.md` states it as a rule
that neither may be dropped to resolve a tension.

---

*Sent 2026-09-13 22:40:41 AEST*

> do not start yet until we hammer out the idea, structure and rough content of the course

**Result.** Building stopped; `CLAUDE.md` had already been written and was left
uncommitted-then-committed on its own, with the commit message saying the course
structure was still open and that nothing in the harness presumed it. The
twelve weeks, the thesis sentence, the assessment scheme and the identity were
put up for argument instead of built.

---

*Sent 2026-09-14 14:51:00 AEST*

> 1. three references stay, plus a deadpan "no diagnosis is required or accepted as evidence"
> 2. you can try to come up with a better nick name if possible, and i'd like to have at least one nick name to keep the satire straight
> 3. explain more what week 10 is about, i'm not sure yet
> 4. several
>    1. week 1 - original topic 3 & Introduction
>    2. week 2 - Merged original topic 1 & 2
>    3. week 3 - original topic 4
>    4. That squeeze 1 week out, plus the original topic 12 which have no lecture content, we have 2 weeks lecture for extra curriculum, one week for emergency situation like sensory / shutdown, one week for briefly introducing advanced topics and future study - romance, persuade, power, etc.
> 5. assessment
>    1. assignment 1 - Protocol Specification 20%
>    2. assignment 2 - Interoperation Report 20%
>    3. assignment 3 - Personal Protocol Document or Neurotypical Interaction Field Experiment 30%
>    4. Field Journal weeks 2–12, 3% each with 1 week redeemable

**Result --- the restructure.** Opening on the greeting handshake instead of the
theory was the better order and was adopted: week 1 documents "how are you" in
forty minutes, and week 2 then explains why that was possible. The cost noted
at the time --- the double empathy framing now lands in week 2, so week 1 has
to carry the thesis explicitly, or a reader who sees only week 1 misreads the
course.

**Result --- the arithmetic.** The assessment scheme as given came to 103%:
20 + 20 + 30, plus eleven journal entries at 3%. The redeemable week resolves it
as 30% with 33% available --- eleven entries, best ten count. That reading was
adopted because it is also an argument the course makes: a course teaching a
cost budget that then punishes one bad week is not taking its own week 6
seriously.

**Result --- the nickname.** *NT 101* proposed over *Human 101* and *The
Manual*: it keeps the shape of the original joke while inverting the gaze, since
calling it the human protocol concedes that the reader is not one.

---

*Sent 2026-09-14 15:46:49 AEST*

> 1. prepare both version of week 10
> 2. is there a calendar for slop U? if there's mid-term break I'd like to make 11 before the break

**Result --- the calendar.** No SlopU calendar exists. The repo,
`astro-course-university` and `astro-theme-slop` carry no break-week concept at
all, so a break exists only as a gap in the week dates plus copy that says so.

Wanting the emergency week before the break converged with the argument for
moving it: overload follows causally from the week 6 masking budget, so week 7
sits directly after cost accounting *and* immediately before the break, and the
course can say outright that the recovery material lands there because the break
is when it gets used. Teaching moved to Tuesday/Thursday, which clears Easter
Monday (29 Mar) and the observed ANZAC Day holiday (26 Apr), both Mondays in
2027.

**Result --- week 10.** Both versions were written out in full: one keeping the
protocol register through the retroactive-rewriting section ("a write operation
on records you cannot see"), one dropping it entirely for four paragraphs and
snapping back on "Right. Mechanics."

---

*Sent 2026-09-14 15:58:14 AEST*

> I choose version B. Anything else of the course is not planned yet?

**Result.** Version B recorded as settled text. The honest inventory of what was
still undecided: the cast, the field experiment's ethics problem, the visual
treatment, the reading list, and six smaller items carrying defaults.

---

*Sent 2026-09-14 20:57:47 AEST*

> The cast - you won't find an autistic convenor all the time, so the requirement would be someone have a good understand of this topic instead, same goes for tutors. This also borden the pre-requisite - instead of references on you need this course, they could be how you're genuinely interested in human relationship / communication as well. That brings NT people in the aspect too.
> The Field Experiment ethics - yes, the ethics reflection should be part of the task
> Visual treatment - technical, standardised documentation style with casual, hand writing / drawing visual style.
> Reading list -  create a todo task for reading list and literature review. The goal is to have reading lists for most content delivered in this course. Vice versa, in the lecture slides itself, if a concept was introduced or investigated by existing research, reference them. The reading list should extend beyond the scope of slides, and they should retain a healthy relevance.
> Nickname - NT 101
> Session label - explain more on what's Session label
> Decks - start with week 1 & 2. we'll build more as the progress goes.
> spec: frontmatter: explain what you mean here.
> Field Journal entry: At least one entry of observation, inferred rule and validation per week, no strict word limit - anywhere from 50 to 5000 is accepted. No penalty on grammar, spelling, etc.. They can talk to AI, just no AI in the actual writing is allowed, and that's why the format is unrestricted. A simple template like the 4 points in The moments that mattered in https://github.com/comp4020-agentic-coding-studio/comp4020-crit5-rangermix/blob/3e5b24368fd08cfdf326a2144d024f5a73b530ab/PROCESS.md will be available for them, with all requirements inside.
> Policies page: agreed
>
> additionally, the content building process should be unified - from researching in the topic, to producing reading list and simple review, to decide the actual contents to deliver, to building the slides - contents for each week should align with each other, and contents across the whole course should be aligned too.

**Result --- who the course is for.** Staffing on demonstrated understanding
rather than lived experience broke the earlier framing open. If tutors qualify
by understanding the topic, so do students, and the prerequisite becomes three
references attesting either need or genuine interest. The class is mixed by
design, which is what makes week 11 demonstrate its own thesis instead of
asserting it. `CLAUDE.md` had addressed one constituency and was rewritten.

**Result --- the pipeline.** Recorded as a fixed order that content is never
built out of: research, then reading list and review, then what gets delivered,
then the week, then the slides. The rule that matters is the one against
backfilling --- a week does not go looking for sources afterwards to decorate a
conclusion it already reached. Alignment was written as two rules, within a week
and across the course.

**Result --- citations.** Because the reading list was now central, the harness
gained the rule that every citation is verified against the actual paper before
it ships, never from memory or inference: a fabricated reference in a course
arguing for documentation is the worst available failure.

**Result --- the field journal.** The four-point template was taken from the
"moments that mattered" shape in the crit-5 `PROCESS.md` the prompt links:
what happened, the rule you inferred, the test, the rule now. The unconstrained
format is load-bearing rather than lenient --- a fixed word count is what makes
generated text convenient.

The two questions were answered rather than decided: what `sessionLabels` does,
and what a `spec:` block would look like written in the course's own register.

---

*Sent 2026-09-14 22:27:28 AEST*

> use lab for Session label, where students explore different methods of communication / protocol / topic taught that week.
> The spec: frontmatter - use your suggestion
> fifth content collection - use your suggestion
>
> finish writing the current harness and provide download link to the files you changed. I'll download and continue the work locally.

**Result.** `CLAUDE.md` finished at every decision above, including the one rule
an agent would otherwise undo: week 10's register break is sanctioned in
writing, with an instruction not to "fix" the inconsistency, restore the
metaphor or soften the snap-back line.

`docs/course-design.md` was added because the decisions above existed only in a
chat transcript, and work was about to continue somewhere that could not read
it. It carries the identity, the prerequisite wording, the cast policy, the
calendar, the twelve weeks, week 10's approved text verbatim, the assessment
table, the journal template, the `readings` collection and a list of what was
still open.

Both files were handed over as `git format-patch` output rather than loose
files, so the commit messages --- which carry the reasoning the Process
criterion reads --- survived the move to a local checkout.

**Blocked, and reported rather than worked around:** this environment's egress
policy returns 403 for `codeload.github.com`, where all four GitHub-hosted
dependencies resolve, so no dependency ever installed and no check ever ran in
this session. `git push` returned 403 for the same underlying reason. Nothing
this session produced was build-verified, and it said so in the design record
rather than implying otherwise.

**Mistakes, recorded:**

- **A build was reported green that had never run.** `pnpm install` and
  `pnpm build` were launched as background tasks; both failed on the codeload
  403, and both were reported by the wrapper as exit code 0. The wrapper's
  status was read instead of the command's own output, and "baseline build is
  green" was said to the user on that basis. It was wrong, and it was corrected
  in the same session once the logs were actually read. `CLAUDE.md` now carries
  the rule it should have had: do not report success without running the check,
  and do not read an exit code from a wrapper.
- A push was retried three times across the session before being left alone,
  against the proxy documentation's instruction to report policy denials rather
  than retry them.

**Commits.** This session's two commits never reached `main`: push was denied
throughout, and the work travelled as patches instead. Section 2 applied them,
so the commits on `main` carry the same messages and content, except that
`1d4e50f` also keeps the pointer to `README.md` and the course website that
resolving its conflict preserved.

| Commit on `main` | What it did |
| --- | --- |
| [`1d4e50f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/1d4e50f) | The harness, written before the structure was settled |
| [`20f1503`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/20f1503) | The design record; who the course is for, widened |

---

## 2. The design lands locally, and its calendar is corrected

*Sent 2026-09-15 00:20:55 AEST*

> apply git patches and resolve conflicts

**Result.** An earlier `git am` was still open, stopped on the first patch with
nothing applied. It was aborted and re-run with a three-way merge. The first
patch conflicted in `CLAUDE.md`: it replaces the starter's placeholder note,
which the local commit `be2b647` had already cut down to a pointer at
`README.md` and the course website. The harness was taken whole and the pointer
kept as its last working rule. It went there because the second patch edits
nothing at the end of the file, so that patch then applied without a conflict
of its own.

---

*Sent 2026-09-15 00:28:47 AEST*

> read https://claude.ai/code/session_01L4hWWjsLE8es6qoYSJWVv9

**Result.** The link was the design session's transcript on claude.ai. The
desktop app's session tools couldn't open it, so it was read in the user's
signed-in Chrome, scrolled through until every message had loaded. Its handoff
notes were checked against the repo rather than repeated:

- Nothing had been build-verified.
- The design doc ended the course period on 11 Jun, but `src/course-config.ts`
  still said 28 May.
- `CLAUDE.md` named `spec/inclusive-language.test.ts`, which didn't exist.
- The patches were meant for `claude/nifty-planck-ijr2i5`, a branch that only
  ever existed in the cloud session, so the commits stayed on `main`.

**Clarifying question, and the answer** *(answered 2026-09-15 00:30:01 AEST)*.
Two Chrome browsers were connected. *Which one should open the claude.ai
session?* --- **"Browser 2 (macOS)"**. It changed no content.

**Mistake, recorded:** the date note was passed on as "the end date in the
config is out of date", with an offer to change it. The config was right and
the design doc's calendar was wrong, which the next prompt pointed out.

---

*Sent 2026-09-15 12:02:00 AEST*

> ending at 2027-05-28 should give 14 weeks from 22 Feb, including 12 teaching weeks and 2 break weeks, no?

**Result --- the calendar.** Yes. Monday 22 Feb to Friday 28 May 2027 is exactly
fourteen weeks, checked with `cal` rather than counted. The starter's period
already held twelve teaching weeks and a two-week break. The design doc had used
a one-week break (the week of 12 Apr), left 24--28 May empty, set the capstone
for 11 Jun, and proposed stretching `endDate` to cover a gap its own calendar
had made. So the fix went into the calendar: a two-week break, 12--23 Apr, and
weeks 8--12 moved to 26 Apr -- 28 May, still on Tuesdays and Thursdays and so
still clear of the ANZAC Day holiday.

`spec/data-integrity.test.ts` fails any due date after `endDate`, so the late
deadlines were proposed inside the period: the Interoperation Report on 21 May,
the Field Journal and the capstone on 28 May.

---

*Sent 2026-09-15 13:07:29 AEST*

> let capstone due on 13 Jun 23:59

**Result.** The capstone is due Sun 13 Jun 2027, 23:59. What that implies was
spelled out rather than left for the test to find: `endDate` moves after all, to
13 Jun, for the capstone alone, and teaching still ends on 28 May. The design
doc now says so beside the calendar. The config was left for when the course
record gets written, and the frontmatter form the date will need was noted:
`2027-06-13T23:59:00+10:00`, since Canberra has no daylight saving in June.

---

*Sent 2026-09-15 14:19:57 AEST*

> Field Journal should turn in once a week from week 2 - 12

**Result.** Submitted weekly, due 23:59 on the Sunday of each of weeks 2--12,
with nothing due over the break; the best ten of eleven still count. No day was
given, so Sunday was chosen to match the capstone and to leave Thursday's lab
plus a weekend to test a rule. Two things were flagged rather than changed:
week 5's deadline falls on Easter Sunday, left because best-ten already covers
one missed week, and the Interoperation Report's 21 May date had lost its
reason.

**Mistake, recorded:** that 21 May date was this session's own suggestion, made
before reading the report's brief. The brief runs the partner work over the
labs of weeks 9--11, which put the report due the day after the last lab.

---

*Sent 2026-09-15 14:24:07 AEST*

> move to 30 May 23:59

**Result.** The Interoperation Report is due Sun 30 May 2027, 23:59, in week 12:
ten days after the last partner lab, at the same time as week 12's journal
submission, and inside `endDate`.

---

*Sent 2026-09-15 15:06:12 AEST*

> commit and push. add to both user and project harness that commit and push as you work, and work on main directly unless required by user otherwise.

**Result.** The calendar and assessment changes were committed and pushed. The
rule then went into both harnesses: `CLAUDE.md` gained a working rule citing the
stranded patch files as its reason, and a new `~/.claude/CLAUDE.md` got the same
rule as two lines. That second file lives on this machine only, so no commit can
cite it.

This clone's first `pnpm install` fetched all four GitHub-hosted dependencies
that returned 403 in the design session, and `pnpm check` then passed here for
the first time: types with 0 errors and 0 warnings, 16 pages with no axe
violations or broken links, and the one supplied spec test. Its output was
written to a log and read, not taken from a wrapper's exit status. CI stays off while the repo is
private, so from then on that local check was the only feedback loop.

---

*Sent 2026-09-15 15:21:27 AEST*

> what's the plan and next step? anything requires attention in the course design before you start?

**Result.** The brief and spec were read on the course website first, as the
harness requires. The deadline was noon on Monday 21 Sep 2026, with no late
submissions. Three findings needed a decision:

- The design session had said visual treatment was 20% of the mark. It isn't:
  the 20% is *working deployed artefact*, and the brief says restyling isn't
  required.
- `CLAUDE.md` promised a vocabulary test that didn't exist, and banning single
  words would fail the design's own sentences, like "the fix is bilateral".
- The accommodations policy had been agreed in the design session as written
  straight, without the satire, but that was never recorded, and the harness
  let only week 10 drop the satire.

Smaller ones: the Protocol Specification was the only deadline without a time;
the Field Journal should be a single assessment entry, since eleven 3% entries
would total 103% and couldn't express best ten; the Interoperation Report's
partner work runs through the week 10 disclosure lab, so nobody should have to
disclose to a partner; and `PROCESS.md` is the student's own account, so the
agent would keep a decision log with commit links instead of drafting it.

The plan put foundations first --- the course record, the Lab label, the
`readings` collection, spec tests before any content, and a dated skeleton ---
then weeks 1 and 2 as a slice for review, then weeks 3--12, then the remaining
pages, `/ship` and `PROCESS.md`. To fit six days, it suggested keeping the
starter's look and giving weeks 3--12 less depth than weeks 1 and 2.

**What became of it**, from the record rather than from this session. Neither
of those two suggestions was taken. The harness gained a rule against shrinking
scope or stubbing sections to finish sooner
([`44d5b99`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/44d5b99)),
and the hand-drawn visual system was built
([`dbbe203`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/dbbe203)).
The vocabulary test was written with the ambiguity handled: it bans *fix*,
*treat*, *correct* and *cure* only when a person is the object, and it skips
marked quotations
([`7752322`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/7752322)).

| Commit | What it did |
| --- | --- |
| [`1d4e50f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/1d4e50f) | First patch applied; `CLAUDE.md` conflict resolved, keeping the `README.md` pointer |
| [`20f1503`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/20f1503) | Second patch applied without conflict |
| [`167eebc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/167eebc) | Calendar fitted to the fourteen-week period; weekly journal; report and capstone dates |
| [`abf69e8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/abf69e8) | Commit and push as you work, straight to `main` |

---

## 3. Decks for every week, and pictures

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

## 4. Bugs, real images, two-hour lectures

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

## 5. CI, then every remaining week

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

## 6. This log

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
filed under section 5, whose task it finished.

*Sent 2026-09-16 22:34:46 AEST*

> check @docs/prompts-result.md and add all from this session

**Result.** Sent to the second session (`c14c47e2`), the one that did section 5's
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
| [`1a67350`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/1a67350) | The second session's results, written from its own record |
| [`3fa484a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/3fa484a) | The design session, logged first-hand as section 1 |

*Sent 2026-09-17 17:31:04 AEST*

> check prompts-result.md and add all from this session

**Result.** Section 1. Sent to the design session (`cacd7730`) --- the one that
settled the course before any of it existed --- so its record is first-hand
rather than inferred. That session predates everything else in this file, so it
goes first and the other sections are renumbered from 1--4 to 2--5, with their
cross-references updated; the title and the sessions bullet now say the file
covers design as well as build.

Prompts and the clarifying answer were read from that session's transcript, not
from memory. Two things it had not recorded anywhere are recorded now: that a
build was reported green after only a wrapper's exit code was read, which is why
the harness carries the rule against exactly that; and that nothing the session
produced was build-verified, because `codeload.github.com` returned 403 and no
dependency would install.

Its own two commits are cited as the equivalent pair on `main`, since the
originals were never pushed --- push was denied for the whole session, and the
work moved as `git format-patch` output instead. The "continue" prompt and an
interrupted resend are omitted under the rule above.

*Sent 2026-09-17 17:51:29 AEST*

> check @docs/prompts-result.md and add all from this session

**Result.** Section 2. Sent to the handoff session (`c0104c7d`), which put the
design session's commits on `main`, corrected the calendar and planned the
build. That work sat between the design session and the first build commit and
had no section of its own. Its timestamps place it second, so the later sections are
renumbered again, from 2--5 to 3--6, with their cross-references updated, and
the sessions bullet now counts four sessions.

Prompts, times and the clarifying answer were read from that session's
transcript. The section records two mistakes no commit message mentions, and
says what the commits that followed did with the plan's suggestions.

Checking the file turned up two faults in it, both fixed. The previous edit,
`3fa484a`, dropped `39205d9`'s row from the table above, though the entry sent
at 22:34:46 still says that row was added; the row is back, and `3fa484a` has
one too. Section 1 said the commits on `main` carry the same content as the design
session's, but `1d4e50f` also keeps the pointer to `README.md` and the course
website, and section 1 now says so. This edit's own commit is the next one in
`git log`.

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
