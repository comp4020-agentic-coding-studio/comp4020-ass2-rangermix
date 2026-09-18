# Applied-source audit: weeks 1–6

Reviewed live source at `53a4403`. This is a read-only content and method audit;
no student source, editorial snapshot or git state was changed. Research
comparisons use the existing checked-source records, not a fresh verification
of every paper. Prior findings were treated as leads and checked against the
applied version.

## Confirmed instruction and example mismatches

### W1–6-C1 — The journal's example does not demonstrate its required second instance

**P2.** `src/content/assessments/field-journal.md:26` allocates 25% to “a real
second instance”; `:31` requires all four parts. The worked example at
`:61–74` observes one delayed yes and later asks the same person about that
availability. Its test (`:68–70`) contains no second delayed reply. It checks
what the first episode meant rather than testing the inferred rule on another
instance. The revised conclusion correctly declines to infer a cause, but
that does not supply the missing instance. Students following this complete
example could miss the separately marked requirement. Add a second observed
delayed-yes episode and report whether the proposed rule held; keep the first
follow-up as useful clarification rather than presenting it as the whole test.

### W1–6-C2 — Only one member of the week 3 group can meet the bare-payload spec

**P2.** `src/content/sessions/week-03.md:11` requires each student to have said
one payload bare. The relay rotates all three roles (`:27`), but the bare
round selects one best-scoring card and has “the wrapper” say it (`:28`).
Everyone writes a response; only one of the three is instructed to speak.
Explicitly rotate the bare-speaking role, giving each student a card/turn,
within the existing twelve-minute block.

### W1–6-C3 — Week 4's lab cannot test the 700 ms rejection/acceptance claim

**P2.** `src/content/sessions/week-04.md:11` asks whether the results agree with
the lecture's 700 ms claim; `:33–36` points specifically to Kendrick and
Torreira's recorded calls. That claim is that rejections outnumbered
acceptances after long gaps (`src/content/lectures/week-04.mdx:101–105`).
Every responder in the lab is required to say yes, and the measured outcome
is an asker's willingness rating (`sessions/week-04.md:25–29`). With no
rejection outcome, the data cannot reproduce or contradict the cited ratio.
The lecture already distinguishes this from the Roberts et al. manipulation
of silence and perceived willingness (`lectures/week-04.mdx:128–147`). Align
the lab spec, debrief and limitations with that perception question. A claim
about the 700 ms threshold would require a different data collection design.

### W1–6-C4 — The gap debrief asks for estimates the activity never records

**P2.** `src/content/lectures/week-04.mdx:171–179` tells the third student to
time the gap and write what it “read as”, then asks whether they ranked gaps
better than they estimated milliseconds. The deck repeats this at
`src/decks/week-04.deck.mdx:245–255`. A semantic interpretation is not a
numerical duration estimate, and no prior ranking is collected. Add an
estimated-duration field and an explicit ranking step before revealing the
measurements, or change the debrief to compare perceived meaning with actual
delay. Keep both copies consistent.

### W1–6-C5 — The private cost comparison omits the thing being compared

**P2.** `src/content/lectures/week-06.mdx:156–165` has each person privately
select their own subroutine, share only its cost and pressure word, and say
whether they would have guessed the same price for their partner. The deck
repeats the instructions at `src/decks/week-06.deck.mdx:195–200`. Participants
cannot estimate another person's price for an undisclosed activity/context;
they may also be comparing entirely different activities. Use one agreed,
neutral subroutine/context before the private estimates, as the lab's common
cards already do (`src/content/sessions/week-06.md:33–34`). That preserves
the intended privacy without withholding the comparison's subject.

### W1–6-C6 — The ledger has competing formats, and its example fails the pressure rule

**P2.** `src/content/lectures/week-06.mdx:157–159` says four columns; the ledger
at `:173–180` has five, including context. The glossary includes context
(`src/data/terms.ts:140–143`), while the deck's model omits it
(`src/decks/week-06.deck.mdx:262–269`). The lab asks for the lecture format
(`src/content/sessions/week-06.md:32`). In addition, its spec requires a
pressure entry on every row (`:9`), but the switching-charge example has
`---` instead of one of the stated chosen/expected/enforced values in both
lecture and deck. Publish one full format, mark any slide abbreviation as
such, and either give the switching row a pressure value or explicitly allow
and explain a not-applicable entry for it.

### W1–6-C7 — Corrected field-note examples still model names rather than roles

**P3.** The “Protocol note” columns retain Sam and Jess in
`src/content/lectures/week-02.mdx:277–278` and
`src/decks/week-02.deck.mdx:292,332`. Policies say no names in submissions
(`src/pages/policies/index.mdx:94–95`); the journal specifies roles instead
(`src/content/assessments/field-journal.md:53–54`). The issue is what these
fictional examples model, not evidence of a real privacy disclosure. Replace
the names in the corrected examples with roles or anonymous participant
labels, so a student copying their form meets both the observation and privacy
rules.

