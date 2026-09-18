# Applied-text audit: weeks 7–12

Reviewed the live source on 2026-09-18. This is a read-only content audit: no
course source, editorial snapshot, tests, or git state was changed. Lecture
duration is being reviewed separately; the findings below concern consistency,
activities, assessment preparation, and the boundary between evidence and the
course's models.

The revised lectures make several previously missing qualifications explicit.
The remaining problems are mostly places where an exercise, self-check, reading
annotation, or research note still assumes more than the revised explanation
says. The most consequential ones concern disclosure, the definition of ordinary
behaviour in the field experiment, and tests that do not actually test their
clauses.

## Certain inconsistencies and incomplete activities

### W7–12-01 · P2 · The week 12 ethics test changes between its two activities

**Current passages.** `src/content/lectures/week-12.mdx:126–138` gives four
questions, then declares that less eye contact is ordinary but no eye contact
is necessarily a breach. At `:314–320`, a different test appears: if somebody
would notice they were in the experiment, the parameter is outside ordinary
behaviour. The deck repeats these instructions at
`src/decks/week-12.deck.mdx:164`, `:178`, and `:396–399`.

**Conflict.** The actual lab and assessment ask whether the variation is within
ordinary behaviour and require a contextual account of costs and stopping:
`src/content/sessions/week-12.md:35–43` and
`src/content/assessments/personal-protocol-document.md:49–58`. Neither defines
ordinary as undetectable. The course also explicitly offers looking away while
talking as a legitimate need (`src/content/lectures/week-10.mdx:200–203`). A
universal gaze minimum does not follow from that contextual rule. A noticeable
direct request or omitted greeting can still be one of the assessment's own
ordinary examples.

**Consequence.** A student can pass the published four-question review and be
told by the lecture's final exercise that the same proposal fails. The wording
also makes a particular eye-contact norm the boundary of acceptable behaviour
without accounting for the people or setting.

**Correction.** Use the same four questions in both activities. Treat a person
noticing or objecting as information relevant to costs, stopping, and repair,
not the definition of ordinary. Replace the absolute eye-contact example with
a contextual example that distinguishes a familiar, manageable variation from
one likely to impose a cost. Keep the deadpan point about the majority; it does
not cause the inconsistency.

### W7–12-02 · P2 · The rate-limit rule can require disclosure that the course says students may decline

**Current passages.** `src/content/lectures/week-09.mdx:121–128` says to match
the other person's last level plus or minus one and labels that window
“conforming”. The deck repeats it at
`src/decks/week-09.deck.mdx:204–218`; the glossary defines the rule as “stay
within one level” (`src/data/terms.ts:218–221`).

**Conflict.** The same lecture says a student may deliberately stay at level 1
for an entire semester (`:291–300`). The lab's first agreed clause allows either
person to decline a topic without explanation
(`src/content/sessions/week-09.md:24–27`). If one person offers level 4, staying
at level 1 violates the stated numerical window while exercising the explicitly
permitted choice.

**Consequence.** The diagram and glossary can make the right to withhold
personal information look like failed conformance.

**Correction.** State the decline/hold exception alongside the first rule and
in the glossary and diagram caption: the model guides voluntary escalation;
another person's disclosure does not create a minimum disclosure obligation.
Do not leave this qualification until the lecture's final section.

### W7–12-03 · P2 · The disclosure ledger puts expected harm from disclosure into the “not telling” column

**Current passages.** `src/content/lectures/week-10.mdx:79–80` correctly defines
anticipated stigma as what someone expects would happen if people knew, and
distinguishes it from concealment effort and disclosure status. But the
exercise at `:110–115` tells students to put “what do I expect would happen”
specifically in the column for what *not telling* costs. The deck repeats the
column instruction at `src/decks/week-10.deck.mdx:135–137`. The reading's
description still calls the result the “cost of not having told”
(`src/content/readings/quinn-2009-concealable-identity.md:3`), while its body
makes the distinction correctly (`:18–20`).

