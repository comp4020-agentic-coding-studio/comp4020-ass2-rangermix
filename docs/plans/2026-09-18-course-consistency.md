# Course consistency and teaching schedule implementation plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Resolve the applied-copy review findings and implement the user's revised fictional teaching schedule, using rough timing estimates without rehearsal.

**Architecture:** Keep the existing Astro content model. Shared timetable data distinguishes room bookings from actual teaching times. Estimate ordinary slides at two minutes and title/transition slides at five seconds, count explicitly timed activities once, and exclude break/optional closing discussion from core teaching. Each deck ends with a question; core teaching aims for about 85 minutes, with a fixed break and room for contingency.

**Tech Stack:** Astro, Markdown/MDX, TypeScript, Vitest, existing static-page checks.

## Settled decisions from the user

- Tuesday lecture starts 14:05; break is 14:55–15:05; core material ends around 15:40. Remaining time is contingency or optional open-ended discussion, stopping by 15:55. The booked slot remains 14:00–16:00.
- Interpret “all slides end with a question” as every slide deck ending with one open-ended question. Mirror it on the lecture page. Exercises may become these discussion prompts where that improves the sequence.
- Thursday labs start 14:05 and finish 14:55 inside the existing 14:00–15:00 booking. Give each a realistic 50-minute run sheet. Extend a booking only if its necessary work cannot reasonably fit; announce any such change consistently.
- Rough estimates suffice. No rehearsal or live teaching is required. Report a nominal 85-minute target with a clearly disclosed ten-minute planning tolerance, not a claim of measured duration. A fixed-time break must remain visible even if a model boundary is approximate.
- Week 6 accepts either running or declining a subroutine. Week 2 counterfactual answers are predictions, never observations.
- Fix the remaining review issues using editorial judgment, preserving the course's honest, satirical voice, the no-diagnosis clause and the approved week 10 register break.
- Preserve the historical editorial comparison and previous audit as snapshots. Keep the user's `PROCESS.md` and existing patch unchanged. Use `main` and regular verified commit/push checkpoints as instructed.

## 1. Timing model and shared timetable

Modify `scripts/lecture-timing.ts`, `src/data/timetable.ts`, the timetable and lecture/lab index pages, and `docs/course-design.md`. Add `spec/lecture-timing.test.ts` for import-plus-title parsing, five-second transitions, two-minute regular slides, explicit exercise accounting, no note inflation, break/discussion exclusion and consistent CLI validation. Update `spec/timetable.test.ts` to assert the new visible schedule and booking distinction. Run targeted tests before and after the implementation. Preserve unrelated public-holiday and deadline data.

## 2. Weekly fixes

Use disjoint file ownership for weeks 1–6 and 7–12, each including its lecture, lab, deck and associated reading annotations. Read the corresponding audit before editing. Fix the complete set of instruction, example, method and wording findings. Put actual prompts and examples where the activity refers to them. Make the run sheet support each required result and permitted alternative. Add useful worked cases or develop debriefs where the simple timing model indicates a short core; do not pad with repeated slides. Add one distinct optional final question per week.

## 3. Assessment, terminology and research alignment

Fix the journal's second-instance example and any other affected assessment instructions. Align shared glossary entries and diagram captions with the revised choices and contextual ethics rules. Reconcile the teaching interpretations in `docs/research/week-*.md` with their checked evidence and revised live wording, retaining accurate verification history. Use the already checked scope instead of adding unverified empirical details.

## 4. Integration and specifications

Insert a visible break/resume slide in every completed deck at the nearest useful boundary to 50 estimated minutes. Add source/rendered specs for each deck's final optional question, break times, contiguous 50-minute lab run sheets and preserved protected text. Review semantic corrections against an explicit finding-to-resolution checklist; avoid brittle tests that merely duplicate revised prose. Check numbered section references after all content edits.

## 5. Verify and checkpoint

Run `pnpm check`, `pnpm check:timing`, the historical archive checker, `git diff --check`, and targeted browser inspection of the timetable plus representative break/final-discussion slides. Record estimates and the disposition of every prior finding in `docs/notes/course-consistency-follow-up/`. Commit only completed verified files and push. Inspect CI/deployment results, reporting the known separate process-evidence status accurately. Rehearsal is outside scope by user instruction.
