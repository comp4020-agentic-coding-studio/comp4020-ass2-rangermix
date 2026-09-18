# Independent timing-code review

Reviewed the current timing estimator, shared meeting data, lecture/lab index
pages, timetable page and the three timing/schedule specifications against
`docs/plans/2026-09-18-course-consistency.md`. Source and tests were not edited.

## Finding to close during integration

**P2 — The fixed break's position has no regression check.**
`scripts/lecture-timing.ts:140–148` validates total core time and the number of
break/discussion slides, but never uses `beforeBreakMinutes`.
`spec/teaching-schedule.test.ts:27–41` checks the break's displayed times and
the final question, but also accepts any break position. An 85-minute core
with its only break before all teaching or after all teaching passes these
rules, even though the approved plan places the break near 50 estimated
minutes. Moving a break during a later content edit would therefore leave
the timing gate green despite the deck sequence no longer matching the fixed
14:55 break.

A read-only Node probe using `estimateWeek` and `timingIssues` returned:

| Fixture | Core minutes | Before break | After break | Issues |
| --- | ---: | ---: | ---: | --- |
| 50-minute activity, break, 35-minute activity, discussion | 85 | 50 | 35 | `[]` |
| Break, 85-minute activity, discussion | 85 | 0 | 85 | `[]` |
| 85-minute activity, break, discussion | 85 | 85 | 0 | `[]` |

The break fixture visibly contained `14:55–15:05. Resume at 15:05.`; the
last slide contained the discussion marker, question and optional 15:55
finish. Thus both displaced fixtures also satisfy the structural assertions
in the new schedule spec.

Add a regression check for the planned first-half boundary when integrating
the break slides, with a disclosed allowance for useful slide/activity
boundaries. Include at least one displaced-break negative fixture. This
does not require measured delivery or exact equality to 50 minutes. It is
the still-open first-half integration check already noted in
`integration-notes.md`, not a report about the temporary absence of break
slides during weekly editing.

## Checks and limits

- `pnpm exec vitest run spec/lecture-timing.test.ts spec/timetable.test.ts`:
  **21 tests passed** across two files. The timing tests include isolated
  CLI fixtures and matching human/JSON exit statuses. Timetable assertions
  read the existing build; this review did not produce a fresh build.
- Independently reproduced the three fixtures above through a stdin Node
  import, without writing source fixtures or changing repository state.
- Read the full estimator and tests, checked the shared schedule arithmetic
  (120-minute booking; 50 + 35 = 85 nominal core minutes; 50-minute lab), and
  checked consumers of the changed timetable fields. The shared/index copy
  consistently distinguishes room booking from teaching time.
- No other correctness problem found in the reviewed code. Title/import
  handling, two-minute ordinary slides, five-second transitions, explicitly
  timed activities, exclusion of notes/break/discussion from added core time,
  and the 75–95-minute planning band match the approved model for the course's
  current source conventions.
- Did not run whole-site builds or the unfinished weekly schedule integration
  suite, inspect classroom delivery, mutate git, or reopen shared content.
