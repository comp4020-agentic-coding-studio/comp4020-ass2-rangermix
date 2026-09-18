# Weeks 1–6 follow-up implementation

Status: assigned implementation complete; local checks passed. The weeks 1–6
source files are released to root for break placement and integration. No git
mutations or whole-site builds were performed by this agent. This record
describes the follow-up implementation, not a fresh verification of the papers.

## Finding disposition

The finding IDs below refer to
`docs/reviews/2026-09-18-applied/reports/weeks-01-06.md`.

| Finding | Disposition |
| --- | --- |
| C1: journal example lacks a second instance | Coordinated through this record with the assessment owner and read the completed journal. Its Friday follow-up clarifies the first episode; a separate group-meeting request supplies the second delayed yes and observed result. The week 2 lecture's separate test remains, with only the part actually tested retained in its conclusion. Week 6's journal prompt requires all four parts and a real second instance. Fictional practice and predicted outcomes do not satisfy that requirement. |
| C2: only one bare-payload speaker | Week 3's lab now has three bare-payload rotations. Everyone sends one aloud or in writing. The six relay cards rotate all three roles twice and present each of three payloads in two different wrappers. |
| C3: all-yes lab cannot test rejection ratios | Week 4's lab self-check and debrief concern perceived willingness, the question related to Roberts et al. They explicitly distinguish that outcome from Kendrick and Torreira's rejection/acceptance comparison. The new lecture/deck design comparison also separates recorded calls, controlled stimuli and this classroom exercise. |
| C4: gap estimates absent from procedure | Week 4's gap activity now records an estimated duration and interpretation before the timer reveals the measured value. The debrief compares the group's estimated ordering with its timings without assuming an outcome. Both page and deck include the complete procedure. |
| C5: private cost comparison lacks a shared subject | Week 6 uses one named situation: optional five-minute small talk with two known classmates before a tutorial. Participants estimate the same subroutine/context and label predictions before sharing any willing estimates. Own or fictional estimates are permitted. |
| C6: incompatible ledger formats | Both week 6 model tables and instructions use **Subroutine / Context / What it bought / Cost (recovery h) / Pressure**. The switching row names its from/to contexts and uses the shared explicit `n/a — transition` exception. No real switch needs to be invented. The shared glossary and research note now use this format too. |
| C7: corrected field notes retain names | The corrected week 2 examples use anonymous roles in the lecture and deck. The contrasting faulty examples remain clearly fictional. |
| C8: directness announcement mislabelled | Week 3 now compares the directness announcement with stating a convention explicitly; it no longer calls that sentence a week 4 hold token. |
| M1: compulsory decline | Week 6's self-checks, activities and lab accept running, declining or no affordable change. The comparison records reasons and keeps a hypothetical choice separate from observed effects. The shared capstone wording also permits no affordable decline. |
| M2: required observation outcomes | Week 1 accepts an honest empty or low-count observation window and supplies three labelled fictional cases for branch practice. Week 3 accepts intact, partly lost or lost payloads. Week 6 accepts zero masking, no switch and labelled fictional practice. Fictional work is separated from real pooled observations and journal evidence. |
| M3: counterfactual called an observation | Week 2's table compares general questions with questions about one instance. It labels a counterfactual answer as a prediction and a retrospective explanation as an interpretation. The activity, self-check and Nisbett annotation preserve those distinctions without promising that a specific question must be accurate. |
| M4: repair table cannot be tested by constrained drill | The week 5 drill explicitly practises specific repair initiators. A separate table counts provided scripts, rather than claiming a population cost ranking: open request, restricted request and restricted offer each contain two repair turns; the self-repair example contains one. Counting begins with the first turn containing a repair move, and an acceptance adds one separately. Silence is not represented as guaranteeing self-repair. |
| M5: unassigned stopwatch operator | Week 4's lab now uses rotating asker/responder/timer triads. It states the start, lap and stop boundaries; records both token onset and yes onset; collects ratings before revealing times; and provides a missing-boundary procedure. Each student completes six baseline and two token ratings. It uses manual timing, with explicit limitations and a prepared-data alternative, without audio recording. |
| R1: unsupported Hinds intervention detail | Lecture, deck and annotation retain the checked abstract's resistance-to-debiasing formulation. They no longer identify an unverified warning intervention. The technical-task scope remains explicit, and the recent-learner application remains a teaching suggestion. |
| R2: research appears to validate recovery hours | Week 6's research self-check distinguishes time spent camouflaging from time recovering, and the slide is titled “Time spent camouflaging”. Recovery hours remain a planning estimate, with no conversion supplied by Bradley. The ledger explanation also warns that recovery estimates can overlap. |
| Cross-reference repairs | Week 1 names week 3 for payload/envelope vocabulary. Week 6 says weeks 1–5 covered topics, preserving week 5's move into implementation. Week 2 replaces the promised whole week 11 interview lab with the specific later use of an exchange when checking a clause. Week 3's decoder pointer no longer gives a stale slide distance. |
| Garfinkel and Fehr description scope | Garfinkel's reading description now says breaching can make expectations visible. Fehr's description qualifies its explained-variance claim rather than treating the correlates as a causal ranking of an individual's response. |
| Hull annotation's ledger mismatch | The annotation treats participants' accounts as informing the course's five-field planning tool. It no longer calls that tool the paper's three-column instrument or relies on the unverified interview description. |

