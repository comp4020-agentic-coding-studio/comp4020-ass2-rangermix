# Lecture timing audit of the applied editorial version

Reviewed 18 September 2026. Read-only audit of all twelve live decks, including speaker notes, the twelve lecture activity sections, the estimator, timetable and design contract. The report is the only file changed by this audit. No delivery rehearsal was performed.

**The current evidence does not establish 105 minutes of prepared teaching in every lecture.** `pnpm check:timing` passes, but eleven of its twelve estimates are below 105 minutes, and the estimate assigns substantial time to short slides and stage directions. The consistently itemised teaching allocations cover 14–24 minutes of exercises per week. The rest is an inferred allowance, not a timed run sheet. Weeks **1, 4 and 7** are the clearest priorities; weeks **5, 6 and 10** follow. Weeks 2, 11 and 12 have more specified activity, but their full duration still needs rehearsal.

There are also two definite implementation/content defects: all twelve title slides are omitted by the estimator, and the timetable's promised visible break slide is absent from every deck. Correcting the title count alone would still leave nine model estimates below 105 minutes; it would not resolve the method's generous assumptions.

## Evidence and reproducible counts

The contract is Tuesday **14:00–16:00**, a fixed **15:00–15:10** break and **105 planned content minutes** ([docs/course-design.md:81](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/docs/course-design.md:81), [docs/course-design.md:86](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/docs/course-design.md:86), [src/pages/timetable/index.astro:201](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/pages/timetable/index.astro:201)). The remaining five minutes are contingency/arrival/overrun in the design, not additional instructional content. A lecture that lasts two hours only because of the break and waiting is not 105 minutes of teaching.

Ran from the repository root:

```sh
pnpm check:timing
node scripts/lecture-timing.ts --json
rg -n 'estimateWeek|estimateAll|lecture-timing|check:timing' scripts spec package.json
rg -n '15:00|15:10|at the hour|last hour|this hour' src/decks
rg -n -i 'timed (rehearsal|delivery)|rehearsal|lecture.*stopwatch|stopwatch.*lecture' docs src scripts spec --glob '!docs/editorial/**' --glob '!docs/reviews/**'
```

The timing command exited **0**, reporting **0 of 12 more than 10 minutes short of 105**. That is its actual success criterion. No estimator tests or recorded timing rehearsal were found by these searches. Existing timetable tests check the two-hour slot and calendar; they do not inspect lecture break slides or exercise durations ([spec/timetable.test.ts:51](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/spec/timetable.test.ts:51)). `pnpm check` also does not invoke `check:timing` ([package.json:11](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/package.json:11)).

The following table preserves the current estimator's output. “Slides” is the count of source slide blocks, with the estimator's smaller count after the slash. “Notes credit” is already included in model total: it is the number of counted non-exercise note bullets multiplied by 0.4. “Gap” is 105 minus model total; a negative number is over target. The last column is a diagnostic recomputation that only restores the omitted title block with the existing weights, **not a revised runtime prediction**.

| Week | Slides: source / counted | Explicit exercise minutes: deck / chapter | Counted note bullets / credit | Model total | Gap to 105 | Same model with title restored |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 32 / 31 | 14 / 14 | 36 / 14.4 | 95.9 | 9.1 | 97.7 |
| 2 | 32 / 31 | 24 / 24 | 34 / 13.6 | 105.1 | −0.1 | 106.5 |
| 3 | 31 / 30 | 21 / 21 | 35 / 14.0 | 103.0 | 2.0 | 104.8 |
| 4 | 31 / 30 | 15 / 7 | 26 / 10.4 | 95.9 | 9.1 | 97.7 |
| 5 | 31 / 30 | 18 / 0 | 28 / 11.2 | 97.2 | 7.8 | 99.0 |
| 6 | 32 / 31 | 15 / 8 | 31 / 12.4 | 98.4 | 6.6 | 99.8 |
| 7 | 32 / 31 | 14 / 6 | 30 / 12.0 | 96.0 | 9.0 | 97.8 |
| 8 | 34 / 33 | 17 / 5 | 29 / 11.6 | 103.1 | 1.9 | 104.5 |
| 9 | 34 / 33 | 17 / 17 | 35 / 14.0 | 104.0 | 1.0 | 105.4 |
| 10 | 31 / 30 | 21 / 15 | 28 / 11.2 | 99.7 | 5.3 | 101.1 |
| 11 | 30 / 29 | 24 / 24 | 35 / 14.0 | 102.5 | 2.5 | 104.3 |
| 12 | 31 / 30 | 24 / 24 | 41 / 16.4 | 103.9 | 1.1 | 105.3 |

