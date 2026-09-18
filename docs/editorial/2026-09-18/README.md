# Course editorial draft — 18 September 2026

**Applied after approval on 18 September 2026**, in commit `53a4403`. This
package preserves the before-and-after snapshot; later changes to the course
are separate. The original is commit
`2209428d55d3c47ce405dd81b67ab3d0b991a8ac`.

Open [the side-by-side comparison](comparison.html) in a browser. It contains
both versions and works offline. Search for a passage or choose a category;
review the changed passages with their reasons, or switch to complete files.
Retained files are included too. Markdown, MDX and speaker notes are displayed
as text so the comparison shows the exact proposed wording.

The complete proposed files are under [draft/src](draft/src), with the same
paths as the course. The reviewed revision was copied to `src/` after approval. See
[application.json](application.json) and the [subsequent review](../../reviews/2026-09-18-applied/README.md).

## Editorial judgement

The course's distinctive voice is worth keeping: undocumented conventions as
a badly maintained protocol, practical scripts delivered without ceremony,
and satire aimed at the systems that leave people guessing. The extra
explanations weaken it. The most useful cuts remove the narrator repeatedly
announcing that a point is important, deliberate, honest or the whole lesson.
Other changes let classroom exercises discover something instead of predicting
what most students will feel or get wrong.

Research claims receive the same treatment: state the finding, preserve its
limits, and identify an application as a course proposal where appropriate.
This is an editorial judgement, not a finding about who or what wrote a passage.

The [policy](POLICY.md) explains what was kept and changed. The
[integration report](reports/integration.md) records evidence-boundary
corrections and the few substantive decisions left open. In particular, the
week 12 eye-contact and noticeability rules are flagged, not silently rewritten.

## Coverage

All **157 source text files** were reviewed. **79** contain proposals and **78**
are retained byte for byte. The **594 recorded edits** include small deletions
and corresponding changes in lecture, deck and notes; they are not a count of
independent faults.

| Area | Files reviewed | Files edited |
| --- | ---: | ---: |
| Lectures, including self-checks | 12 | 12 |
| Labs | 12 | 11 |
| Slides and speaker notes | 12 | 12 |
| Reading annotations and verification notes | 71 | 31 |
| Assessment briefs | 4 | 4 |
| Fictional staff profiles | 3 | 0 |
| Site pages | 16 | 8 |
| Components, diagrams and accessible labels | 18 | 0 |
| Metadata, glossary and shared support files | 9 | 1 |

All 49 glossary term names are retained. Image captions and alt text are
reviewed at their authored call sites. The social card and generated CSS
punctuation were also checked. Implementation, source-code comments, tests,
research working papers and process documentation are outside the prose-edit
scope. `PROCESS.md` and the user's existing patch file remain untouched.

The governing sentence, the no-diagnosis clause and the week 10 register break
remain. Dates, weights, marking criteria, submission requirements, attributed
quotations and bibliographic metadata remain. Slide counts, activity timings
and numbered lecture sections remain. A few learning self-checks are qualified
to match the corrected distinction between a finding and a proposal; the
comparison records those changes explicitly.

## Files and reproducibility

- [comparison.html](comparison.html): standalone interactive comparison.
- [draft/src](draft/src): complete proposed source files, including retained ones.
- [manifest.json](manifest.json): inventory, baseline hashes, review decisions
  and exact passage edits with original line numbers and reasons.
- [reviews](reviews): one review record per source file.
- [reports](reports): coverage notes and integration decisions.

From the repository root:

```sh
python3 docs/editorial/2026-09-18/tools/check.py --complete --archive
python3 docs/editorial/2026-09-18/tools/build_comparison.py --archive
```

In archive mode the checker verifies complete coverage, Git-baseline hashes, exact
reconstruction of every draft from its recorded edits, protected metadata and
quotations, the week 10 register break and slide structure. The comparison
embeds the original text from the baseline and the complete proposed text;
it does not need the site, a server or external libraries.

## Validation before application

- **Exact-source check:** all 157 files accounted for; live sources unchanged;
  every draft reconstructs from its recorded replacements; protected passages,
  metadata, quotations and slide structure pass.
- **Original course:** `pnpm check` passes, including all 425 tests.
- **Proposed course:** overlaid on a separate checkout of the baseline, with
  its own dependencies installed from the frozen lockfile. `pnpm check`
  passes: 425 tests, 125 built pages, no reported accessibility violations,
  broken links or deck-structure violations. No specifications were edited.
- **Timing estimate:** `pnpm check:timing` reports no week more than ten minutes
  below its 105-minute content target. This is the repository's estimate, not
  a rehearsal of delivery.
- **Comparison viewer:** tested offline in Chrome at 1440×1080, 390×844 and
  844×390. Search, category/status filters, previous/next navigation, both
  comparison modes and keyboard access work. No horizontal page overflow,
  console errors or external requests were observed. Source markup remains
  inert text. Desktop and phone screenshots were visually inspected.

The draft build used `pnpm install --frozen-lockfile`, then `pnpm check` and
`pnpm check:timing`, in a temporary clone with only this package's `draft/src`
overlaid on `src`. The final run used separate dependencies after a shared
`node_modules` link proved incompatible with Astro's build paths. No course
code or test was changed to make validation pass. This validates the proposed
site's structure and existing specifications, not every empirical claim in
the reading list.

A compact machine-readable record is in [validation.json](validation.json).