Week 5's self-repair arrow is also corrected in both `StateMachine` call-site
datasets: it reaches **Repaired**, then follows the explicit acknowledgement
step before **Carry-on**. No shared diagram component change was needed.

The week 6 privacy integration note is resolved: private fields may explicitly
say **private**, including cost or pressure. The lab's first self-check accepts
the labelled fictional alternative as well as an actual day, and it rejects
unexplained blanks rather than requiring personal disclosure.

## Timing and activity work

All six labs now contain contiguous 50-minute run sheets and the exact cue
“Times below run from the 14:05 start; finish at 14:55.” Reduced observation
counts are accompanied by explicit role rotations, realistic capture windows
or prepared examples. No lab requires an extended booking.

The lecture pages and decks have matching activity titles and durations.
Missing prompt banks and phases are supplied, including week 2's ten
classification sentences, week 4's hold-token questions and week 5's six
repair sentences. Required private exercises have fictional or written
practice alternatives where appropriate.

Substantive additions develop the following teaching cases:

- Week 1: three opening records, including an unresolved interpretation.
- Week 2: observation, interpretation and prediction in a specific interview;
  a complete classification bank with borderline cases.
- Week 3: three utterances with confirmed, literal and unresolved readings;
  indirect speech may leave a request off the record without proving uncertainty.
- Week 4: the different claims supported by recorded calls, controlled
  stimuli and the classroom procedure.
- Week 5: two complete apologies with the same parts in different orders;
  the checklist does not require forgiveness.
- Week 6: a fictional day whose recovery window shrinks, including a case
  where neither available decline makes the plan fit. Estimates are not
  measured physiology, and an institutional change remains a proposal.

Each deck ends with one optional open question under `If time remains`, the
literal discussion marker and the 15:55 finish sentence. The lecture page
mirrors that question. Existing opening notes in this scope now use the new
teaching times. The brief week 6 pointer to week 7 is explicitly a transition;
ordinary teaching slides remain ordinary slides.

The shared estimator produced these core estimates **before break insertion**:

| Week | Core estimate (minutes) | Explicit activity minutes | Matching page/deck activities |
| --- | ---: | ---: | ---: |
| 1 | 84.1 | 26 | 3 |
| 2 | 83.1 | 27 | 3 |
| 3 | 83.1 | 31 | 4 |
| 4 | 83.1 | 27 | 3 |
| 5 | 86.1 | 30 | 3 |
| 6 | 83.2 | 27 | 3 |

These are planning-model estimates within the agreed 75–95-minute band, not
rehearsed delivery times. Root owns the fixed 14:55–15:05 break placement and
the first-half timing gate; this agent has inserted no break slides.

## Changed files

- All six `src/content/lectures/week-01.mdx` through `week-06.mdx`.
- All six `src/content/sessions/week-01.md` through `week-06.md`.
- All six `src/decks/week-01.deck.mdx` through `week-06.deck.mdx`.
- Five reading annotations under `src/content/readings/`:
  `nisbett-1977-telling-more.md`, `hinds-1999-curse-of-expertise.md`,
  `garfinkel-1964-routine-grounds.md`, `fehr-2010-forgiveness-meta.md`, and
  `hull-2017-camouflaging.md`.
- This result file.

No shared assessment, glossary, component, timing, test, research-review or
design file was edited by this agent. Historical editorial/review snapshots,
the existing patch, `PROCESS.md` and git state remain outside this scope.

## Local verification

- Parsed YAML for all 18 weekly files and all five changed reading annotations.
- Compiled all 12 assigned lecture/deck MDX bodies with the installed MDX
  compiler after removing frontmatter; all compiled successfully.
- Compared the page/deck activity headings and explicit durations; all six
  pairs match, with the counts shown above.
- Parsed every lab interval: each begins at zero, has positive contiguous
  blocks, ends at 50 minutes and contains the specified start/finish cue.
- Checked every deck's final slide for the discussion marker, heading and
  finish sentence; its question matches the lecture's final question.
- Checked the existing numbered-section destinations in weeks 1, 3, 4 and 6.
  Additions use level-three subsections where needed to preserve them.
- Ran the shared estimator against all six decks and recorded its output above.
- Read the completed shared journal, glossary and shared-content result to
  confirm the second-instance, prediction and ledger alignment.
- Ran scoped `git diff --check` over all 23 assigned source files after the
  final edits: passed with no output.

These checks establish local syntax and instruction consistency. They do not
establish Astro integration, rendered slide fit or real teaching duration.
Root still owns break insertion, full required checks and browser verification,
including the denser prompt/case slides at the requested landscape viewport.