The deck activities total **224 minutes across 30 exercises**. All 30 are detected once. The chapter column counts explicit `In the room` duration headings, not a claim that chapters with fewer such headings contain no practical instruction. The 59-minute difference is deck-only timed practice in weeks 4, 5, 6, 7, 8 and 10. Those activities are present in the delivery deck and are **not omitted from its estimate**. Nor should chapter timings be added to deck timings: that would count the same teaching twice.

Exact activity locations and sums:

| Week | Deck activity headings and declared durations |
| --- | --- |
| 1 | [src/decks/week-01.deck.mdx:201](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-01.deck.mdx:201) 6 + [src/decks/week-01.deck.mdx:382](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-01.deck.mdx:382) 8 = **14** |
| 2 | [src/decks/week-02.deck.mdx:111](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-02.deck.mdx:111) 9 + [src/decks/week-02.deck.mdx:359](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-02.deck.mdx:359) 7 + [src/decks/week-02.deck.mdx:372](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-02.deck.mdx:372) 8 = **24** |
| 3 | [src/decks/week-03.deck.mdx:192](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:192) 8 + [src/decks/week-03.deck.mdx:305](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:305) 7 + [src/decks/week-03.deck.mdx:410](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:410) 6 = **21** |
| 4 | [src/decks/week-04.deck.mdx:241](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-04.deck.mdx:241) 7 + [src/decks/week-04.deck.mdx:360](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-04.deck.mdx:360) 8 = **15** |
| 5 | [src/decks/week-05.deck.mdx:189](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-05.deck.mdx:189) 8 + [src/decks/week-05.deck.mdx:382](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-05.deck.mdx:382) 10 = **18** |
| 6 | [src/decks/week-06.deck.mdx:191](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-06.deck.mdx:191) 8 + [src/decks/week-06.deck.mdx:329](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-06.deck.mdx:329) 7 = **15** |
| 7 | [src/decks/week-07.deck.mdx:167](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:167) 6 + [src/decks/week-07.deck.mdx:343](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:343) 8 = **14** |
| 8 | [src/decks/week-08.deck.mdx:228](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:228) 5 + [src/decks/week-08.deck.mdx:383](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:383) 6 + [src/decks/week-08.deck.mdx:425](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:425) 6 = **17** |
| 9 | [src/decks/week-09.deck.mdx:248](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-09.deck.mdx:248) 9 + [src/decks/week-09.deck.mdx:385](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-09.deck.mdx:385) 8 = **17** |
| 10 | [src/decks/week-10.deck.mdx:131](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:131) 8 + [src/decks/week-10.deck.mdx:297](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:297) 7 + [src/decks/week-10.deck.mdx:373](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:373) 6 = **21** |
| 11 | [src/decks/week-11.deck.mdx:150](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-11.deck.mdx:150) 7 + [src/decks/week-11.deck.mdx:242](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-11.deck.mdx:242) 8 + [src/decks/week-11.deck.mdx:378](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-11.deck.mdx:378) 9 = **24** |
| 12 | [src/decks/week-12.deck.mdx:169](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:169) 7 + [src/decks/week-12.deck.mdx:270](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:270) 8 + [src/decks/week-12.deck.mdx:390](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:390) 9 = **24** |

## Findings

**T1 — Certain defect: the estimator discards the title slide in every deck.**