**Consequence.** A student who expects rejection if they tell someone is
directed to enter that expected rejection as a cost of not telling. That
confuses the decision the exercise is supposed to clarify. The checked study
record reports predictors of distress, not a comparison establishing the
counterfactual cost of disclosing versus concealing
(`docs/research/week-10.md:14`).

**Correction.** Keep the two options, but separate anticipated consequences of
disclosure from burdens currently experienced while keeping something private.
Let anticipated stigma inform both where appropriate; do not automatically
assign its predicted event to the “not telling” side. Align the reading
description and research-note summary. Leave the register break untouched.

### W7–12-04 · P2 · The worked bilateral protocol tests question form instead of directness

**Current passages.** Clause 2 in
`src/content/lectures/week-11.mdx:265` requires requests in writing, stated
directly; its test is “Is every request in the doc a question?” The deck calls
“Alex puts requests in the doc as questions” the fixed version of an untestable
directness clause (`src/decks/week-11.deck.mdx:298–304`), then returns to
“stated directly” at `:351`.

**Conflict and consequence.** A question can still be a hint (“Could it be
quieter in here?”), while “Please send the draft by Thursday” is a direct
request that fails the proposed question test. The main worked example for
the Interoperation Report therefore rewards a property different from the
one the partners negotiated.

**Correction.** Give the clause a concrete behaviour and a matching test, such
as putting the requested action and any needed deadline explicitly in the
shared document. If question form is itself a negotiated preference, say so
and test it separately from directness.

### W7–12-05 · P2 · The model email says the assignment brief is silent about an example it actually gives

**Current passages.** Alex asks whether a text-based subroutine is in scope and
says “I've checked the brief, and it doesn't say either way”
(`src/content/lectures/week-08.mdx:155–164`). The speaker note explicitly
asserts that the brief leaves text-based subroutines unspecified
(`src/decks/week-08.deck.mdx:323–332`).

**Conflict.** The published Protocol Specification brief offers “declining an
invitation from a group chat” as a suitable example
(`src/content/assessments/protocol-specification.md:36–39`).

**Consequence.** The specimen intended to teach checking the brief before
asking instead models overlooking a supplied answer. The speaker note tells
the teacher to reinforce that mistake.

**Correction.** Substitute a scope question that the actual brief leaves open,
and update the specimen, seven-clause table, and corresponding deck references
together. If this is meant to be a retrospective fictional brief, supply that
brief; the current text reads as a question about this course's assessment.

### W7–12-06 · P2 · Three lab self-checks do not account for the lab's permitted alternative

| Lab | Self-check | Permitted path that cannot meet it |
| --- | --- | --- |
| Week 7 | All six runbook sections completed, `src/content/sessions/week-07.md:9` | One early-sign line and one message, with the rest finished later, `:47–52` |
| Week 9 | Has used or seen at least one pass, `src/content/sessions/week-09.md:9` | Passing is optional throughout and the run sheet contains no demonstration, `:24–27`, `:34–40` |
| Week 10 | Drafted two disclosures and received one, `src/content/sessions/week-10.md:9–10` | May sit out the first half entirely and join the report round, `:33–38` |

**Consequence.** A student following the lab exactly can leave with a failed
self-check. Week 9 also assumes every student has a card they would have
passed on (`:11`, `:38`), although “none” is a possible honest answer.

**Correction.** Express the approved alternatives in the self-checks. Add a
brief fictional demonstration of the pass procedure if witnessing a pass is
required; do not require a real refusal merely to satisfy the checkbox. Allow
“none” in the private note.

### W7–12-07 · P2 · The role-swap exercise asks for a comparison neither student can privately observe

**Current passages.** At the end of the listener/discloser exercise, each
student answers privately “which of you felt warmer towards the other?”
(`src/content/lectures/week-09.mdx:151–163`;
`src/decks/week-09.deck.mdx:248–258`).