### W1–6-C8 — A directness announcement is called a hold token

**P2.** `src/decks/week-03.deck.mdx:389–392` calls “I'm going to be literal,
because I'd rather not get this wrong” the week 4 hold token. The glossary
defines a hold token as filling a delay to mean “still here, thinking”, or
explaining one's pauses in advance (`src/data/terms.ts:110–113`). This script
announces how to interpret the next reply; it does not request thinking time
or explain latency. Keep the analogy at the level of stating a convention
explicitly, without teaching it as an instance of this defined term.

## Methodological and teaching concerns

### W1–6-M1 — Week 6 requires a decline even after teaching students to choose either option

**P2.** The lecture promises the course will not tell students to stop masking
(`src/content/lectures/week-06.mdx:49–51`) and acknowledges cases where not
running a subroutine would cost more than someone can afford (`:124–128`).
The deck's cost-comparison activity explicitly permits either decision
(`src/decks/week-06.deck.mdx:329–338`). Yet the lecture spec requires a decline
(`lectures/week-06.mdx:12`), and the lab requires choosing and trying one
before Tuesday (`src/content/sessions/week-06.md:11,36,46`). This makes one
outcome compulsory regardless of the student's comparison. Allow “keep
running it” or “no affordable decline this week”, with the reasons and a
hypothetical comparison recorded. If a real decline remains a requirement,
the course needs a compatible alternative rather than promising an open
choice and then removing it.

### W1–6-M2 — Some self-checks require the world to produce a particular result

**P2.** Week 1 demands ten real openings and a pooled example that branched
(`src/content/sessions/week-01.md:9–10`) after a fixed 25-minute capture
(`:31`), including from the seat-by-the-door alternative (`:22–24`). Week 3's
takeaway requires an envelope “that lost” a payload
(`src/content/sessions/week-03.md:44–45`), even if all trials were intact.
Week 6 requires five real masked subroutines and at least one real switch
(`src/content/lectures/week-06.mdx:10–11`; the lab requires yesterday at
`sessions/week-06.md:9,32`). These observations are not guaranteed by diligent
participation. Give honest empty/low-count/no-loss/no-switch outcomes a
specified completion path, with tutor-provided examples clearly labelled
separately if further practice is needed. This is a method concern, not a
claim that the desired events never occur.

### W1–6-M3 — The interviewing table calls a counterfactual an observation

**P2.** `src/content/lectures/week-02.mdx:97–105` labels the right column “Gets
you an observation”, including “what would have happened if you'd said
'terrible'?” The deck repeats it at `src/decks/week-02.deck.mdx:99–106`, and
the Nisbett annotation recommends it in
`src/content/readings/nisbett-1977-telling-more.md:20`. The answer is a
prediction about something that did not happen, even though the prompt starts
from a salient event. The adjacent instruction to check either answer against
actual exchanges is good, but the column label still promotes prediction into
observation. Label the columns general/specific-instance questions, explicitly
tag the counterfactual answer as a hypothesis, or substitute a question about
observed words/actions. The existing checked record supports conditional
accuracy of reports, not the claim that this question automatically returns
an observation.

### W1–6-M4 — The repair drill cannot test all rows of the proposed turn-count table

**P2.** `src/decks/week-05.deck.mdx:189–199` prohibits an open “what?” and
requires a spoken specific initiator. The table at `:218–225` nevertheless
asks students to test counts for open repair and a silent wait as well as
specific initiators. Those conditions are excluded by the prescribed drill.
The counting unit also needs a definition: the restricted offer “This
Thursday?” followed by “yes” has two spoken turns, while its row allows one;
the instructions do not say which turns are included. Keep the constrained
drill for practising specificity, then add optional comparison conditions if
testing the whole table is intended. Define whether the initiator, repair and
acceptance each count, and avoid inferring a cost ranking from counts the
exercise cannot collect.

### W1–6-M5 — The stopwatch lab needs an explicit timer role and procedure

**P2.** `src/content/sessions/week-04.md:19,25–26` supplies only a stopwatch,
forms pairs, then relies on “a third person (or the responder's phone, face
down)” to record actual delay. No third role is assigned, and a face-down
stopwatch does not operate itself. Students need to know who starts/stops it,
which speech boundaries count, and how both members complete the required
twelve asker ratings. Specify a rotating third timer, or a feasible two-person
manual procedure and its limitations. Do not silently solve this with audio
recording, which the policy prohibits (`src/pages/policies/index.mdx:96–97`).

## Claim scope and verification

### W1–6-R1 — The particular Hinds debiasing intervention is not established by the recorded check