[scripts/lecture-timing.ts:76](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:76) splits the source on slide separators, then removes an entire block when its first line begins with `import`. Every current deck puts imports and the title in the same first block: for example [src/decks/week-01.deck.mdx:6](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-01.deck.mdx:6) through its first notes, and [src/decks/week-11.deck.mdx:6](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-11.deck.mdx:6) through its first notes. All twelve title blocks therefore disappear, including their notes. `byKind` contains no `banner` despite every deck having one. The table shows the resulting one-slide discrepancy for each week.

Correct the parser to remove module declarations without dropping their accompanying slide, and add a regression case using a real import-plus-title block. Do not simply add one to the final count: the omitted notes must also be represented, and their timing merits a separate decision. The configured title allowance is one minute ([scripts/lecture-timing.ts:20](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:20)), even though the introductory comment says a title is ten seconds ([scripts/lecture-timing.ts:4](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:4)). That documentation mismatch should be resolved too.

**T2 — Certain inconsistency: the advertised fixed break is not on a slide.**

[src/pages/timetable/index.astro:207](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/pages/timetable/index.astro:207) promises a 15:00 ten-minute break and explicitly says “It's on a slide, at a fixed time”. None of the twelve decks contains a visible break announcement, break slide, 15:00 or 15:10. Only hidden opening notes in weeks 1, 4 and 5 say “break at the hour” ([src/decks/week-01.deck.mdx:17](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-01.deck.mdx:17), [src/decks/week-04.deck.mdx:20](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-04.deck.mdx:20), [src/decks/week-05.deck.mdx:17](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-05.deck.mdx:17)). Notes are useful reminders, but they do not fulfil the visible promise; even they omit the ten-minute duration. Other occurrences of “break” mostly mean the semester break or the deliberate week-10 register break.

Add the promised visible break and resume time to every deck and a run sheet placing it at 15:00. A total-duration estimate cannot establish where an exercise falls relative to that fixed boundary. The estimator has no break type or per-half schedule: adding a break slide today would incorrectly give it ordinary instructional time unless the model changes. The run sheet must count the ten-minute break as non-content.

**T3 — Certain threshold mismatch; methodological concern: a green check is not evidence of 105 minutes.**

The declared target is 105, but [scripts/lecture-timing.ts:173](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:173) and [scripts/lecture-timing.ts:178](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:178) only flag `shortfall > 10`: a model total of exactly 95 passes. Thus eleven sub-target weeks pass, including weeks 1 and 4 at 95.9. The output itself discloses this tolerance, so the defect is not hidden arithmetic; it is treating that coarse warning as proof that the two-hour brief is met. The `--json` branch also prints results without applying a failure threshold ([scripts/lecture-timing.ts:166](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:166)).

Report both target shortfall and any deliberately chosen warning tolerance. Make completion criteria explicitly require a 105-minute plan; keep a heuristic warning separate from evidence of delivery. Do not use a marginal pass to resolve a teaching-content concern.

**T4 — Methodological concern with a concrete counterexample: the model credits stage directions and repeated short claims as developed teaching.**

Every prose slide receives 2.5 minutes, every impact slide 1.5, every table 3, and every recognised diagram/photographic plate 3.5, regardless of how much is actually specified ([scripts/lecture-timing.ts:19](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:19)). Each speaker-note bullet adds 0.4 minutes—24 seconds—because the implementation counts bullet lines rather than what the line asks the lecturer to do ([scripts/lecture-timing.ts:85](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:85), [scripts/lecture-timing.ts:128](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:128)). This grants 10.4–16.4 minutes per week from counted note bullets alone. Some notes are substantive prompts; others say to point, pause, say something once, or tell a future editor what must remain unchanged. The comments' premise that every note is extra spoken material is false for these decks.

The decisive example is [src/decks/week-10.deck.mdx:192](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:192): **“Right. Mechanics.”** Its notes require going straight to the next slide, with no pause, and explain the intentional edit constraint. The current function assigns that exact block **3.3 minutes** (2.5 content + two note bullets × 0.4). That allocation contradicts its delivery instruction. Preserve the protected wording and abrupt register change; correct its classification/timing treatment, rather than extending the pause to satisfy the estimator.

