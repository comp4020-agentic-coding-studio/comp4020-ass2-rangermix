# Shared-content implementation result

Status: assigned implementation complete; local checks passed. Root owns
whole-site integration, rendered checks and the verified git checkpoint.
Ownership here was assessments, glossary, DepthLadder and the twelve research
reviews. This agent performed no git mutations or whole-site builds.

## Shared wording for weekly alignment

- The recovery ledger uses five columns: **Subroutine | Context | What it
  bought | Cost (recovery h) | Pressure**. Ordinary rows record **chosen**,
  **expected** or **enforced**. A switching row names the from/to contexts and
  estimates the transition's cost; it can use **n/a — transition** in Pressure
  if no separate social demand applies. That is an explicit exception, not a
  blank pressure entry. Do not require a student to invent a real switch.
- The depth model guides **voluntary escalation**. The suggested nearby
  window never creates a minimum disclosure obligation: holding a lower level,
  stepping down or passing remains available. The component's caption and
  accessible description now carry this qualification in addition to the
  page's own wording.
- The capstone keeps all three Route A headings, but **what I decline** may
  say there is no affordable decline now, with a hypothetical comparison
  clearly separated from observed costs. Assessment requires a reasoned choice,
  not a compulsory real refusal.
- The field experiment applies all four contextual ethics questions. Noticing
  a variation is relevant to costs, stopping and repair, not an automatic
  failure or a reason to evade detection. No universal eye-contact minimum.
- The journal's worked test contains a distinct second delayed-reply
  episode, with the follow-up on the first retained as clarification. A
  counterfactual prediction alone does not become observed evidence.

## Finding disposition

| Finding | Disposition in this scope |
| --- | --- |
| W1–6-C1: journal example lacks a second instance | Added a separate Friday group-meeting request, another delayed yes and the observable result that the person stayed for the requested ten minutes. The initial follow-up is explicitly about the first episode. The revised rule rejects delayed yes as a reliable refusal signal without inferring why either person paused. |
| Integration chronology note | Friday's follow-up now asks “Are Thursdays usually good for you?”, not whether the already missed appointment can be moved. Both observed episodes precede the weekly Sunday deadline. |
| W1–6-M1 / M2: compulsory decline or desired observation | The capstone permits “no affordable decline now” under its existing decline heading, with a labelled hypothetical comparison. The Protocol Specification explicitly permits observation while choosing to run or decline. The journal still requires a real second observed instance; it need not be a deliberately changed behaviour. The lab/spec alternatives remain with the weekly owner. |
| W1–6-M3: prediction presented as observation | Journal instructions, the field-note glossary entry and the week 2 research interpretation separate counterfactual predictions from observed exchanges. A prediction does not satisfy the journal's second-instance criterion. |
| W1–6-C6: incompatible ledger formats | Glossary and week 6 research note now state the five-field format and the explicit switching exception above. The weeks 1–6 owner confirmed this same format in its result file. Recovery hours are estimates, not a conversion from time spent camouflaging. |
| W7–12-01: inconsistent experiment ethics | The capstone spells out all four contextual questions: ordinary in this setting, people affected, costs/how noticed, stopping/repair. Detection is neither the success criterion nor an automatic failure; objection means stop and repair. No universal gaze minimum. Weights and criteria percentages are unchanged. |
| W7–12-02: disclosure rule removes choice | The rate-limit and disclosure definitions state that another person's disclosure sets no minimum. The depth model remains untested. DepthLadder labels the window as suggested and adds the hold/lower/pass exception to its visible caption and accessible description. Weekly call-site labels/captions remain with the weeks 7–12 owner. |
| W7–12-03: Quinn placed in the wrong decision column | Glossary and week 10 review distinguish anticipated stigma, concealment effort/status, predicted disclosure consequences and experienced costs while keeping something private. Removed the supposed controlled two-student comparison and policy-effect finding. Those institutional changes remain proposals to test. |
| W7–12-09 / 10: role result and unvalidated models | Week 9 review separates Sprecher's listener/discloser comparison from Collins & Miller's effects, removes ±1 validation, and rejects an hours-before-depth requirement. Week 12 review does not guarantee that consistent use validates the ledger's rankings or the depth rule. |
| W7–12-11: individual diffusion-chain links | Week 11 review now reports the chain-condition comparison and expressly says the checked record does not locate extra loss at particular links. Bilateral negotiation remains the course's proposed response, not a tested intervention. |
| W7–12-12 and cross-course authoring record | All twelve reviews received dated teaching-correction notes. Bradley's time spent is distinct from recovery hours; Sonnentag provides planning vocabulary; Flynn does not prove every reader wrong; Alkhaldi's correlation coexists with a diagnosis-group difference; Moskowitz's abstract was checked, its full text was not. |
| W1–6-R1 / R2 and Fehr scope | Week 2 retains Hinds's technical-task and resistance-to-debiasing scope without inventing a warning intervention. Week 6 removes Bradley validation of the recovery unit. Week 5 preserves Fehr's explained variance/correlations without claiming a causal ranking of a person's response; Kendrick timing is phrased as the checked comparison. |
| Additional upstream alignment | Week 1 treats corridor rules as examples; week 3 avoids diagnosing every missed hint as the sender's error; week 4 distinguishes willingness ratings from rejection ratios and labels hold tokens as proposals. Week 7 qualifies planning scales and recovery accounts. Week 8 does not infer the absence of academic difficulty or that its scripts are proven interventions. Week 12 keeps the power argument conditional and intimacy applications tentative. |

