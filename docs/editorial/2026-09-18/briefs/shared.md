# Weekly editorial review brief

Read `CLAUDE.md`, `docs/course-design.md`, and this package's `POLICY.md`.
The user requests ALL course text reviewed, an editorial draft, and a side-by-side
comparison. Do not edit any live `src/` file. Preserve honest and satirical tone.

Your assigned weeks are independent editorial units. Read the ENTIRE lecture,
lab, deck and speaker notes for each, including frontmatter descriptions/specs,
figure captions, labels and alt text. Do not rely on phrase searches alone.
Edit the lecture first, then align its lab and deck. Keep short slides short.
Read any relevant research notes to resolve what a statement means; do not
invent findings or claim to have verified a source you have not read.

Use `tools/review_helpers.py` to record each file exactly once, even if retained:

```python
import sys
sys.path.insert(0, '/Volumes/External/Users/rangermix/workspaces/comp4020-ass2-rangermix/docs/editorial/2026-09-18/tools')
from review_helpers import review
review('src/content/lectures/week-NN.mdx', 'Short explanation of the editorial decision.', [
    ('exact unique ORIGINAL passage', 'proposed replacement', 'specific reason'),
])
```

Each replacement must match one unique original passage, with no overlapping
edits. Replace paragraphs where possible so the comparison is readable. Each
edit needs a substantive reason; do not use stock 'reduce AI slop' explanations.
The helper writes ONLY the mirrored draft and the file's own review JSON.
Do NOT edit manifest.json, other reviewers' files, tests, or source files.
Do NOT run git commit/push; the primary agent integrates verified checkpoints.

Keep all dates, marks, timings, requirements, names, bibliographic facts,
attributed research quotations, section headings and numbered-reference
structure. Preserve the settled week 10 register break VERBATIM, including
'Right. Mechanics.', also where quoted in the deck. Preserve terminology.
Editorial claims such as 'most pairs find...' without evidence should become
an open instruction, or be cut. Do not silently change a research result.

Be selective. Do not replace the course's vivid writing with polite generic
university prose. Keep actual jokes and useful contrasts; cut the explanation
of the joke, repeated declarations of significance and invented classroom
predictions. The completed week 1 review JSON illustrates the intended scale.
There is no reduction target, and retained text is a valid decision.

When finished, write a report under `reports/` with files covered, main choices,
important retained passages, and any unresolved factual/editorial questions.
Verify your source files are unchanged and every draft edit is recorded.
Return only the report path and a concise status to the primary agent.

Clarification: numbered lecture headings remain fixed because section
references address them. An unnumbered slide heading may be softened if the
heading itself makes an unsupported universal claim. Record the edit and
preserve slide order, count and teaching activity.