Other concrete contributors are the five spending-rule slides in [src/decks/week-06.deck.mdx:303](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-06.deck.mdx:303) through [src/decks/week-06.deck.mdx:367](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-06.deck.mdx:367), including a slide whose entire explanation is “That's week 7”; the four short recovery-definition slides in [src/decks/week-07.deck.mdx:196](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:196) through [src/decks/week-07.deck.mdx:228](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:228); and the repeated ending of week 12. Its four-part table at [src/decks/week-12.deck.mdx:329](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:329) is restated at [src/decks/week-12.deck.mdx:368](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:368), and the impact sentence plus “fluency plus choice” is repeated at [src/decks/week-12.deck.mdx:359](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:359) and [src/decks/week-12.deck.mdx:379](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:379). The latter two receive 2.3 minutes apiece; the model cannot tell a useful reprise from duplicated material.

These are reasons to distrust precision to a tenth of a minute, not grounds to invent a different universal speaking rate. The prose-word diagnostic is separate: its hard-coded 140 words/minute is not used in `totalMinutes` ([scripts/lecture-timing.ts:34](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:34), [scripts/lecture-timing.ts:131](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:131)). The chapters are reading text, not complete delivery scripts, so their word counts cannot prove actual lecture duration either. Week 8's note refers to “the next forty minutes” ([src/decks/week-08.deck.mdx:223](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:223)); this is an approximate block description, not a separate exercise or a clocked sequence, and must not be added again to its constituent slide and exercise allowances. Use explicit block allocations supported by examples, questions and debriefs, then record rehearsed time. Distinguish stage directions from spoken explanation.

**T5 — Current exercise detection avoids double counting, but duration labels are not sufficient evidence of readiness.**

The heading expression recognises the thirty current exercises ([scripts/lecture-timing.ts:96](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:96)). After adding their declared time, the loop `continue`s ([scripts/lecture-timing.ts:124](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/scripts/lecture-timing.ts:124)), so it does not also add the slide's base weight or its notes. The lecture chapter is only used for the separate word diagnostic. No duplicate or missing *currently declared* exercise duration was found.

