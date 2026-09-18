# Weeks 10–12 editorial review

Reviewed the full lecture, lab, deck and speaker notes for each assigned week,
including descriptions, specifications, captions, labels and alt text. Read
`CLAUDE.md`, `docs/course-design.md`, the package policy and the three weekly
research reviews; checked the Garfinkel claim against week 2's review as well.
This was an editorial review of the existing evidence record, not a new
verification of the papers.

All proposals are confined to the mirrored draft and their per-file review
records. No live source file was changed.

## Coverage

| File | Recorded proposals |
| --- | ---: |
| `src/content/lectures/week-10.mdx` | 20 |
| `src/content/sessions/week-10.md` | 2 |
| `src/decks/week-10.deck.mdx` | 20 |
| `src/content/lectures/week-11.mdx` | 23 |
| `src/content/sessions/week-11.md` | 1 |
| `src/decks/week-11.deck.mdx` | 15 |
| `src/content/lectures/week-12.mdx` | 23 |
| `src/content/sessions/week-12.md` | 2 |
| `src/decks/week-12.deck.mdx` | 25 |

There are 131 exact passage replacements or deletions. This count includes
short presenter-note edits and corresponding changes in multiple registers;
it is not a count of independent problems.

## Main choices

- **Week 10:** remove the course praising its own care; keep the audience
  table, scripts and decision-making work. A request for written instructions
  now *asks* for an adjustment instead of guaranteeing one. Early disclosure
  remains an option without the claim that it costs almost nothing for
  everyone. The introduction describes the sources' scope rather than
  promising that untested mechanics work for every identity listed.
- **Week 11:** remove repeated claims that a result or exercise is the whole
  week, the strongest argument, or a demonstration already completed by the
  classroom. The class's shared-vocabulary proposal is explicitly something
  the partnership labs let students try. The report can say what held and
  what failed. Preserve the figures, study results and bilateral example.
- **Week 12:** retain the open-issues and errata device, while cutting repeated
  certifications of the course's honesty and explanations of why its structure
  is admirable. The staged self-correction introducing Moskowitz now asks the
  methodological question directly. Reading-limit instructions use the
  table's meaning rather than its incorrectly numbered column. The route
  exercise's prose now agrees with its unchanged nine-minute timing.
- **Labs:** intervene lightly. The run sheets are already concrete. Remove
  invented predictions about students' reports and route choices, and stop
  assuming that every student has eleven journal entries before the last
  submission is due.
- **Speaker notes:** replace predictions about what the room will think or
  discover with observable teaching actions. Keep instructions about privacy,
  timing, fictional disclosures, scope limits and deliberate pauses.

## Important retained material

- The complete week 10 register break and “Right. Mechanics.” remain verbatim
  in the lecture and in the deck's spoken text. The shift still drops the
  protocol metaphor; it has not been softened.
- Week 10's five audiences, need-without-label examples, receiving procedure,
  character-card rule and opt-out remain. Corrigan's population distinction
  and the abstract-only evidence limit remain explicit.
- Week 11's packet-loss margin note, rapport example, fictional Alex/Sam
  protocol, mismatch word, asymmetric concessions and revisability remain.
  Sample sizes, correlation coefficients, quotations and the correlation
  qualification are unchanged.
- Week 12's security-note joke, open issue numbers, five errata, criticism of
  forcing people to pass, final undocumented-protocol comparison and lab's
  deadpan ethics reminder remain.
- All section headings, deck order, activities, timings, assessment
  requirements, dates, marks, names, references and shared terminology remain.

The draft was checked against the primary reviewer's current reading
annotations for Alkhaldi, Morrison, Corrigan and Moskowitz. The numerical
results, quoted qualifications, population distinctions and methodological
objection agree. The unresolved interpretations below are broader than the
editorial wording changes and should not be mistaken for verified findings.

## Questions left visible for substantive review

1. **Anticipated stigma and causal effects of a department.** The week 10
   lecture still says an environment produces the belief and that ordinary
   adjustments lower the cost for students who never disclose. The recorded
   Quinn and Chaudoir check supports predictors and associations, not an
   intervention on a department. The deck carries the same causal inference.
   The course could label this explicitly as its proposal, or verify the
   stronger causal claim. This review shortened surrounding commentary but
   did not silently resolve the evidence question.
2. **“Independent of diagnosis.”** Week 11's lecture still expands the
   correlation into “the unfavourable judgement was not attached to a category
   of person” and a hard-to-read neurotypical target receiving the same
   treatment. An association independent of diagnosis need not establish that
   diagnosis has no separate association with ratings. The same section says
   neurotypical targets were rated more favourably. Check the full analysis
   before retaining that interpretation. The recorded result and caveat are
   preserved; the deck now asks the presenter to explain the statistical term.
3. **Week 12's eye-contact rule and noticeability test.** Existing text treats
   no eye contact as outside ordinary behaviour and treats noticing an
   experiment as proof that its parameter is outside that range. Those are
   substantive ethics rules, so they were retained under the brief's
   requirement-preservation constraint. They deserve review in a course that
   rejects making one implementation the universal standard. An unusual
   interaction is not automatically a harmful one, and a noticeable change
   need not be outside ordinary behaviour.
4. **Clause count.** Week 11's lecture and notes say “Five is Thursday's job”;
   the lab's specification requires at least four clauses. No requirement was
   changed in this editorial pass. Reconcile the expectation before adoption.
5. **ARPANET caption.** The lecture and deck say every box is a different make
   of machine. That is stronger than the alt text's claim that the map includes
   many makes. Check the image and historical claim; the technical analogy and
   provenance were left intact rather than fact-corrected without inspection.
6. **Repeated week 12 closing slides.** The deck contains both a four-part
   table and a four-part list, and two impact slides beginning “The outcome
   was never that you become indistinguishable from anyone.” Slide structure
   was preserved as requested in the brief. A later structural pass could
   consolidate these instead of merely varying their words. The false
   presenter instruction that the first close was the last thing the room
   would hear was replaced with a pause before the capstone exercise.

One unsupported source detail was removed rather than replaced: week 12's
claim that Garfinkel was studying strangers he would never meet again. The
week 2 review only records the background-expectancy and breach mechanism;
it does not verify that participant description. The draft retains the
mechanism and this course's ordinary-behaviour boundary, without inventing a
different account of the study.

## Verification

For all nine assigned files, a fresh check confirmed:

- live source hashes still equal their recorded originals;
- draft hashes match their review records;
- replaying every exact recorded replacement reconstructs the entire draft;
- heading text and order, notes fences, and frontmatter other than the
  reviewed descriptions are unchanged;
- wording inside attributed quotation spans is unchanged (whitespace
  normalised for line wrapping);
- the week 10 protected passage and snap-back are unchanged, including in the
  deck after excluding presenter notes.

No build or test result is claimed here. The primary reviewer will validate
the integrated draft in isolation and manage the verified commits.
