# Prompts and results --- design and build (13--18 September 2026)

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
  section 6's task in the third build session. A prompt that says "continue"
  and then gives a new instruction, like section 4's, is kept. A slash
  command's clarifying answer is kept when it changed what got built, as
  section 3's `/comp4020:ship` did. A line Claude Code inserts on resume isn't
  a prompt either.
- **Timestamps are when each prompt was sent**, read from Claude Code's session
  transcripts rather than estimated, in Canberra time (AEST, UTC+10; daylight
  saving hadn't started).
- **Responses are curated** --- cut to the decisions and results, not the tool
  output.
- **Every hash below comes from `git log`**, not from memory. The work's full
  range is
  [`abf69e8...849a75d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/compare/abf69e8...849a75d);
  this log's own commits follow it. Sections 1 and 2 predate that range.
- **The work ran across six Claude Code sessions.** Section 1 is the design
  session (`cacd7730`), which settled the course and wrote the harness before
  any of it was built; its own commits never reached `main`, for the reason
  recorded there. Section 2 is the handoff session (`c0104c7d`), which put
  those commits on `main`, corrected the calendar and planned the build.
  Section 3 is the first build session (`f21d74d7`), which wrote the spec
  tests and the plan and built the first version of the site, `44d5b99` to
  `07cea35`. Sections 4 to 6: everything from `39434d2` up to `399b641` came
  from the second build session (`58785399`). Commits `0310bfe` to `849a75d`
  came from a third (`c14c47e2`), which resumed section 6's task. Their results
  were first read back from the commit messages; that session later rewrote
  them from its own transcript (section 7). Section 8 is the timetable session
  (`88d4d4e6`), which ran beside the second build session from 16 September, in
  a git worktree, and wrote its own section from its transcript. The end state
  at the bottom was re-checked with the tools, not copied from them.

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
written to a log and read, not taken from a wrapper's exit status. The
session took CI to be off while the repo was private, so from then on that
local check was the only feedback loop anyone read. It wasn't the only one
running: GitHub's event log records the repo as made public on 30 August, and
CI had run, and failed, on every push since 14 September. Section 3 records how
that was found.

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

**What became of it**, from the record rather than from this session;
section 3 is that record first-hand. Neither of those two suggestions was
taken. The harness gained a rule against shrinking scope or stubbing sections
to finish sooner
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

## 3. The first build: specs, a plan, and every week

*Sent 2026-09-15 15:32:47 AEST*

> read the repo

**Result.** Every tracked file was read, and the baseline was run rather than
assumed: `pnpm check` passed, 16 pages and the one supplied test, with the exit
code read from the command itself. Every weekday in the design doc's calendar
was recomputed with a script, and all of them held. Three gaps between the
harness and the repo needed a decision before anything was built:

- `spec/inclusive-language.test.ts` didn't exist, and a plain word list would
  fail the design doc's own "the fix is bilateral".
- The lecture template never rendered a `spec:` block, so "every week
  specifies itself" had nowhere to appear on a lecture page.
- An assessment could carry one due date, and the Field Journal had eleven.

---

*Sent 2026-09-15 15:34:57 AEST, while the reply above was still running*

> add ignore time restriction to project harness, add prefer file-based memory and agent-communication to both project and user level harness

**Result --- time.** The instruction was read as: nothing in this repo is
time-boxed, so no step, check or section gets cut to finish sooner. The reply
said that was the reading, so it could be corrected, and it stood. Thirteen
minutes before this prompt, the handoff session's plan had suggested thinner
weeks 3--12 to fit six days (section 2). `CLAUDE.md` gained "No time limit",
naming the steps an agent watching the clock cuts first: reading the literature
and checking each citation against the paper.

**Result --- memory and handoffs.** Both harnesses now prefer files to
conversation context, and files to messages between agents. The project
version is specific: settled decisions go in `docs/course-design.md`, working
state in `docs/notes/` (the agent's choice of location, flagged as
changeable), nothing a later session needs stays in machine-local memory, and
nothing goes in a note that can't go public. The user-level file isn't in git,
so no commit can cite that half.

---

*Sent 2026-09-15 16:00:22 AEST*

> yes, read them, then write specs for the designed course, then write plan for implementation, then finish implementation.

"Them" is the Assignment 2 brief and spec, which the previous reply had offered
to read.

**Result --- the brief and spec.** Pulled from the course API rather than
paraphrased, with the assessment, AI-use and spec-driven development pages:
due noon Monday 21 September 2026, marked live at 1920×1080 and 390×844, and
weighted process 45%, response 35%, artefact 20%. The AI-use page settled one
decision for the whole build: a process overview is "by definition your own
account", so `PROCESS.md` would get an evidence log with commit links, never a
draft.

**Result --- specs before content.** Six test files beside the supplied one,
committed red: the published spec's checkable lines, and the design's promises
an agent is most likely to "improve" without noticing.

- The deficit vocabulary, with 28 cases of its own showing the detector tells
  "the fix is bilateral" from "fix you", and skips marked quotations.
- Twelve dated weeks on Tuesdays and Thursdays, nothing in the break, and every
  deadline true in Canberra time either side of daylight saving's end.
- Week 10's register break and the no-diagnosis clause, verbatim.
- Rendered spec blocks with no line reused across weeks, the Lab label, a real
  deck, and readings that record what they were checked against.

**Result --- the plan.** `docs/notes/implementation-plan.md`: 21 tasks. Its
modelling decisions were written into `CLAUDE.md` and the design doc rather
than left in the plan: the lecture is the week's page, the Field Journal is one
entry carrying eleven timestamps, and the capstone is one entry with both
routes, so the weights sum to 100. Research leads were listed as unverified
until checked, so the plan couldn't turn into a citation source.

**Result --- the build**, in the plan's order:

- **The platform.** A course record with outcomes, Lab labels, a `readings`
  collection whose schema requires a verification record, and lecture pages
  that render their spec.
- **The visual system.** One seeded module draws every stroke, so diagrams are
  hand-drawn, identical on every build, and follow dark mode. Looking at it at
  the marking viewports changed it twice: diagram labels were oversized at
  desktop, and a three-party diagram was unreadable on a phone.
- **`pnpm check:readings`**, comparing each DOI's title, year and first author
  with Crossref. It was tried on a deliberately wrong entry before it was
  trusted.
- **All twelve weeks researched before any was written:** twelve reviews and 43
  readings. Leads were cut where nothing more than a summary could be read ---
  Schegloff & Sacks (1973), Jefferson (1980), Brown & Levinson's face theory,
  Sprecher et al. (2013) and Hall's widely quoted hour figures --- and Vohs et
  al. (2005) for ego depletion's replication record.
- **Weeks 1--12**, each a lecture, a lab and two spec blocks, with one artefact
  no other week has: the handshake specified (week 1), a timeline of the 200 ms
  gap and the 700 ms point where refusals pull ahead (week 4), a repair state
  machine (week 5), the masking ledger (week 6), a runbook with pre-written
  messages (week 7), and the register break set as a visual break too
  (week 10).
- **The rest of the site.** Four assessments; the home, policies, glossary and
  404 pages; decks for weeks 1 and 2, with week 1's importing its lecture's
  diagram rather than redrawing it; a social card drawn by the same stroke
  module; and the evidence log.

At the session's end `pnpm check` passed, 289 tests and 85 pages with no axe
or link violations, and `pnpm check:readings` matched 43 of 43. The 83 pages
that aren't decks were measured for sideways scroll at 390px. Screenshots
covered desktop width in light and dark, but at phone width only week 6 and an
early draft of week 1. `check:evidence` failed only on the template
`PROCESS.md`.

**Harness rules added mid-build, each after a failure:**

- **A study's details are claims**, after Garfinkel's breaching examples were
  drafted into week 2 from memory (`c0e114b`).
- **"Most people" is a finding**, after weeks 5, 8 and 9 each needed the same
  hand correction; it was then applied back to the weeks already written
  (`8866005`, `86bc3a4`).

**Mistakes, recorded:**

- **Nobody read CI.** The session never checked the repo's visibility, and its
  closing report said `/comp4020:ship` "makes the repo public". GitHub's event
  log records the repo as made public on 30 August. CI ran on every push of the
  session: twenty-two runs failed at `Build and run the spec` while the tests
  committed red were being turned green, five at `check:evidence`, one was
  cancelled by the next push, and every deploy failed because Pages wasn't
  enabled. None of those runs was read until `/comp4020:ship`.
- **Details from memory reached commits, not only drafts.** The research commit
  carried four in reading annotations: an author described as an autistic
  advocate, a first-publication date, a study "run with autistic researchers",
  and Aron et al. as "the procedure behind the widely shared question lists".
  All four were found while checking week 6 and cut in `3d536c3`. Drafts caught
  before commit: Garfinkel's examples (week 2); Grice's flouting mechanism, from
  pages the check hadn't read, and "on the same page" for his "Be polite" aside,
  corrected to "a page after the maxims" --- a position section 4 later cut as
  unsupported (`39434d2`); and a video-based design borrowed from Sasson et
  al.'s 2017 study into their 2019 one (week 10).
- **The frequency rule didn't end the habit.** After `8866005`, weeks 10 and 11
  and the assessment briefs still needed "most", "usually" and "common" claims
  cut before commit.
- **Banned words, mostly caught by the tests.** Week 6's budget metaphor
  produced "don't run at a deficit", which failed the build, and the Lab-label
  test failed week 10's lab, which used "session" twice. Week 7's crisis
  section said asking was never a "burden" --- banned even negated --- and
  reading caught it before the build ran.
- **A failed edit went unread.** A script's assertion failed on a week 1
  correction and the error scrolled past, so the change landed only when it was
  noticed and made by hand, in `ddcc868`.
- **Two wrong facts in the course's own copy.** A 43-word specimen email was
  described as 58 words (week 8), and the capstone's marking statement called
  the ethics reflection "a third" of the mark while its criteria gave 35%. The
  first was fixed before commit; the second shipped in `7c7075e` and was fixed
  in `955a52c`.
- **A test was wrong, not the content.** The break test started the break on
  Saturday 10 April; the design starts it on Monday 12 April and has a journal
  deadline on Sunday 11 April (`7c7075e`).
- **The social card failed silently, twice.** sharp's text rendering fell back
  to a sans-serif on macOS, and opentype.js 2.0.0 emitted NaN path data, which
  librsvg stops drawing at: "obvious." rendered as "obvio". Both were found by
  opening the PNG, not by trusting the script's "wrote" line, and the package
  is pinned to 1.3.4.
- **Verification was reported as wider than it was.** `955a52c`, the plan and
  the evidence log all say every one of the 85 pages was measured at 390px, and
  the plan lists the decks among pages checked at both viewports. The measuring
  loop covered the 83 pages that aren't decks, and no deck was looked at on a
  phone-sized screen. This wasn't noticed until the session's record was read
  against its transcript for this file.

*Omitted under the rule at the top: the `/comp4020:ship` sent at 2026-09-15
17:59:40 AEST. Its clarifying answer is kept, because it changed what got
deployed.*

**Clarifying question, and the answer** *(answered 2026-09-15 18:00:48 AEST)*.
The skill found the repo already public, Pages not enabled, and
`check:evidence` failing on the template `PROCESS.md`, the kind of failure it
says to stop on; the secret scan had come back clean. *Repo is already public
but Pages isn't enabled yet, and PROCESS.md is still the template. How do you
want to proceed?* --- **"Enable Pages and deploy now (Recommended)"**. The other
option offered was to wait until `PROCESS.md` was written. Pages was enabled as
a workflow site, the dispatched run's `deploy` job passed while `check` stayed
red on `PROCESS.md`, and `verify-deploy.sh` confirmed that the page and all four
of its assets resolve under `/comp4020-ass2-rangermix/`. No commit.

| Commit | What it did |
| --- | --- |
| [`44d5b99`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/44d5b99) | "No time limit" in `CLAUDE.md` |
| [`a20c90e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/a20c90e) | File-based memory and agent handoffs, in the project harness |
| [`7752322`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/7752322) | Seven spec files, committed red |
| [`ac46812`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/ac46812) | The implementation plan |
| [`021ded8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/021ded8) | Course record, Lab labels, `readings` collection, lecture spec |
| [`dbbe203`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/dbbe203) | The hand-drawn visual system |
| [`50e62e1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/50e62e1) | `pnpm check:readings` |
| [`dcdfee6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/dcdfee6) | Twelve reviews and 43 readings, before any week was written |
| [`f83c8bc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/f83c8bc) | Week 1, and the cast |
| [`c0e114b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/c0e114b) | Rule: a study's details are claims |
| [`c2c13ec`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/c2c13ec) | Week 2 |
| [`e6a6634`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/e6a6634) | Week 3 |
| [`942ad54`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/942ad54) | Week 4, and `TimingLine` |
| [`f3472b7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/f3472b7) | Week 5, and `StateMachine` |
| [`3d536c3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/3d536c3) | Week 6; four details from memory cut from reading annotations |
| [`5362215`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/5362215) | Week 7 |
| [`18f3de0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/18f3de0) | Week 8 |
| [`c0d8a73`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/c0d8a73) | Week 9 |
| [`8866005`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/8866005) | Rule: "most people" is a finding |
| [`86bc3a4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/86bc3a4) | That rule applied to the weeks already written |
| [`ddcc868`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/ddcc868) | Week 10, with the register break |
| [`176f63c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/176f63c) | Week 11 |
| [`5a38f05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/5a38f05) | Week 12 |
| [`7c7075e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/7c7075e) | The four assessments; break test corrected |
| [`d760aae`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/d760aae) | Home, policies, glossary and 404 pages |
| [`2f66a99`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/2f66a99) | Home hero stacked; nav back to one row |
| [`fd1404a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/fd1404a) | Decks for weeks 1 and 2 |
| [`feaa695`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/feaa695) | The social card |
| [`955a52c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/955a52c) | Verification at both viewports, and its fixes |
| [`07cea35`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/07cea35) | Evidence log for `PROCESS.md` |

---

## 4. Decks for every week, and pictures

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

## 5. Bugs, real images, two-hour lectures

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

## 6. CI, then every remaining week

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

**Result --- weeks, second build session.** Weeks 6, 7 and 8 went through the
pipeline before that session stopped:

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
that session stopped. It landed in `0310bfe` from the third build session.

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

**Result --- weeks, third build session.** The same task was resumed in the
third build session (`c14c47e2`), prompted only by "continue". It found week 9 drafted but
uncommitted at 78.2 minutes, and week 8 committed but still 11.5 minutes short,
then took every remaining week through the pipeline. Sixteen readings landed
--- fifteen new, plus the second build session's Sprecher et al. draft --- each checked
against an abstract on PubMed, OpenAlex or Crossref. Three glossary terms were
added: *responsiveness*, *follow-up question* and *anticipated stigma*.

| Week | Before | After | What the new sources changed |
| --- | --- | --- | --- |
| 9 | 78.2 | 104.8 | Laurenceau et al. (1998): the depth scale had no field for whether a step *landed*. Huang et al. (2017): follow-up questions raise liking, and people don't expect them to. Huang was checked with its record attached --- a 2025 correction after an independent audit, Kluger & Malloy's 2019 reanalysis, the authors' reply --- and the week teaches it that way. Also Sprecher et al. (2013), from the second build session |
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

Repaired in earlier work along the way: the second build session's new rows in the
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
  caught before they shipped. Two were in the second build session's week 9
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

## 7. This log

*Sent 2026-09-16 21:56:18 AEST*

> add the prompts and resulted response (curated) and git commits in this session to @docs/prompts-result.md

**Result.** This file. Hashes and commit contents were read from `git log`, the
latest CI run was read with `gh run view`, and the end state below was
re-measured.

*Sent 2026-09-16 22:00:59 AEST*

> add timestamp for each prompt. I've deleted some prompts, ignore them

**Result.** Timestamps read from the two session transcripts. Checking them
also corrected this file: the later commits came from another session
(`c14c47e2`), not from after compaction; and Sprecher et al. was drafted in
`58785399` but committed in `c14c47e2`.

*Sent 2026-09-16 22:32:17 AEST*

> ignore all "continue" and slash command only prompts. add that rule to the file.

**Result.** The rule is stated at the top of this file. The budget check and
every "continue" prompt lost their sections, and `c14c47e2`'s work was filed
under section 6, whose task it finished.

*Sent 2026-09-16 22:34:46 AEST*

> check @docs/prompts-result.md and add all from this session

**Result.** Sent to the third build session (`c14c47e2`), the one that did section 6's
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
| [`1a67350`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/1a67350) | The third build session's results, written from its own record |
| [`3fa484a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/3fa484a) | The design session, logged first-hand as section 1 |
| [`6187cd8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/6187cd8) | The handoff session, logged first-hand as section 2; `39205d9`'s row restored |

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

*Sent 2026-09-17 18:47:40 AEST*

> check @docs/prompts-result.md and add all from this session

**Result.** Section 3. Sent to the first build session (`f21d74d7`), which
wrote the spec tests and the plan and built the first version of the site,
`44d5b99` to `07cea35`. Its prompts fall between the handoff session's last
and the next session's first, so the later sections are renumbered from 3--6
to 4--7, with their cross-references updated. That moves the ordinals too: the
file had called `58785399` the first build session, so it is now the second,
`c14c47e2` is the third, and every "first session" and "second session" that
meant one of them now says which.

Prompts, times and the clarifying answer were read from that session's
transcript, and the commits from `git log`. The `/comp4020:ship` that ended it
gets no section under the rule at the top, but its clarifying answer is kept
inside section 3 because it changed what got deployed, and the rule now says
so.

Checking the session's claims against GitHub turned up a fault in section 2 as
well as in the session itself. GitHub's event log records the repo as made
public on 30 August, and CI had run, and failed, on every push since 14
September, so section 2's "CI stays off while the repo is private" was wrong,
and it now says so. Section 3 records the same mistake from the build side.
Reading the session's record against its transcript also found its
verification overstated: 83 pages measured at 390px, not 85, and no deck seen
at phone width. That is recorded in section 3 as a mistake; the plan and the
evidence log still carry the wider claim. The work's range at the top now
starts at `abf69e8`. This edit's own commit is the next one in `git log`.

---

## 8. The timetable

A third session (`88d4d4e6`), started six minutes after section 5's prompt and
run beside it. Background sessions have to work in a git worktree, so this one
did, under `.claude/worktrees/timetable-page`. That worktree is the one section
5 found `pnpm test` collecting tests from. It comes last here because its
work reached `main` last, after every section above it.

*Sent 2026-09-16 13:06:50 AEST*

> add a dedicated timetable page before Lectures. The page should contain all course logistic information. Lectures will be on 2-4pm Tuesday, labs will be on 2-3pm Thursday.

**Result --- the page.** `/timetable/`, first in the navigation, carrying:

- the course facts;
- the week's three fixed points: Tuesday 14:00--16:00 in Theatre 1, Thursday
  14:00--15:00 in Room 2.14, and the journal at Sunday 23:59;
- the twelve-week calendar with the break;
- every deadline;
- the public holidays;
- who to ask, and when.

The rules themselves --- extensions, adjustments, AI use, observing people ---
stay on the policies page and are linked, not restated, so each fact has one
place where it's true. The rooms are new fiction for a fictional university,
and are settled in the design doc.

**The calendar is generated, never retyped.** Its dates come from the lectures,
the labs and the assessments, the journal's eleven `submissions:` included. A
hand-kept second copy of the dates is the failure this course is about.
`spec/timetable.test.ts` fails if any date or deadline in the course API is
missing from the page.

**The middle of the page is the argument in its own register.** A timetable
gives you a room and a start time, and leaves the rest to inference. So eight
numbered clauses write the rest down:

- 14:00 means 14:00, not ten past.
- The lecture breaks at 15:00 for ten minutes, announced in advance.
- You can leave by the back door without explaining.
- Lectures are recorded and captioned, with nothing to ask for.
- Labs aren't recorded, because week 1's rule about observing people applies
  to the room too.
- Weeks 1 and 2 are the only labs that leave the room.
- Nothing is expected before the first lecture.
- Nobody takes a roll, though from week 9 the lab is where your report partner
  is.

**Checked rather than assumed:**

- The page says four public holidays fall inside the teaching weeks and none is
  a Tuesday or a Thursday. Each date was computed (Easter from the Gregorian
  computus), and the test re-derives each weekday instead of trusting the page.
- Sunday 28 March, a journal deadline, is Easter Sunday; the page says so.
- The capstone's title names two routes of equal weight, so in a calendar cell
  it's "Capstone" rather than a truncation that names only the first route.

**Mistakes, recorded:**

- Astro dropped the space before three inline links that began a new source
  line, rendering "on theassessment page". The link checker and axe both
  passed; reading the rendered text found it.
- The hand-written tables lacked the theme's `.at-table-wrap`, so the page
  scrolled sideways at 390px (568px of content). Measured in the browser, and
  fixed by adding the wrapper that markdown tables get automatically.
- `wide` on `ContentLayout` was tried for the calendar, and turned out to do
  nothing in this theme version. It was removed rather than left as a
  misleading prop.
- The design doc first cited `scripts/lecture-timing.ts`, which existed only as
  an untracked file from the session running alongside. The reference was cut
  before commit, and restored once the script was committed on `main`
  (`a9dbb61`).
- The work was pushed to a branch, `worktree-timetable-page`, not merged into
  `main`. The harness says to work on `main`, but background sessions aren't
  allowed to push there. It sat unmerged while `main` moved 26 commits on.

*Sent 2026-09-17 10:29:16 AEST*

> check @docs/prompts-result.md and add all from this session

**Result --- catching up with `main`.** This file exists only on `main`, and
the timetable had never reached it. So a fresh branch, `timetable-on-main`,
was cut from `origin/main`, and the two timetable commits were cherry-picked
onto it (the originals, `e85fa3f` and `30bb49d`, are superseded). The only
file both sessions had edited was `docs/notes/process-evidence.md`, in
different sections. Git merged it cleanly, and the merged result was still
read rather than trusted.

Checked on the combined tree:

- `pnpm check` exited 0 when run directly, not through a pipe.
- `pnpm check:timing` still has 0 of 12 weeks short.
- The two sessions had settled the lecture break independently and agree: the
  speaker notes on the first slide of weeks 1, 4 and 5 say "break at the hour"
  and to announce it, and the timetable's second clause says 15:00, announced.
  The design doc now ties the two together.

**Result --- a regression found by looking.** Measuring the navigation
against the deployed site showed that adding the timetable had made seven
items. A seventh item drops the whole link list to a second row under the logo
at every desktop width, because the nav sits in an 864px column whatever the
viewport. It's the bug `2f66a99` fixed for Glossary, reintroduced, and it had
passed the build, axe and every spec test.

Two fixes put the links back on one row at 1920, 1280 and 1024. Squeezing all
seven in meant no gap and 0.4rem padding, restyling the theme until the links
nearly touch. The other was moving one item out of the nav, as `2f66a99` did.
People came out, because the timetable's "Who to ask, and when" links each of
the three staff and the home page keeps its People card. Having been found by
eye twice, the nav count is now a spec check.

**Mistakes, recorded:**

- The first desktop screenshot of the timetable already showed the nav's links
  on a second row, and it wasn't noticed until this pass.
- The first measurement of the fix still reported "wraps" with only six items,
  because it also required the search button on the logo's row. The deployed
  site already puts search on the second row. Measuring the deployed site with
  the same code exposed the faulty test before anything was changed on the
  strength of it.
- A preview server from the first prompt was still running the next morning.
  The process is `astro.mjs preview`, so `pkill -f "astro preview"` missed it,
  once on each prompt. It was confirmed to be serving this worktree's current
  build before being used, and was stopped by PID.

Minutes aren't affected: nothing here changed a lecture or a deck.

| Commit | What it did |
| --- | --- |
| [`55928a1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/55928a1) | `/timetable/`, `src/data/timetable.ts`, `spec/timetable.test.ts`; times on the home, lecture and lab pages; design doc settles where and when |
| [`4bd5203`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/4bd5203) | Evidence log row for the timetable decision |
| [`a9dbb61`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/a9dbb61) | Design doc ties the two-hour slot to `pnpm check:timing` |
| [`0deedfc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/0deedfc) | People's nav slot to the timetable; nav held at six by a spec check |

This edit's own commit is the next one in `git log`.

---

## End state, as checked when this file was written

- **Decks:** 12 of 12 weeks.
- **Timing (`pnpm check:timing`):** all twelve weeks 96.0--105.1 minutes; 0 of
  12 more than 10 minutes short of the 105-minute target.
- **Readings:** 71, each checked against its source before it shipped; 16 of
  them landed in the third build session.
- **Layout, measured in the browser:** no slide in any of the twelve decks
  extends past its 720px box, and no rewritten lecture page or new reading
  scrolls sideways at 390px. Measured after `849a75d`. The section 8 commits
  since then touch four pages: `/timetable/`, the home page and the lecture and
  lab listings. Those four were re-measured after `0deedfc`, with no sideways
  scroll at 390px, and the navigation's links on the logo's row at 1920, 1280
  and 1024.
- **Timetable:** `/timetable/`, first of six navigation items. Its 8 spec tests
  pass, part of 402 in `pnpm check`.
- **Plates:** 4, all public domain or CC BY-SA, with provenance recorded.
- **CI:** the build, spec and deploy jobs pass. `check:evidence` still fails,
  now only because `PROCESS.md` cites the template's example hashes `a1b2c3d`
  and `e4f5a6b`. It goes green when those citations are replaced with real
  commits --- the tables above are there for that.
