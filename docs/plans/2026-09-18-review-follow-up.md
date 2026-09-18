# Assignment review follow-up implementation plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Recheck the merged timetable, close review issues 2–5 with regression specs, and assess the language without rewriting the course.

**Architecture:** Keep the course's content collections and build unchanged. Test rendered pages against the course API and the headings students actually see. Preserve the existing timetable and its specs; clarify submission instructions once the destination is settled.

**Tech Stack:** Astro, Markdown/MDX, Vitest, existing Playwright runtime for browser verification.

## 1. Dates, section references and page titles

- Add `spec/student-instructions.test.ts` checks for the journal deadlines around the break, numbered references and main page headings.
- Run `pnpm build`, then `pnpm exec vitest run spec/student-instructions.test.ts` to establish the failures on the merged site.
- Correct `src/content/sessions/week-07.md` and the self-check references in lecture weeks 1, 3 and 8.
- Give the Lectures, Assessment and People indexes explicit headings.
- Run `pnpm check` and inspect the affected pages in desktop and phone browsers. Commit and push this verified checkpoint on the configured `main` branch.

## 2. Submission instructions and timetable coverage

- Retain `spec/timetable.test.ts` coverage of teaching times, rooms, all meetings and deadlines.
- Check how students reach those details from lecture and lab pages.
- Resolve the submission destination without inventing an operational LMS or accepting files on a static prototype.
- Add failing specs for reachable submission instructions, implement the agreed route, then run `pnpm check` and verify the browser path.
- Commit and push the completed checkpoint.

## 3. Review and evidence

- Inspect representative slides at 844×390, including a table, and distinguish landscape results from the published portrait marking viewport.
- Read a spread of lecture, lab and policy prose for repeated rhetorical patterns, useful concrete examples and authorial voice.
- Report the wording judgement with exact examples; do not apply an unsolicited prose rewrite.
- Leave `PROCESS.md` and the existing patch file untouched. Record test and deployment results in a project note when the work is complete.

## Verification record

- The merged baseline passed 402 specs. The new instruction specs then failed
  in six cases: the pre-break deadline, four numbered references, and the page
  heading contract (three indexes plus the 404 page).
- After those corrections, `pnpm check` passed 415 specs and built 124 pages,
  with no type, accessibility or link errors.
- Chrome at 1920×1080 and 390×844 confirmed all four headings were visible,
  the corrected lab reminder linked to the journal, and the lecture references
  rendered correctly. The affected index pages had no horizontal overflow or
  browser exceptions.
- At 844×390, the week 1 deck's body text rendered at about 15px and its table
  text at about 12px. Landscape is usable; this does not replace the assignment's
  specified 390×844 portrait check. No deck styles were changed.
