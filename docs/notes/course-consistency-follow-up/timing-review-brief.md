# Independent timing-code review

Read the approved schedule in `docs/plans/2026-09-18-course-consistency.md`.
Review root's current changes to `scripts/lecture-timing.ts`,
`src/data/timetable.ts`, the three modified index/timetable pages,
`spec/lecture-timing.test.ts`, `spec/timetable.test.ts` and
`spec/teaching-schedule.test.ts`. Find actual correctness problems or missing
coverage, not speculative architecture improvements. Reproduce concerns with
small unit/CLI checks if useful. The source units and rendered timetable have
passed; the weekly agents are still editing their files, and root will insert
all break slides afterward, so do not report their current absence.

Do not edit source or tests, run whole-site builds, or mutate git. Write the
review to `timing-review-result.md` here, with exact findings or a clean result
and checks run. This review is independent of your completed shared-content
task; do not reopen it unless you find a concrete cross-file defect.
