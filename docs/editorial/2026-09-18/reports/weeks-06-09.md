# Editorial review: weeks 6–9

All twelve assigned files were read in full, including frontmatter, self-checks,
slide text, speaker notes, diagrams, captions and alt text. The four research
reviews were read as context. This pass did not independently re-read the
underlying papers.

| Week | Lecture | Lab | Deck and notes |
| --- | ---: | ---: | ---: |
| 6 | 10 edits | 1 edit | 21 edits |
| 7 | 12 edits | retained | 26 edits |
| 8 | 16 edits | 2 edits | 24 edits |
| 9 | 18 edits | 1 edit | 24 edits |

The 155 recorded proposals remove 1,187 whitespace-delimited words from the
19,678-word source set. This count includes markup and was not an editing target.
Much of the work is in speaker notes: those repeatedly predicted the classroom's
reaction or instructed the lecturer to announce how significant the course's
own design was.

## Main decisions

- **Week 6:** retain the Tuesday, ledger and pressure column. Replace the
  invented factor-of-two result from the paired exercise with an open question.
  Distinguish time spent camouflaging from time needed to recover: the Bradley
  quotation remains intact, while recovery hours remain a course planning
  device. Remove claims that the course guessed correctly and then found a
  citation to prove it.
- **Week 7:** retain the practical runbook, saved messages, quiet lab and direct
  support information. The lab itself needs no edits. Remove the prediction
  that most people's early signs will be invisible. Present the three time
  scales as a planning model, not guaranteed recovery deadlines. Correct the
  misleading suggestion that the course's three terms are three of the four
  BIMS terms; overload is not one of BIMS. The Apollo caption no longer invents
  how tired the procedure writers were or when they wrote the documents.
- **Week 8:** keep the institutional satire and all specimens, clause tables,
  dates and limits. Research challenges two kinds of estimate; it cannot tell
  each reader that their estimate is wrong. Remove invented predictions about
  inboxes, how often particular clauses fail, and which fear really stops a
  student. The final lecture self-check still asks about both estimates, but
  no longer requires the student to declare a personal concern mistaken. The
  lab's journal prompt now also works when the student's email passed.
- **Week 9:** retain the café queue, depth ladder, turn-taking exercises,
  follow-up questions and hold token. Remove an invented friendship threshold
  and the assumption that three conversations lasted three hours. The Sprecher
  result prompts attention to both sides of an exchange; it does not validate
  the five levels or the ±1 rule. Emotional disclosure may itself be private,
  so the draft no longer calls it privacy-free. Keep the published correction,
  objection and reply, including the final erratum joke.

## Voice deliberately retained

- “A budget where the prices are set by someone else is still a budget. It
  helps to write down who set them.”
- “Emotional labour: ordinary enough to be a job description.”
- The week 7 lab's empty first day, permission to work elsewhere, and partial
  runbook fallback.
- Slop University's extensive policy library and missing instructions for
  asking a question.
- “The protocol has a routing table and nobody published it either.”
- The switch question “wearing a follow-up's clothes”, and “Nobody has ever
  issued an erratum for ‘how are you’.”
- The hold token for depth and the course's permission to decline escalation.

## Scope notes for integration

The primary agent approved a narrow exception to the heading constraint:
unnumbered slide headings that themselves asserted an unsupported universal
were softened. Every lecture `##` heading remains exactly as it was; slide
order and count remain unchanged.

The original research working notes still contain the recovery-hours validation
claim, the equation of the two Sprecher/Collins findings, and the interpretation
of role switching as evidence for the ±1 rule. Those notes are contextual
documents outside this assigned student-text scope. If the editorial draft is
adopted later, the research notes should record these more careful distinctions
so a subsequent author does not restore the old wording.

The course's one-request-per-email rule and the lab's required blank first day
remain settled course choices, not claims validated in this pass. The extension
specimen still offers a health reason even though course policy requires no
reason; it is an example, not an added disclosure requirement. The 43-word body
count was checked and is correct.

## Verification

- All twelve live source hashes still equal their manifest baseline; `git
  diff` reports no change to the assigned source files.
- Replaying each file's recorded replacements reconstructs its draft exactly.
- Draft hashes match the review records.
- All lecture `##` headings are unchanged.
- Slide separators, code fences and speaker-note block counts are unchanged.
- External URLs and date, week and slide-path fields are unchanged.
- No live source files, tests, manifest, other reviewers' files or git history
  were changed. The primary agent will run the integrated isolated build.

Drafts and records follow the source paths under this package's `draft/` and
`reviews/` directories.
