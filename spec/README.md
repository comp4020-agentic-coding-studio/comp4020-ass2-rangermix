# The spec

Every deliverable's spec — what the markers consider when they judge whether
your work matches what was required — is published on the course website, and
this repo's name tells you which one applies: the course API maps repo prefixes
to deliverables, and the `start` course skill walks your agent through pulling
the right one. The brief poses the problem; the spec is the fixed contract. Read
both on the site before you plan or build.

One file is supplied here:

## Course coherence (shipped, always on)

`data-integrity.test.ts` checks the one cross-page fact the content schemas and
build cannot: dated material stays inside the course period. The build already
owns compilation, accessibility, internal links, content references, API
generation and deck compilation.

## Your spec tests (yours to write)

Turning the week's published spec into tests is your work, not the template's.
Some spec lines are mechanically checkable — assert those here, in your own test
file alongside the supplied ones (any `spec/*.test.ts` runs with `pnpm check`).
Some lines only a person can judge; leave those to the crit. There is no minimum
count: select the checks that protect your work's real promises, and test the
**contracts** — what the page must do, not how you built it — so the tests
survive a change of approach, or of stack.

A green suite here is backpressure, not a mark: your tutor verifies what you
deployed against the published spec at the crit, and keeping your own tests
green is how you arrive with no surprises.

## Student instructions and logistics

These checks cover the follow-up to the assignment review:

| Spec | Promise it checks |
| --- | --- |
| `student-instructions.test.ts` | The last pre-break lab names both adjacent journal deadlines from the calendar; numbered lecture references point to their intended headings; ordinary pages have a main heading. |
| `timetable.test.ts` | Every teaching date and deadline appears, times and rooms are stated, and the timetable is reachable from every ordinary page. |
| `lecture-timing.test.ts` | Imports do not swallow title slides; the rough model counts five-second transitions, two-minute ordinary slides and explicit activities without note inflation; displaced breaks fail the 45–55-minute placement check; both output modes use the same planning rules. |
| `teaching-schedule.test.ts` | Each lab has a contiguous 50-minute run sheet with its clock times; every deck passes the rough core/break-placement checks, displays the fixed break and ends in an optional discussion question with the 15:55 stop. |
| `submission.test.ts` | The timetable and all assessment briefs link to a built submission guide; it states that uploads are unavailable, links every task and the help policies, and does not offer a nonfunctional upload form. |
| `portrait-decks.test.ts` | Every deck links back to its lecture, and comics keep their readable text transcripts in the deck. |

Run `pnpm check` to build the current content before testing it. Running
Vitest alone reads the last build, which may predate an edit.

The timing estimate is a planning check for a fictional course, not evidence
of classroom delivery. The user-approved schedule requires no rehearsal.
Exercise validity, privacy and whether a worked example demonstrates its
rubric still require a content review; passing string or structure checks
does not settle those questions.

Deck changes also require browser checks at 390×844 and 1920×1080: readable
portrait text, contained table overflow, working transcript disclosures,
keyboard navigation, and preservation of the current slide across rotation.
The build's structural checks alone cannot prove these interactions.