**Problem.** Each student can report their own feeling but cannot privately
compare it with an unreported feeling of their partner. The source summary
describes participants reporting their own impressions
(`src/content/lectures/week-09.mdx:78–80`), not inferring another person's
internal rating. The disclaimer that the exercise is not a replication does
not make the question answerable.

**Correction.** Ask each person how their own feeling changed between phases.
If comparing roles is useful, collect an agreed, low-detail report from each
person after each phase. Make sharing optional rather than asking students to
infer their partner's score.

### W7–12-08 · P2 · The E-6 exercise directs students to research reviews they cannot reach from the course

**Current passages.** The fallback for finding an untested claim is the
“course's own observation” section at the foot of each week's research review
(`src/content/lectures/week-12.mdx:229–231`;
`src/decks/week-12.deck.mdx:279`).

**Evidence.** Those sections exist in `docs/research/week-07.md:79`,
`week-08.md:106`, `week-09.md:152`, `week-10.md:91`, `week-11.md:95`, and
`week-12.md:90`. They are repository documents, not reading annotations. The
`src/pages` route inventory has no research-review page, and searches of `src`
find no link to those documents. The fallback gives neither a link nor a
repository path.

**Consequence.** Students who need the fallback have to leave an eight-minute
activity to discover an unpublished resource.

**Correction.** Put a short list of candidate claims on the lecture page or
link to an intentionally published, reconciled research-review resource. A
bare instruction to find the internal notes is insufficient. See the stale
claims in W7–12-12 before publishing those notes.

## Evidence qualification and methodological concerns

These findings concern what the course can conclude from its checked record.
They do not claim that a full paper contains no additional relevant analysis.

### W7–12-09 · P2 · Some reading annotations still restore the overstatement removed from the lecture

| Reading text | Revised lecture and checked scope | Suggested alignment |
| --- | --- | --- |
| Hall: “the protocol expects hours before depth”, `src/content/readings/hall-2019-hours-friendship.md:15` | Hours are associated with becoming closer; no timetable for a particular friendship, `src/content/lectures/week-09.mdx:41–49`; evidence record `docs/research/week-09.md:11` | Keep the association and type of shared time. Do not turn it into a prerequisite for disclosure depth. |
| Gurbuz: friction is at the institutional interface “not in the work itself”, `src/content/readings/gurbuz-2019-autistic-students.md:17` | Reported social challenges coexist with academic strengths; institutional conventions can add demands around the work, `src/content/lectures/week-08.mdx:102–106` | Reporting academic strengths does not establish the absence of difficulties in academic work. Use the lecture's qualified account. |
| Sprecher: the difference vanished “the moment they swapped roles”, `src/content/readings/sprecher-2013-disclosure-role.md:3` | The pair completed a second interaction after swapping, `:17` and `src/content/lectures/week-09.mdx:73–82` | Say “after both participants had taken both roles”; no instantaneous measurement is described. |

The Quinn description is covered separately in W7–12-03 because the same
misclassification changes the actual exercise.

### W7–12-10 · P2 · The errata section guarantees that unvalidated models remain useful

**Current passages.** `src/content/lectures/week-12.mdx:237–245` says the pacing
rule survives even if depth is not ordered, and that “a wrong unit used
consistently still shows you which weeks cost more”. The deck repeats these
assurances at `src/decks/week-12.deck.mdx:286–291`.

**Concern.** The course's ±1 rule requires an ordered scale. A broad invitation
to attend to the other person might survive an invalid scale, but the
numerical rule would need revision. Likewise, applying an invalid proxy
consistently does not by itself establish that its ranking tracks the thing
being estimated. Calling the ledger “not a measurement” does not support the
ranking claim.

**Correction.** Say precisely what is retained: the ledger can collect
observations for revising plans, and the pace of an exchange can be negotiated.
Treat whether the scale or estimated recovery costs help a particular student
as a question to check against experience. Do not guarantee the surviving
rank or rule in the section designed to expose untested assumptions.

### W7–12-11 · P2 · The diffusion-chain self-check asks for a location of loss beyond the checked comparison