The Interoperation Report was read and retained. It already permits an honest
account of a failed/one-sided negotiation and differing partner accounts, so
no new completion-path wording was needed there.

## Changed files

- `src/content/assessments/field-journal.md`
- `src/content/assessments/personal-protocol-document.md`
- `src/content/assessments/protocol-specification.md`
- `src/data/terms.ts`
- `src/components/sketch/DepthLadder.astro`
- All twelve files `docs/research/week-01.md` through `week-12.md`.
- This result file.

That is 17 course/research files plus this result. No readings, weekly pages,
shared timing files/tests, editorial snapshots, previous audit reports,
`PROCESS.md`, existing patch or git state were edited by this agent. The
no-diagnosis clause and protected register-break text are outside these edits.

## Verification

Fresh local checks passed after the changes:

- Parsed YAML for all four assessments and compared it with `git show HEAD`
  after removing only `spec`. All remaining metadata is equal, including
  weights, deadlines, eleven journal dates and marking weights. The body
  criteria percentages also remain unchanged.
- Imported all 49 glossary terms through Node's TypeScript support; checked
  unique names, valid introduction weeks and the existing deficit-register
  detector. Applied the same detector to all four assessment source files:
  no hits.
- Compared every pipe-table row in all twelve research reviews with HEAD:
  byte-identical row text, preserving sources, quotations, check dates and
  access levels. Dated correction notes describe the later interpretation
  change, not a new paper verification.
- Transformed `DepthLadder.astro` with the installed Astro 7
  `@astrojs/compiler-rs`: zero diagnostics. Confirmed the compiled output
  contains the voluntary-choice description and its ARIA linkage. The older
  bundled `@astrojs/compiler` transform also produced zero diagnostics.
- `git diff --check -- src/content/assessments src/data/terms.ts
  src/components/sketch/DepthLadder.astro docs/research
  docs/notes/course-consistency-follow-up/shared-content-result.md` passed.
- Read both weekly owners' coordination records and root's integration notes.

No full-site build, rendered-page test or rehearsal is claimed by these local
checks. Root must run `pnpm check` on the combined changes. The 844×390 deck
fit of the expanded DepthLadder caption remains part of root's requested
rendered integration check; compilation alone does not prove visual fit.

## Remaining integration dependencies

- Weekly owners mirror the ledger, voluntary depth window, contextual ethics,
  choice alternatives and qualified reading annotations in their assigned
  files. Their in-progress result records agree with the shared decisions.
- Root owns course-design's stale status/interpretation, all timetable and
  timing changes, break-slide insertion, shared specs and final browser checks.
- The previous editorial comparison and applied-source audit remain historical
  snapshots. This pass does not regenerate them from changed source.
