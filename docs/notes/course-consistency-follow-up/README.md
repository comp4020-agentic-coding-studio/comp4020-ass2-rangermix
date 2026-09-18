# Applied consistency fixes and revised schedule

This follows the [applied-copy review](../../reviews/2026-09-18-applied/README.md)
and the user's approved [implementation plan](../../plans/2026-09-18-course-consistency.md).
The editorial changes remain applied. This pass resolves the review's
instruction, evidence-scope and timing findings while retaining the course's
satire and the protected week 10 register break.

## Teaching times

- **Lecture:** start 14:05; fixed break 14:55–15:05; core ends around 15:40.
  Every deck ends with its own open-ended question, mirrored on the lecture
  page. Use it if time remains; optional discussion finishes by 15:55.
- **Labs:** 14:05–14:55. All twelve have contiguous 50-minute run sheets,
  supplied prompts and explicit role rotations where needed. Their necessary
  work fits the one-hour bookings, so no lab booking was extended.
- **Bookings:** Tuesday 14:00–16:00 and Thursday 14:00–15:00 remain distinct
  from working time. The timetable, indexes and shared data agree.

The rough model assigns five seconds to a title/transition, two minutes to an
ordinary slide, and the declared duration to an activity, counted once. Notes
add no time. The fixed break and optional final question add no core time.
The nominal target is 85 minutes; the planning band is 75–95. A break must
fall at a useful boundary within 45–55 estimated core minutes. That tolerance
does not change its printed clock time. No rehearsal is required.

| Week | Before break | After break | Core total |
| --- | ---: | ---: | ---: |
| 1 | 48.1 | 36.0 | 84.1 |
| 2 | 51.1 | 32.0 | 83.1 |
| 3 | 53.1 | 30.0 | 83.1 |
| 4 | 51.1 | 32.0 | 83.1 |
| 5 | 50.1 | 36.0 | 86.1 |
| 6 | 50.1 | 33.1 | 83.2 |
| 7 | 50.1 | 36.0 | 86.1 |
| 8 | 51.1 | 34.0 | 85.1 |
| 9 | 51.1 | 34.0 | 85.1 |
| 10 | 48.2 | 37.0 | 85.2 |
| 11 | 51.1 | 35.0 | 86.1 |
| 12 | 47.1 | 37.0 | 84.1 |

All figures are minutes, rounded to one decimal. All twelve decks pass the
model. After the fixed 15:05 restart, these estimates put the core finish
between about 15:35 and 15:42. The [machine-readable report](timing.json)
records slide counts, activity minutes and classifications. Regenerate it
with `node scripts/lecture-timing.ts --json`.

## Consistency review

The complete finding dispositions and scoped checks are in:

- [Weeks 1–6](weeks-01-06-result.md): C1–C8, M1–M5, R1–R2, the smaller
  cross-references, reading qualifications and repair-diagram correction.
- [Weeks 7–12](weeks-07-12-result.md): findings 01–12, the three smaller
  mismatches, prepared teaching cases and permitted alternative paths.
- [Shared content](shared-content-result.md): assessment examples and specs,
  glossary, accessible disclosure diagram, and all twelve research reviews.

In particular, week 6 now accepts running or declining a subroutine, including
no affordable change. Its five-field ledger also permits private placeholders,
a real day with no masking or switch, or labelled fictional practice.
Counterfactual answers stay predictions. Fictional exercises and predictions
do not become the journal's required observed second instance.

The depth rule permits holding, stepping down and passing. The capstone's
ethics questions agree across the brief, lecture and lab. Prepared prompts
replace missing cards or inaccessible internal documents. Research claims
stay within the already checked evidence; the correction notes do not claim
new access to papers. The existing evidence-table rows were preserved.

Root's integration review also shortened a repeated diagram qualification,
clarified the week 8 draft-review deadline, and put week 12's model cautions
before the errata activity to provide a useful break boundary. Week 4’s study
comparison now has a two-minute table introduction and eight-minute activity;
its core time is unchanged, and both slides fit the landscape viewport. The final
cross-file pass found no remaining contradiction among the reviewed findings.
The course's explicitly untested models remain open questions, as intended.

## Verification

- `pnpm check`: **464 tests passed in 12 files**, after a fresh **125-page**
  build; Astro reported **0 errors, warnings or hints**. Built-page
  accessibility, internal links and all twelve deck-structure checks passed.
- `pnpm check:timing` and the JSON CLI: **0 planning issues across 12 weeks**.
  The thirteen estimator tests cover title/import parsing, ordinary/transition
  timing, single activity accounting, both planning-band limits, displaced
  breaks, safe imports and matching text/JSON exit statuses.
- The [independent timing review](timing-review-result.md) found a missing
  break-position check. A fixture first reproduced the gap; the new 45–55
  gate rejects breaks before or after all teaching and runs on every real deck.
- The initial combined schedule run failed 33 cases. Final integration passed
  all of them. A separate timetable whitespace regression was reproduced and
  fixed. The whole-site test initially misclassified “study session” as a
  template label; it now checks page titles, navigation and meeting labels.
- Both week 10 source passages match their prior committed text after removing
  layout and notes. The rendered no-diagnosis and register-break specs pass.
- `python3 docs/editorial/2026-09-18/tools/check.py --complete --archive`:
  **157 files accounted for, 79 edited, 78 retained, 594 recorded edits,
  zero pending**. The historical comparison and prior review remain snapshots.
- `git diff --check`: passed. The user's `PROCESS.md` and existing patch have
  unchanged SHA-256 hashes and remain outside the checkpoint.

## Rendered verification

Final inspection used the existing local preview in Chrome through cached
Playwright. The browser plugin was unavailable; no dependency was installed.

- Timetable → Lectures → Timetable → Labs passed at **1440×1080** and
  **390×844**. Clock times matched and neither viewport overflowed.
- All twelve breaks and final questions passed at **1440×900** and
  **844×390**: **48 checks**, with no clipped text or browser errors.
  Keyboard navigation from the break to the next slide also passed.
- **27 dense/diagram slide checks** at **844×390** passed with no clipped
  visible text or script errors, including both revised week 4 slides.
- The initial missing deck favicon was reproduced, fixed by reusing the Slop
  crest through a static SVG endpoint, and covered by a rendered regression.
  The final direct-deck browser run has no root-favicon 404.

The [schedule results](browser/schedule.json) and
[slide-fit results](browser/slide-fit.json) record the checked slide numbers.
Representative inspected screenshots show the [break](browser/break.png),
[week 4 exercise](browser/study-comparison.png),
[disclosure diagram](browser/disclosure.png), and
[closing discussion](browser/discussion.png).

These checks establish local build and rendering, not actual classroom
performance. They were completed overnight on 18–19 September 2026. Remote CI
is separate: the user's unfinished PROCESS.md remains outside this work.