That also means setup, reading instructions, forming pairs, reporting back and note-directed debrief must fit inside the declared figure unless allocated separately. Several exercises provide explicit phases that sum to the heading (for example week 11's 3+3+1, 4+3+1 and 3+4+2). Others only specify an overall duration. The estimator neither validates those phase sums nor checks that required material exists. Concrete preparation gaps include:

- Week 2's seven-minute asleep test needs **ten sentences, three borderline**, but neither its slide nor its chapter supplies that set ([src/decks/week-02.deck.mdx:359](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-02.deck.mdx:359), [src/content/lectures/week-02.mdx:283](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/content/lectures/week-02.mdx:283)). The lab's two sentences drawn from a previous log are a different activity, not the promised ten-item bank ([src/content/sessions/week-02.md:26](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/content/sessions/week-02.md:26)).
- Week 4's eight-minute practice calls for **four questions from the board**; the preceding table provides situations and hold tokens, not four questions ([src/decks/week-04.deck.mdx:349](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-04.deck.mdx:349), [src/decks/week-04.deck.mdx:364](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-04.deck.mdx:364)). The lab provides a sample invitation, but no linked four-question lecture list.
- Week 5's eight-minute drill requires a board sentence with a deliberately mumbled word and six alternating rounds ([src/decks/week-05.deck.mdx:189](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-05.deck.mdx:189)). The exact board stimulus and what is changed between rounds are left to the lecturer. Examples elsewhere can seed it, but the deck does not select them.
- Week 8's six-minute email exercise has a fallback instruction to put a three-request email on the board, but does not supply it ([src/decks/week-08.deck.mdx:425](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:425)). Its prepared specimen has one request, so it cannot serve as the fallback without new writing.
- Week 10's six-minute receiving exercise calls for two scripted disclosure lines without identifying them ([src/decks/week-10.deck.mdx:373](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:373)). The existing need-without-label examples can supply them; specify which two, when roles swap, and how the one-minute debrief fits. Keep the explicit instruction that these are not students' own disclosures.

Supply the small prompt banks and a phase/debrief plan before judging these minutes deliverable. This is preparation work, not a request to add ornamental slides. Where activity instructions intentionally remain deck-only, link them from the chapter or state that the chapter is not a complete delivery run sheet.

**T6 — Certain residual duration language: later decks still describe an hour.**

Week 12 explicitly directs the lecturer to say **“This is the last hour of content”** ([src/decks/week-12.deck.mdx:28](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:28)) and labels the whole week “this hour” in its course table ([src/decks/week-12.deck.mdx:336](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:336)). There is no separate first/second-half agenda to make that literal hour identifiable. Weeks 9–11 also refer to “this hour” while describing material across their decks ([src/decks/week-09.deck.mdx:39](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-09.deck.mdx:39), [src/decks/week-10.deck.mdx:159](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:159), [src/decks/week-11.deck.mdx:32](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-11.deck.mdx:32)). Update duration language to the two-hour schedule or name the particular half being described. These leftovers are evidence of schedule/text drift, not proof of how long someone would actually teach.

## Where teaching development would help most

These are concrete next steps based on the existing content, not newly asserted research findings or proposed compulsory extra personal disclosure. They should replace thin/repeated coverage or deepen an existing block, then be timed. Do not treat the model's numerical gap as an instruction to add exactly that many slides or prolong a joke.

| Week | Assessment and next useful development |
| --- | --- |
| **1 — priority** | 95.9 model minutes; only 14 explicit. The greeting examples are usable, but the 81.9-minute remainder rests heavily on short claims and opening-course material. Expand the working branch rules at [src/decks/week-01.deck.mdx:306](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-01.deck.mdx:306) into a prepared, annotated handshake walkthrough with a real-question branch, token branch and ambiguous case. Have students state the observation that would change their classification, then debrief it. Time orientation separately so it does not become an unspecified reserve. |
| 2 | The most complete numerical plan: 24 explicit and 105.1 model minutes. Finish the ten-item asleep-test bank and its three borderline cases at [src/decks/week-02.deck.mdx:359](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-02.deck.mdx:359). Allocate how many disagreements are discussed inside seven minutes; its notes already sensibly say not to resolve all three. Rehearse the question exercise and the complete field-note example as a teaching sequence. |
| 3 | 21 explicit, 103.0 model minutes. “Decoding from both ends” / “Asking for the payload”, and “Sending it bare” / “The reply that renegotiates” revisit nearly the same script and cost ([src/decks/week-03.deck.mdx:224](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:224), [src/decks/week-03.deck.mdx:368](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:368), [src/decks/week-03.deck.mdx:239](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:239), [src/decks/week-03.deck.mdx:383](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-03.deck.mdx:383)). Give the reprise a distinct job: compare one hint, one face-value sentence and an unresolved case, showing what evidence would decide between readings. Preserve the right to send a bare request. |
| **4 — priority** | Tied lowest model estimate at 95.9; only 15 explicit. Prepare the missing hold-token question list. Develop the contrast between observed telephone gaps and experimentally manipulated gaps at [src/decks/week-04.deck.mdx:184](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-04.deck.mdx:184) into a worked interpretation task: what each design can establish, and why neither sets a deadline for a particular reply. Specify the gap activity's rounds and debrief without treating phone stopwatches or classroom impressions as a replication. |
| **5 — next** | 97.2 model, 18 explicit; the reading chapter supplies no separately timed activity headings. Prepare the repair stimulus and six-round sequence. Use the apology template at [src/decks/week-05.deck.mdx:291](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-05.deck.mdx:291) for a worked comparison of two low-stakes apologies with ownership/explanation in different places, then an observed-receiver checklist. Allocate that comparison and the debrief instead of stretching the brief component slides. |
| **6 — next** | 98.4 model, 15 explicit. The ledger and spending rules are practical but five rule slides receive repeated fixed allowances ([src/decks/week-06.deck.mdx:260](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-06.deck.mdx:260), [src/decks/week-06.deck.mdx:291](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-06.deck.mdx:291)). Provide a fully worked fictional timetable, its ledger, a changed constraint and the revised choice. Compare running/declining/switching and leave disagreement visible. Keep recovery hours explicitly a planning estimate, not a physiological conversion. |
| **7 — priority** | 96.0 model, 14 explicit; recovery definitions and runbook sections are spread across many small slides ([src/decks/week-07.deck.mdx:181](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:181), [src/decks/week-07.deck.mdx:258](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:258)). Prepare one fictional runbook and walk through a specific demand changing: which action, message and dropped commitment follow, and where the runbook is insufficient. Let a partner check whether it can be followed without improvisation. Show the three saved-message options before the “pick one” exercise ([src/decks/week-07.deck.mdx:343](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:343), [src/decks/week-07.deck.mdx:358](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-07.deck.mdx:358)). Keep the health/support limits and do not make students disclose personal crises to create discussion time. |
| 8 | 103.1 model, 17 explicit, with only five of those minutes declared in the chapter. Supply the three-request fallback. Use the existing email, extension and group-agreement specimens to show one failed clause, the observed practical consequence and a justified exception, instead of simply revisiting individual clauses ([src/decks/week-08.deck.mdx:271](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:271), [src/decks/week-08.deck.mdx:397](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-08.deck.mdx:397)). Specify debrief time so checking an email has an observable outcome. |
| 9 | 104.0 model, 17 explicit. Select the level-2 board question before delivery ([src/decks/week-09.deck.mdx:248](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-09.deck.mdx:248)); the lab has a candidate but the deck does not identify it. The last two cost/rate slides repeat much of the same script ([src/decks/week-09.deck.mdx:426](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-09.deck.mdx:426), [src/decks/week-09.deck.mdx:440](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-09.deck.mdx:440)). Replace the repetition with a prepared contrast between a follow-up, a switch and a step-down, asking what in the prior turn warrants each. This needs no increased disclosure depth. |
| **10 — next** | 99.7 model, and already inflated by the 3.3-minute snap-back. Keep the protected register break unchanged. Prepare the two fictional receiving lines and a short receiving checklist. Use the “who was asked, and how” table to compare what cannot be concluded across studies ([src/decks/week-10.deck.mdx:328](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-10.deck.mdx:328)). Time that evidence comparison and the three practice phases explicitly; do not stretch the emotional passage to fill the slot. |
| 11 | 24 explicit and substantial research comparison; 102.5 model. The weak/fixed clause table is useful ([src/decks/week-11.deck.mdx:296](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-11.deck.mdx:296)). Turn it into a complete case: write a clause, identify its scope/check, observe one counterexample, revise it and exercise the mismatch word. Time the shared discussion and keep the study limitations visible. The separate activities already have clear internal sums. |
| 12 | 24 explicit, 103.9 model, but the conclusion is repeated. Consolidate the four-part and outcome repetitions without losing the course's final tone. Spend the released teaching block on a worked erratum: contrast a vague objection with model/evidence-limit/test, then test the proposed design against the constraint “this year, without a grant” ([src/decks/week-12.deck.mdx:253](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:253), [src/decks/week-12.deck.mdx:270](/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/src/decks/week-12.deck.mdx:270)). Prepare a route-one example alongside the field-experiment review; the current two-minute route name plus five-minute first paragraph does not itself justify the rest of the slot. |

## Recommended acceptance evidence

1. Prepare a clocked run sheet for each lecture, naming its examples, exercises, debriefs, break and optional material. One arithmetically valid shape is 60 minutes of content from 14:00, break 15:00–15:10, 45 minutes of content until 15:55, then five minutes of contingency. Other divisions are fine if they preserve the fixed break, start time and 105-minute content target. Do not silently move the break to the nearest convenient slide.
2. Correct the title parsing; distinguish transition/stage-direction/break time from explanation; record the intended warning tolerance. Add narrow tests for an import-plus-title block, exactly-once exercise counting, duration subparts, and the visible break/resume contract. Those tests can validate a plan's structure, not whether humans actually use all its minutes.
3. Complete the prompt banks and worked cases above, then rehearse each weak lecture with the actual deck. Record content-block times separately from the ten-minute break, exercise instructions/work/debrief, and incidental delays. No such delivery evidence was available here. A sensible plan can still run short or overrun, which is exactly what rehearsal should reveal.

## Count reproduction

This read-only command reproduces the non-CLI columns and title-restoration diagnostic directly from the current source. It intentionally mirrors the existing classifications for comparison; it does not endorse their minute weights. “Source slides” means non-empty slide blocks after frontmatter removal, retaining the block that contains imports and a title.

```sh
python3 - <<'PYCOUNT'
from pathlib import Path
import re
rates = dict(banner=1, impact=1.5, quote=2, hand=1.5, centered=2,
             diagram=3.5, table=3, exercise=0, content=2.5)
exercise = r'^#{2,3}\s+In the room.*?\((\d+(?:\.\d+)?)\s*min\)'
def kind(block):
    marker = re.search(r'\{/\*\s*_class:\s*([a-z-]+)\s*\*/\}', block)
    if marker and marker[1] in rates:
        return marker[1]
    if re.search(exercise, block, re.M):
        return 'exercise'
    if re.search(r'^\s*<(SequenceDiagram|StateMachine|TimingLine|Envelope|Form|'
                 r'DepthLadder|Chain|Register|Plate)\b', block, re.M):
        return 'diagram'
    return 'table' if re.search(r'^\|.*\|$', block, re.M) else 'content'
def notes(block):
    return sum(sum(line.strip().startswith('-') for line in fence.splitlines())
               for fence in re.findall(r'```notes\r?\n([\s\S]*?)```', block))
print('week source/counted deck-ex chapter-ex note-bullets note-min title-min model+title')
for path in sorted(Path('src/decks').glob('*.deck.mdx')):
    body = re.sub(r'^---\r?\n[\s\S]*?\r?\n---\r?\n', '', path.read_text())
    blocks = [s.strip() for s in re.split(r'^---\s*$', body, flags=re.M) if s.strip()]
    counted = [s for s in blocks if not re.match(r'^import\s', s.splitlines()[0])]
    spoken = [s for s in counted if not re.search(exercise, s, re.M)]
    deck_ex = sum(float(m[1]) for s in counted for m in re.finditer(exercise, s, re.M))
    chapter = Path('src/content/lectures', path.name.replace('.deck', '')).read_text()
    chapter_ex = sum(float(m[1]) for m in re.finditer(exercise, chapter, re.M))
    bullets = sum(notes(s) for s in spoken)
    title = sum(rates[kind(s)] + .4 * notes(s) for s in blocks if s not in counted)
    total = sum(rates[kind(s)] + .4 * notes(s) for s in spoken) + deck_ex
    print(path.stem.split('.')[0], f'{len(blocks)}/{len(counted)}', int(deck_ex),
          int(chapter_ex), bullets, round(.4 * bullets, 1), round(title, 1),
          round(total + title, 1))
PYCOUNT
```

The exact transition counterexample is reproducible without modifying the estimator:

```sh
node --input-type=module - <<'JS'
import {readFileSync} from 'node:fs';
import {estimateWeek} from './scripts/lecture-timing.ts';
const source = readFileSync('src/decks/week-10.deck.mdx', 'utf8');
const block = source.split(/^---\s*$/m).find(s => s.trim().startsWith('Right. Mechanics.'));
console.log(estimateWeek('week-10 snap-back', block, ''));
JS
```

Observed output: one `content` slide, `deckMinutes: 3.3`, `exerciseMinutes: 0`, `totalMinutes: 3.3`.
