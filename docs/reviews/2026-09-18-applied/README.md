# Course review after applying the editorial draft

Reviewed 18 September 2026, against source commit
[`53a4403`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/commit/53a4403d71374399ad23d98e39898d6633e4403f).

The approved editorial revision is applied: **594 recorded passage edits in
79 source files**, with all **157 reviewed text files** matching the draft.
The [comparison](../../editorial/2026-09-18/comparison.html) preserves the
original and applied wording. This review records further findings; it does
not apply new teaching, assessment or timing changes.

The course reads more directly now. Its engineering satire, practical scripts
and deliberate week 10 change of register survive the cuts. The main remaining
weakness is consistency: an explanation may now qualify a claim while its
exercise, self-check, reading summary or authoring note still assumes the
stronger version. Several activities also ask for an observation they never
collect. **All twelve lectures exist, but the repository does not yet establish
105 minutes of prepared teaching for every two-hour slot.**

## Content findings to address first

These are P2 issues: they can mislead students following the course as written.
The linked reports distinguish confirmed contradictions from methodological
concerns and details requiring further source verification.

| Finding | Why it matters and the correction needed | Evidence |
| --- | --- | --- |
| **The stated right to choose does not reach every rule and self-check.** | Week 6 requires a real decline after permitting either decision. Week 9's ±1 rule implies a minimum disclosure depth although students may stay at level 1 or pass. Labs 7, 9 and 10 have completion checks that omit the permitted reduced task, optional pass or sit-out route. Put each exception beside the rule and make those alternatives count as completion. | [Weeks 1–6, M1–M2](reports/weeks-01-06.md#methodological-and-teaching-concerns); [weeks 7–12, 02 and 06](reports/weeks-07-12.md#certain-inconsistencies-and-incomplete-activities). |
| **Week 12 uses different tests for an acceptable field experiment.** | The four-question contextual review becomes an absolute eye-contact rule and, later, a noticeability rule. Being noticeable does not by itself fail the assessment's published test. Use the same four questions in both activities and give a contextual example. | [Week 12 review, 01](reports/weeks-07-12.md#certain-inconsistencies-and-incomplete-activities); lecture [four questions and gaze example](../../../src/content/lectures/week-12.mdx), lines 126–138, versus lines 314–320. |
| **The Field Journal's worked example misses a marked requirement.** | The rubric gives 25% to a real second instance. The example only clarifies the original delayed yes. Supply a second observed episode that actually tests the rule; retain the follow-up as clarification. | [Weeks 1–6, C1](reports/weeks-01-06.md#confirmed-instruction-and-example-mismatches); [journal](../../../src/content/assessments/field-journal.md), lines 26 and 61–74. |
| **Week 4's lab compares the wrong outcome with the research claim.** | All responses are yes; the lab measures perceived willingness. That cannot test a claim about the ratio of rejections to acceptances after long gaps. Align its spec and debrief with the perception question. The lecture also asks students to compare millisecond estimates that were never collected; the lab leaves its timer role unassigned. | [Weeks 1–6, C3–C4 and M5](reports/weeks-01-06.md); [lab](../../../src/content/sessions/week-04.md), lines 9–36. |
| **Week 10's ledger blurs expected disclosure consequences and current concealment burdens.** | The explanation distinguishes anticipated stigma from concealment effort, but the exercise directs expected consequences of people knowing into the cost of not telling. Record those as distinct considerations rather than automatically assigning the expected event to the right-hand column. Preserve the protected register break. | [Weeks 7–12, 03](reports/weeks-07-12.md#certain-inconsistencies-and-incomplete-activities); [lecture](../../../src/content/lectures/week-10.mdx), lines 79–80 and 110–115. |
| **Some worked procedures cannot establish their stated result.** | Week 3 gives only one of three students the required bare-speaking turn. Week 6 asks partners to compare prices without identifying the activity. Week 9 asks each person to privately compare their warmth with an unreported feeling of the other person. Week 11 tests directness by checking whether a request is a question. Complete the turn allocation, use a common neutral comparison, ask about one's own experience, and test the requested action rather than question form. | [Weeks 1–6, C2 and C5](reports/weeks-01-06.md#confirmed-instruction-and-example-mismatches); [weeks 7–12, 04 and 07](reports/weeks-07-12.md#certain-inconsistencies-and-incomplete-activities). |
| **Two activities refer to material inaccurately or without access.** | Week 8's model email says the brief leaves text-based subroutines unspecified, although the brief gives a group-chat example. Week 12's errata fallback sends students to internal research reviews without a link or published route. Use a genuinely unresolved scope question and provide the fallback claims where students can reach them. | [Weeks 7–12, 05 and 08](reports/weeks-07-12.md#certain-inconsistencies-and-incomplete-activities). |

There are further method and wording issues in the detailed reports: a
counterfactual labelled an observation, uncollectable repair comparisons,
ledger-format drift, mandatory outcomes that observations may not produce,
and reading summaries that restore claims the lectures now limit. Internal
research notes also still tell future authors to use some of those older
claims. [The cross-course report](reports/cross-course.md) explains the
maintenance risk and records the course-wide rules that do agree.

The satire is not the source of these contradictions. Corrections can keep the
dry voice while making the task, evidence and permitted choices explicit.

## Lecture duration

The course specifies **Tuesday 14:00–16:00**, a fixed **15:00–15:10 break**,
and **105 planned content minutes**. Five minutes remain for contingency.
The target is therefore 105 minutes of teaching inside the two-hour slot,
not 120 uninterrupted minutes of speech.

`pnpm check:timing` passes, but its pass condition is only that no estimate is
more than ten minutes below 105. It currently omits every title slide because
each shares a source block with imports. The table shows both its unchanged
output and a diagnostic recomputation restoring those titles with the same
weights. **Neither column is a rehearsal or a reliable delivery prediction.**

| Week | Current model, min | Same model with title restored, min | Explicit exercises, min | Review priority |
| --- | ---: | ---: | ---: | --- |
| 1 | 95.9 | 97.7 | 14 | Develop and rehearse first |
| 2 | 105.1 | 106.5 | 24 | Complete prompt bank; rehearse |
| 3 | 103.0 | 104.8 | 21 | Develop distinct examples; rehearse |
| 4 | 95.9 | 97.7 | 15 | Develop and rehearse first |
| 5 | 97.2 | 99.0 | 18 | Develop next |
| 6 | 98.4 | 99.8 | 15 | Develop next |
| 7 | 96.0 | 97.8 | 14 | Develop and rehearse first |
| 8 | 103.1 | 104.5 | 17 | Complete fallback material; rehearse |
| 9 | 104.0 | 105.4 | 17 | Clarify activity; rehearse |
| 10 | 99.7 | 101.1 | 21 | Develop next; preserve register break |
| 11 | 102.5 | 104.3 | 24 | Complete worked case; rehearse |
| 12 | 103.9 | 105.3 | 24 | Replace duplicated ending with distinct teaching; rehearse |

Restoring the titles leaves **nine model totals below 105**. The small
fractions below target in weeks 3, 8 and 11 are much smaller than the model's
uncertainty. Weeks **1, 4 and 7** are the clearest concerns, followed by
**5, 6 and 10**. A model total above 105 does not prove the other weeks ready.

The estimate grants fixed time per slide and 24 seconds per speaker-note
bullet, including stage directions. For example, **“Right. Mechanics.” gets
3.3 minutes**, despite its notes requiring an immediate transition. It also
cannot distinguish a developed explanation from a repeated short claim.
Only 14–24 minutes of exercise time per lecture are explicitly allocated;
the rest of each total is inferred. All thirty declared exercises are counted
once, so the problem is not double-counting their chapter and slide versions.

**None of the twelve decks contains the visible break slide promised by the
timetable.** Only three decks mention the break in hidden opening notes.
Several later decks also retain “this hour” language. Those are definite
schedule/content mismatches independent of how long delivery actually takes.

The [timing report](reports/timing.md) gives each week's activity locations,
preparation gaps and useful teaching additions. [timing-data.json](timing-data.json)
preserves the measurements and title-restoration calculation. Build complete
worked examples and debriefs where needed, then prepare a clocked run sheet
and rehearse. Do not fill the numerical gap by extending jokes or adding
repeated slides. A feasible schedule is 60 content minutes before the fixed
break, 45 after it, and five minutes of contingency.

## Specifications and verification

The current specifications establish page structure, relationships, dates,
assessment totals, accessibility and deck integrity. They do not prove all
the semantic relationships above, or a full lecture's delivery time.

For follow-up work, useful acceptance checks are:

- Every worked assessment example satisfies each criterion it claims to
  illustrate, including the journal's second instance.
- Every activity produces the observations its debrief needs, and every
  participant has an allocated route through its required roles.
- Each permitted alternative can meet the corresponding self-check. Model
  rules, diagrams and glossary entries express the same limits.
- Timing-parser regression cases retain an import-plus-title block and count
  each exercise exactly once. A schedule check separates content, transitions,
  the ten-minute break and contingency; checks phase sums; and confirms the
  advertised break/resume display in every deck.
- A human review checks the examples and teaching substance; recorded
  rehearsal checks duration. Source-string assertions cannot replace either.

Verification completed for the applied revision:

- All 157 live text hashes match the approved draft; 79 source files changed.
- `pnpm check`: **425 tests passed in 10 files; 125 pages built**. No reported
  accessibility violations, broken links or structural deck violations.
- The historical comparison validates against its Git baseline using
  `--archive`. Its offline viewer passed navigation, filtering, text rendering
  and layout checks at desktop, phone portrait and phone landscape sizes; its
  status identifies the applied commit.
- [GitHub Actions run 35341643125](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/actions/runs/35341643125)
  passed the build/spec step and deployment, including the online-site check.
  The overall run failed at process evidence because the committed
  `PROCESS.md` still cites nonexistent placeholder commits `a1b2c3d` and
  `e4f5a6b`. Later secret/key scan steps were skipped, not passed.
- The user's working `PROCESS.md` and existing patch file remain unchanged.

This pass covered all twelve lecture/lab/deck bundles, their reading
annotations, assessments, glossary, policies, timetable and authoring records.
It reuses the repository's checked research record; it is not a fresh full-paper
verification or an observed classroom delivery. No new finding is labelled
fixed because the existing suite is green.

Detailed coverage and source locations: [weeks 1–6](reports/weeks-01-06.md),
[weeks 7–12](reports/weeks-07-12.md), [cross-course](reports/cross-course.md),
and [timing](reports/timing.md).
