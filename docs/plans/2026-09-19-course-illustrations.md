# Course illustrations implementation plan

**Goal:** Add related images to the home page and all twelve lecture pages and slide decks, keeping the course's honest, satirical voice.

**Architecture:** Keep the existing diagrams and archive plates. Add thirteen original editorial illustrations: one for the home page, and one shared by each week's page and deck. A typed image catalogue holds the asset, descriptive alt text and caption; an Astro component handles responsive delivery and the deck's height budget. Captions remain selectable HTML. Images depict fictional scenes or visual metaphors, not research participants or evidence.

**Tech stack:** Built-in image generation, Astro assets, MDX, TypeScript, the existing build/spec checks and cached Playwright with local Chrome.

## Visual direction

Considered archive plates, imported memes and original scenario cartoons. Retain the existing plates and use original scenarios for the new work: they can illustrate the course's exact examples, with readable captions and documented provenance. Use warm paper, dark pen strokes, restrained ochre and human figures drawn without diagnostic labels or stereotypes. The joke belongs to the missing manual, the timetable or the institution.

| Placement | Scene / purpose |
| --- | --- |
| Home | A campus help desk can supply every manual except the one for the conversation taking place. |
| Week 1 | The same greeting in a passing corridor exchange and a seated conversation. Context changes the question. |
| Week 2 | Field notes separate a visible exchange from the observer's unfinished interpretation. |
| Week 3 | An open window and a chilly participant: an opportunity to check what a hint means. |
| Week 4 | Checking a diary while someone waits: a hold token makes that work audible. |
| Week 5 | A wrong-room message leads two people to the stairs: an apology still needs a practical repair. |
| Week 6 | Several small demands compete for the same calendar space. The ledger has a reason to exist. |
| Week 7 | Recovery gets actual empty space in the timetable. Keep this image quiet, not comic distress. |
| Week 8 | A small, answerable email request sits beside a large institutional paperwork pile. |
| Week 9 | Two people in a coffee queue leave a personal topic alone. A pass does not require an explanation. |
| Week 10 | Rae asks for written instructions while a personal folder stays closed. Illustrate the request, not a promised outcome. |
| Week 11 | Both partners edit the same agreement. Both sides get a pen. |
| Week 12 | A usable manual on an editor's desk still has corrections and open issues. |

## Implementation

1. Record exact generation prompts and inspect every selected image. Save the selected originals under `src/assets/images/illustrations/`. Generate individual images, not a contact sheet cut into assets.
2. Add the shared catalogue and responsive figure component. Use eager loading only for the home-page image; use lazy loading elsewhere, intrinsic dimensions and Astro-generated responsive formats.
3. Place each figure beside its relevant lecture example without adding numbered sections. Adapt an existing ordinary slide in each deck where feasible, retaining its teaching point and notes. Keep the fixed break, final discussion and the week 10 protected passage intact.
4. Extend the settled visual design and image-provenance record. The earlier no-raster decision in `decks-and-art.md` remains historical; note that this user request supersedes it.
5. Verify page/deck image parity, useful alt text, successful image loading, responsive delivery and visible captions. Run `pnpm check`, `pnpm check:timing` and `git diff --check`. Inspect all new figures at desktop and mobile page widths and all image slides in landscape. Keep browser scripts/screenshots outside the repo.
6. Commit and push verified checkpoints on `main`. Preserve the user's `PROCESS.md` and existing patch. Check deployment separately from the known process-evidence CI failure, and record the result accurately.

## Timing and editorial constraints

Illustrations should replace the presentation of an existing example, not add a new activity or empirical claim. Preserve the rough timing model, 14:05 start, 14:55–15:05 break, core finish around 15:40, optional final discussion ending by 15:55, and existing lab schedules. Any changed slide count must be checked explicitly. No rehearsal is required.