**P3, unverified detail, not a finding that the paper contradicts the course.**
`src/content/lectures/week-02.mdx:122`,
`src/decks/week-02.deck.mdx:135`, and
`src/content/readings/hinds-1999-curse-of-expertise.md:3,15–17` say warning or
telling an expert about the bias failed. The abstract-only source record
(`docs/research/week-02.md:16`) says participants resisted debiasing
techniques, without identifying the techniques as such a warning. Either
retain that checked formulation or inspect the relevant method/results before
claiming this particular intervention was tested. The bounded technical-task
scope of the revised teaching suggestion is already appropriate.

### W1–6-R2 — The recovery-time limitation has not reached the week 6 spec and slide heading

**P3, residual framing concern.** The body carefully distinguishes time spent
camouflaging from time recovering and says the study gives no conversion
(`src/content/lectures/week-06.mdx:100–103`; also the Bradley annotation at
`src/content/readings/bradley-2021-camouflaging-experiences.md:20`). The
lecture spec still asks why the ledger is denominated in the research's unit
(`lectures/week-06.mdx:14`), and the relevant deck slide is still headed “But
the unit isn't arbitrary” (`src/decks/week-06.deck.mdx:135–146`). Those cues
continue to invite the validation inference that the new body disclaims.
Ask students to distinguish the two quantities in the spec, and title the
slide around time spent camouflaging; keep recovery hours explicitly a
planning choice. No new empirical claim is needed for that correction.

## Smaller cross-reference repairs

**P3.** Three references still point readers to the wrong thing:

- `src/decks/week-01.deck.mdx:245` calls payload/envelope “next week's
  vocabulary”, but the glossary introduces them in week 3
  (`src/data/terms.ts:76–84`). Say week 3.
- `src/decks/week-06.deck.mdx:32` labels weeks 1–5 the reading phase. The
  course structure is Read 1–4 / Implement 5–7
  (`src/content/lectures/week-01.mdx:282–285`). Say weeks 1–5 “covered” those
  topics, or keep the published phase boundary.
- `src/content/lectures/week-02.mdx:107–108` and
  `src/decks/week-02.deck.mdx:105` promise an entire week 11 lab built on the
  interview technique. The actual run sheet is clause revision, independent
  accounts and a vocabulary audit (`src/content/sessions/week-11.md:25–29`),
  with no such interview activity. Make the later application specific or
  remove the whole-lab promise.

## Activity inventory and the two-hour claim

These are sums of explicitly timed activities, not estimates of total teaching
time. They do not establish a two-hour delivery. The separate timing audit
owns the full duration estimate and the existing timing-check limitations.

| Week | Lecture page: explicit activity minutes | Deck: explicit activity minutes | Locations |
| --- | ---: | ---: | --- |
| 1 | 14 | 14 | lecture `:133,247`; deck `:201,382` |
| 2 | 24 | 24 | lecture `:136,283,291`; deck `:111,359,372` |
| 3 | 21 | 21 | lecture `:155,254,280`; deck `:192,305,410` |
| 4 | 7 | 15 | lecture `:169`; deck `:241,360` |
| 5 | 0 | 18 | no timed activity on lecture page; deck `:189,382` |
| 6 | 8 | 15 | lecture `:152`; deck `:191,329` |

The paths are `src/content/lectures/week-NN.mdx` and
`src/decks/week-NN.deck.mdx`. Weeks 4–6 include additional deck activities;
their minutes must not be counted twice as lecture and slide content. A
claim that the lecture page itself contains all the activity instructions
would also need those omissions addressed. The deck's two-hour opening cues
(for example week 4 `:20`, week 5 `:17`) are promises, not duration evidence.
All six lab run sheets divide the full 60 minutes; the findings above concern
what those minutes can actually produce.

## Files reviewed

- All six live `src/content/lectures/week-01.mdx` through `week-06.mdx`.
- All six live `src/content/sessions/week-01.md` through `week-06.md`.
- All six live `src/decks/week-01.deck.mdx` through `week-06.deck.mdx`, including
  all speaker notes.
- All 35 distinct reading annotations referenced by those six lecture pages
  under `src/content/readings/`: the four week 1 readings, seven week 2
  readings, five week 3 readings, six week 4 readings, seven week 5 readings
  (Kendrick repair timing shared with week 4), and seven week 6 readings.
- `src/data/terms.ts`, `src/pages/policies/index.mdx`, all four
  `src/content/assessments/*.md` briefs, and the week 11 lab for the specific
  forward-reference check.
- `CLAUDE.md`, `docs/course-design.md`, and all six `docs/research/week-01.md`
  through `week-06.md`. Stale authoring-record interpretation is reported
  separately by the root reviewer rather than duplicated here.

No build or test run is claimed by this report. The root reviewer owns the
application verification and full check suite. These semantic relationships
need human review even when schema and structural checks pass.