**Current passages.** The self-check asks students to say “where in the chain
the information was lost” (`src/content/lectures/week-11.mdx:10`;
`src/decks/week-11.deck.mdx:421`). The result table reports a steeper decline in
mixed chains (`src/content/lectures/week-11.mdx:55–59`), followed by “Packet
loss at the boundary” (`:66–68`; deck `:72`).

**Evidence boundary.** The checked record describes differences between chain
conditions (`docs/research/week-11.md:10`). The lecture explicitly says the
mixed chain's seating order was not checked (`:47`, `:215–216`). Nothing in
the provided record establishes which individual links account for the
additional loss. The reading annotation makes the same jump at
`src/content/readings/crompton-2020-information-transfer.md:19`.

**Correction.** Ask students which *chain condition* lost information more
quickly and what this suggests about communication mismatch. Label a precise
boundary mechanism as an interpretation. If the exact link-level result is
essential, check and present that analysis from the primary paper before
asking students to report it.

### W7–12-12 · P3 · Research notes still contradict the live qualifications and sometimes their own evidence tables

These are maintenance records rather than currently routed course pages, so
they have lower immediate impact. They become student-facing if used for E-6.

| Current research-note passage | Conflict |
| --- | --- |
| `docs/research/week-07.md:64–65`: recovery checklist “works for everyone” | `:49–51` and `src/content/lectures/week-07.mdx:136–139` limit this to a planning vocabulary drawn from work-recovery research. |
| `docs/research/week-08.md:83–84`: the odds of yes are better than “your estimate” | The live lecture now states the study finding and asks students to examine their own evidence (`src/content/lectures/week-08.mdx:55–80`); it does not establish every reader's estimate is low. |
| `docs/research/week-09.md:59–64`, `:132–134`: the stepping rule now rests on a measured result | `src/content/lectures/week-09.mdx:88–91` explicitly says the role study does not validate five levels or ±1. |
| `docs/research/week-10.md:28–43`, `:77–83`: measured cost of not telling; changing a department changes the predictor | The live text distinguishes the predictor and labels a departmental adjustment policy a proposal to test (`src/content/lectures/week-10.mdx:79–89`). |
| `docs/research/week-11.md:30–36`: the judgement is “not attached to a category” | Its own evidence table reports more favourable ratings for neurotypical targets (`:16`); the lecture now explicitly preserves that finding (`src/content/lectures/week-11.mdx:98–106`). |
| `docs/research/week-12.md:69–70`: Moskowitz was “found in research but not read” | The same record says its abstract was checked (`:14`) and discusses the actual objection (`:54–63`). |

**Correction.** Reconcile the narrative summaries with the checked tables and
the approved live qualifications. Preserve the earlier research history as
history if useful, but do not label obsolete claims “what survives into
teaching”.

## Small, certain copy mismatches

- **Week 8 lab scope:** the description and introduction say the seven-clause
  email specification is run on all three messages
  (`src/content/sessions/week-08.md:3`, `:14–15`); the actual run sheet uses it
  only for the tutor email and gives different tests for the other two
  (`:28`). Describe three messages with their respective checks.
- **Week 8 time estimate:** the five-minute office-hours opener supposedly
  lets the tutor budget “the next ten minutes”
  (`src/decks/week-08.deck.mdx:438–449`). Use five consistently, or explain the
  extra allowance.
- **Week 11 method comparison:** “Everything up to here has been ratings of
  recordings” (`src/decks/week-11.deck.mdx:191`) includes the earlier live
  diffusion-chain task (`:37–43`). Say “Unlike the first-impression clips…”
  when introducing Morrison rather than rewriting the earlier methods.

## Prior concerns checked on the applied text

- Week 7 now calls its afternoon/evening/semester categories **planning time
  scales, not recovery deadlines** (`src/content/lectures/week-07.mdx:45–46`).
  It names BIMS and the two omitted states without saying overload is a BIMS
  member (`:50–63`). The Apollo caption now describes the photograph rather
  than claiming its authors wrote while rested (`:148–149`).
