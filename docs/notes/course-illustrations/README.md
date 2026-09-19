# Course illustrations — 19 September 2026

The user asked for more related imagery on the home page, lecture pages and
slides. Thirteen original generated illustrations now occupy 25 placements:
one on the home page, plus one shared by each week's lecture and deck.

The scenes use the course's ink-and-gold palette and specific situations:
checking a hint, waiting for a diary check, the cost of a wrong-room message,
requests competing for calendar space, and both partners editing an agreement.
The home-page joke is a university help desk with an impressive empty manual.
The existing SVG diagrams and archive plates remain. The home handshake diagram
now follows the introduction, after the new hero illustration.

## Assets and presentation

- All thirteen originals were inspected individually. They are 1536 × 1024 PNGs
  under `src/assets/images/illustrations/`, with no subsequent cropping,
  compositing or retouching. The originals total 45.1 MiB; browsers receive
  responsive WebP derivatives, not the PNGs.
- [prompts.json](prompts.json) contains the exact shared prompt and each scene.
  [selected-files.json](selected-files.json) records dimensions, sizes and
  SHA-256 hashes. The generator was the built-in image-generation tool.
- `src/data/illustrations.ts` holds the image, descriptive alt text and HTML
  caption for both placements. Each is visibly labelled **Fictional scene**.
  These images do not depict research participants or substantiate a finding.
- The hero loads eagerly; other figures load lazily. Astro generates four
  responsive widths: 480, 768, 1024 and 1536 pixels. Deck figures preserve the
  full composition within a 440-pixel image-height budget on the 1280 × 720
  slide canvas. Captions remain selectable and readable outside the raster.
- No lecture section was added or renumbered. Week 10's protected register
  break remains verbatim, in order and without inserted imagery.

## Timing

Each deck gained one ordinary illustration slide, counted at two minutes by
the agreed rough model. The scenes give an existing example room on screen;
they do not add a timed exercise. [timing.json](timing.json) records the updated
estimates: **85.1–88.1 minutes** of core material, with the first block estimated
at **49.1–53.1 minutes**. `pnpm check:timing` reports zero planning issues.

The 14:05 start, fixed 14:55–15:05 break, approximate 15:40 core finish and final
optional discussion ending by 15:55 remain intact. Every deck still ends with
its open question. Lab timings and activities were not changed. These are
planning estimates, not rehearsed delivery times.

## Local verification

- `pnpm check`: no type errors or warnings; 125 pages built; accessibility,
  internal/base-path links and deck structure checks passed; **464 tests in
  12 files passed**.
- `git diff --check`: passed.
- All thirteen source images match the selected-file manifest.
- **50 browser checks** passed in Chrome: home and twelve lectures at
  1440 × 1080 and 390 × 844, and all twelve image slides at 1440 × 900 and
  844 × 390 landscape. Each image decoded successfully, used a responsive
  WebP source and had descriptive alt text and an unclipped HTML caption.
  Page/deck assets, alt text and captions matched. Images kept their aspect
  ratio; the new figures and slide text stayed inside the viewport.
- The home-to-week-1 link and keyboard navigation from every image slide to
  the following slide passed. No browser console errors or failed HTTP
  responses were observed. The home image was also inspected in dark mode.
- The Browser plugin was unavailable. Verification used the existing cached
  Playwright installation with local Chrome; no dependency was installed.
  Temporary browser scripts and screenshots were kept outside the repository.

The visual pass caught two layout issues. The site's existing margin notes
floated outside a 1440-pixel viewport, making the document 1477 pixels wide;
the same overflow was reproduced on the previously deployed site. Notes now
stay inline below 100rem, retaining their margin position where space permits.
Regression checks passed at 390, 844, 1200, 1280, 1440, 1600 and 1920 pixels.

The theme's mobile image-bleed rule initially shifted the new figures 36 pixels
left. The new component explicitly resets that margin. Its caption selector
also permits the deck stylesheet to set the intended 25.2-pixel caption size,
rather than inheriting the 36-pixel slide body size. All 50 checks were repeated
after these corrections.

The user's `PROCESS.md` and existing patch remain unchanged. Deployment and
remote check results will be recorded after the source checkpoint is pushed.
