# Cross-course rules and authoring record

Reviewed the applied source at `53a4403`: all assessment briefs, the policies
and submission guide, the glossary, course metadata, staff profiles, timetable
instructions, reading-page descriptions, and the existing course specifications.
The weekly auditors cover the full lecture/lab/deck bundles. This is an
internal-consistency review, not a new verification of all 71 research sources.

## Finding: the authoring record can restore claims the course now qualifies

**Priority: P2 for future maintenance; these notes are not student pages.**

The approved copy correctly separates the course's planning models from what
its sources establish, but the upstream instructions still contain the stronger
claims:

- `docs/research/week-06.md:30–35` says Bradley validates the guessed recovery-
  hours unit. `src/content/lectures/week-06.mdx:100–103` now explicitly says the
  study measures time spent camouflaging and supplies no conversion to recovery
  time. These are different quantities.
- `docs/research/week-09.md:54–64` equates a listeners/disclosers result with the
  result about liking someone one has disclosed to, then uses role switching
  to justify the ±1 depth rule. The applied reading annotation and lecture
  distinguish those findings and call the scale a course model.
- `docs/research/week-10.md:38–42` still gives the controlled two-person
  comparison and environmental explanation that the applied lecture has
  replaced with an institutional proposal to test.
- `docs/course-design.md:189–191` says need-without-label wording “buys the
  accommodation without the rest”. The lecture and glossary now describe the
  request without promising its reception or outcome.

Because `CLAUDE.md` tells future authors to write the week from these reviews,
this disagreement can undo the approved edits. Update the *teaching
interpretation* portions of those notes to the applied limitations; retain the
original source-verification records and distinguish the date of the later
editorial correction from the date a paper was checked.

The design document also still opens with “none of it is build-verified”
(`docs/course-design.md:4–5`), despite the passing build and tests. Its visual
rule excludes all raster illustrations (`:285`), whereas
`docs/notes/image-provenance.md` documents the historical images actually used.
These historical statements need a current-status note so they stop reading
as active instructions.

## Residual summary wording to tighten

These are smaller claim-scope concerns, separate from the confirmed activity
and assessment inconsistencies in the weekly reports:

- `src/content/readings/quinn-2009-concealable-identity.md:3` compresses the
  explanation to “it isn't the concealing” and what someone expects if others
  knew. Its body and the glossary identify four predictors. A description
  naming the four predictors would preserve the revised scope better.
- `src/content/readings/garfinkel-1964-routine-grounds.md:3` says expectations
  “only show when someone breaks one”, while the edited glossary deliberately
  says breaching *can* make them visible. Carry that qualification into the
  short description too.
- `src/content/readings/fehr-2010-forgiveness-meta.md:3` still says “the
  situation matters more than the victim's personality”. The applied week 5
  lecture carefully limits this to explained variance and does not rank the
  causes of a particular apology. The metadata should use that same limit.

These are suggested follow-up edits, not fresh empirical claims about the
papers. They were not silently applied along with the approved snapshot.

## Checks that agree

- The assessment weights total 100%; all eleven journal dates are published,
  best ten count, and the Field Journal extension exception is present.
- Course, timetable and assessment dates agree, including the mid-semester
  gap and capstone after teaching. The generated timetable and existing date
  specifications cover those relationships.
- Partner work is assigned to weeks 9–11 and individual reports are due on
  30 May; the report and week 11 lab require at least four clauses. The old
  “five is Thursday's job” instruction is gone.
- The staff allocations, contact routes and two-working-day escalation
  instructions agree across staff profiles, policies and timetable.
- The submission guide explicitly says the prototype cannot accept uploads;
  linked assessment and timetable instructions point to that guide.
- The no-diagnosis clause and week 10 register break remain intact.

## Application evidence

All 157 current text files match their reviewed-draft SHA-256 values. Exactly
79 source files changed. `pnpm check` passed after application: 425 tests in
10 files, 125 pages, no reported accessibility violations, broken links or
structural deck violations. Those specifications do not check all semantic
relationships described in this review. No new issue was declared resolved
merely because the test suite passed.