- Week 8 no longer tells every reader their refusal estimate is wrong or
  their fear is necessarily louder than reality. It distinguishes study
  findings, asks about the reader's evidence, and disclaims a promise about
  their convenor (`src/content/lectures/week-08.mdx:55–98`). The research note
  has not caught up, as recorded above.
- Week 9 explicitly says the Sprecher study does not validate the five-level
  scale or ±1 (`src/content/lectures/week-09.mdx:88–91`), and no longer assigns
  an hour threshold to three conversations (`:41–49`). The remaining Hall
  annotation and research-note problems are listed above.
- Week 11 now says the Alkhaldi correlation does not eliminate the
  diagnosis-related difference in ratings
  (`src/content/lectures/week-11.mdx:98–106`). Its research note remains
  inconsistent.
- Week 10's protected passage from “Here is the part nobody warns you about”
  through “Right. Mechanics.” retains the approved wording in both lecture
  and deck (lecture `:128–149`, deck `:165–192`, compared with
  `docs/course-design.md:196–215`). No proposed correction above changes it.
  The no-diagnosis clause remains verbatim in
  `src/pages/policies/index.mdx:21`.

## Files reviewed

All content, frontmatter self-checks, diagrams' visible text, and speaker notes
in these 18 weekly files:

- `src/content/lectures/week-07.mdx` through `week-12.mdx`.
- `src/content/sessions/week-07.md` through `week-12.md`.
- `src/decks/week-07.deck.mdx` through `week-12.deck.mdx`.

Supporting content read: `CLAUDE.md`; `docs/course-design.md`;
`docs/research/week-07.md` through `week-12.md`; `src/pages/policies/index.mdx`;
`src/pages/glossary/index.astro`; `src/data/terms.ts`; all four files under
`src/content/assessments/`; and `src/components/sketch/DepthLadder.astro`.
The `src/pages` inventory and references to research reviews were also checked.

All 37 reading annotations linked by these six lectures were read:

- Week 7: `phung-2021-bims`, `stromberg-2022-sensory-overload`,
  `raymaker-2020-autistic-burnout`, `higgins-2021-burnout-definition`,
  `sonnentag-2007-recovery-experiences`.
- Week 8: `davies-2024-transition-support`, `brooks-2015-seeking-advice`,
  `martino-2025-self-advocacy`, `stephens-2009-casual-email`,
  `flynn-2008-direct-requests`, `gurbuz-2019-autistic-students`.
- Week 9: `sprecher-2013-disclosure-role`, `laurenceau-1998-intimacy-process`,
  `huang-2017-question-asking`, `hall-2019-hours-friendship`,
  `collins-1994-disclosure-liking`, `aron-1997-generating-closeness`.
- Week 10: `chaudoir-2010-disclosure-processes`,
  `quinn-2009-concealable-identity`, `corrigan-2003-stigma-disclosure`,
  `sasson-2019-diagnostic-disclosure`, `thompson-hodgetts-2020-disclosure-review`,
  `romualdez-2021-workplace-disclosure`.
- Week 11: `crompton-2020-information-transfer`, `sheppard-2016-reading-minds`,
  `debrabander-2019-first-impressions`, `alkhaldi-2019-readability`,
  `morrison-2020-real-world-interaction`, `rifai-2022-rapport-markers`,
  `crompton-2020-autistic-relationships`,
  `mitchell-2021-double-empathy-development`, `milton-2012-double-empathy`.
- Week 12: `hall-2010-flirting-styles`, `cialdini-2004-social-influence`,
  `keltner-2003-power-approach-inhibition`, `sala-2020-romantic-intimacy`,
  `moskowitz-2004-power-comment`.

Reading filenames are under `src/content/readings/` with a `.md` suffix.
This pass reused the existing source-check records; it did not freshly verify
the full papers or infer findings missing from those records.
