# Shared copy and glossary review

Read all 27 assigned files in full. The review covers the course catalogue,
learning outcomes, glossary, interface labels, image descriptions, diagram
annotations and accessible diagram text. Implementation and source comments
were read for context and left unchanged.

Only `src/data/terms.ts` has proposed changes: nine definition strings. The
other 26 files have explicit retained review records. No live source file was
changed, and the earlier weeks 10–12 report remains unchanged.

## Coverage

| Files | Decision |
| --- | --- |
| `src/components/AssessmentsGrid.astro`, `Citation.astro`, `LecturesGrid.astro`, `MarkingModel.astro`, `PeopleGrid.astro`, `Plate.astro`, `SessionsGrid.astro`, `TeachingTeam.astro`, `WeekReadings.astro` | Retain the functional labels and data-driven text. Descriptions, captions and alt text passed into them are reviewed at their authored call sites. |
| `src/components/sketch/Chain.astro`, `DepthLadder.astro`, `Envelope.astro`, `Form.astro`, `MarginNote.astro`, `Register.astro`, `SequenceDiagram.astro`, `StateMachine.astro`, `TimingLine.astro` | Retain the short visible and accessible diagram labels. They explain the depicted method, relationship or interaction directly. |
| `src/course-config.ts` | Retain the catalogue's maintainer joke and concrete learning outcomes. |
| `src/data/terms.ts` | Nine proposed definition edits; all 49 term names and introduction weeks preserved. |
| `src/data/timetable.ts` | Retain the factual room, meeting, holiday and time labels. |
| `src/site-config.ts` | Retain branding, navigation labels, licence and social-image alt text. |
| `src/content.config.ts` | Retain schema and author-facing validation messages; no authored student prose. |
| `src/layouts/PageLayout.astro`, `src/lib/dates.ts`, `src/lib/sketch.ts`, `src/lib/submissions.ts` | Retain code-only files; no authored student prose. |

## Glossary decisions

The glossary needs precise contrasts, so contrasts were not removed merely
because they recur in the lectures. The definitions of implementation, token,
field note, depth scale, interoperation and rapport signals remain. The
course's engineering language also remains; there is no attempt to replace
it with generic institutional definitions.

The nine proposals are:

1. **Handshake:** describe the corridor example directly rather than calling
   it the flagship or making it define every greeting.
2. **Background expectancies:** retain Garfinkel's breach method without
   claiming that expectations become visible *only* when breached or that no
   fluent speaker can state them.
3. **Hold token:** align with the edited week 4 lecture. A standing token
   explains pauses in advance; it does not guarantee that one utterance resets
   the timeout for a whole relationship. The recommendation remains explicitly
   untested.
4. **Overload:** align with week 7's short-term planning map, without a promised
   recovery time.
5. **Shutdown:** retain the working description and identify it as a planning
   label, rather than predict recovery within a day.
6. **Register:** retain the email finding with its 2009 US setting, already
   stated in the lecture and reading record.
7. **Anticipated stigma:** identify it as one of four predictors in the cited
   study, rather than the sole explanation of distress.
8. **Partial disclosure:** state what the speaker sends without guaranteeing
   that the listener infers nothing else. Preserve the week 10 and E-4
   qualification that this is the course's untested synthesis.
9. **The timing trap:** preserve the observation and early-disclosure option
   without treating the listener's reaction as inevitable or promising low
   stakes for every person.

The relevant definitions were compared with current weekly drafts for weeks
2, 4, 7, 8, 9 and 10 and the proposed Quinn, Stephens and Laurenceau reading
annotations. This is an alignment check against the repository's evidence
record, not a fresh verification of those papers.

## Why the other wording stays

The component labels already do useful work without explanation of their own
importance: “How it is marked”, “Teaching team”, “opens to”, “scrolls
sideways”, “expected, not said aloud”. The diagrams' accessible lists state
the same relationships shown visually. The envelope's “never posted — stays
yours” identifies an unsent item; it does not add the claim that a listener
cannot infer a diagnosis, which was removed from the week 10 caption.

The catalogue's specification/changelog/maintainer list is an actual joke
about missing documentation. The learning outcomes' parallel form separates
documenting, choosing to run, choosing to decline and negotiating. Neither
needs variety for its own sake.

## Remaining scope questions

The `timeout` definition compresses a finding about telephone calls into
“by 700 ms a no is more likely than a yes, and listeners have learned it.” The
edited lecture distinguishes that observed pattern from what a particular
pause means. If the glossary must stand entirely on its own, it could carry
the setting and that limit too. No new timing claim was introduced here.

The `autistic burnout` definition is a compact research summary, including
its distinction from depression and work burnout. It was retained, not
reinterpreted as clinical guidance or independently verified. The overload
and shutdown edits remove the separate unverified recovery deadlines; they
do not supply replacement clinical advice.

## Verification

All 27 records were checked against fresh source and draft hashes. Replaying
every recorded replacement reconstructs the corresponding draft exactly.
Twenty-six drafts are byte-for-byte copies of their source. The only changes
in `terms.ts` are its nine definition strings: all 49 term names, week values,
ordering, comments and implementation remain unchanged.

The primary reviewer owns integrated build validation and commits.
