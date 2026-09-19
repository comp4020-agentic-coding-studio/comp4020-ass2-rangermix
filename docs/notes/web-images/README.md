# Web images and memes — 19 September 2026

The user asked for real memes and images from web search after approving the
generated illustrations. Twelve existing images now appear in all twelve
lecture pages and decks; *Standards* also appears on the home page. The
thirteen generated scenes, archive plates and SVG diagrams remain.

The selection combines four xkcd comics, three existing lolcat variants, a
scan of the *Keep Calm and Carry On* poster and four photographs: a door's
pull pictogram, an illuminated crossing button, a debugging duck and a hotel
door hanger. Their captions address the lesson's mechanism: explicit
instructions, a request inside a question, acknowledgement while waiting,
repair, pressure to change, removing load, email obligations, room to decline,
privacy, local agreements and useful records. The meme is never evidence
about a student's neurotype.

## Sources and delivery

- [sources.json](sources.json) contains the creator/source metadata, licence
  fields, retrieval date, original URLs, file hashes, sizes and dimensions.
  Encoded dimensions and display dimensions are separate: the WAIT photograph
  has an EXIF rotation that Astro honours. Its stored bytes remain unchanged.
- All twelve selected originals were inspected. They total 5,178,549 bytes
  (4.94 MiB). No source image was cropped, regenerated, recoloured or lettered
  for the course. The creator's supplied 2× image is used where available.
- The [provenance record](../image-provenance.md) links every original record
  and explains the reuse terms. Source, creator and a licence link appear
  under every image. The original files retain their individual terms.
- `src/data/web-images.ts` shares the asset, alt text, caption and credit
  between the lecture and deck. `WebImage.astro` generates responsive WebP
  variants and keeps every complete image inside its figure. Portraits and
  tall comics put the commentary beside the image on slides.
- Four comics have expandable text versions on pages. All figures link to
  their locally served full-size originals; the source-record link is
  separate. This also makes small comic lettering available beyond the
  scaled slide view. No third-party image is hotlinked at runtime.
- [placements.json](placements.json) records the week, image and slide
  heading. Lecture sections were not renumbered. Week 10's protected passage
  and all final discussion questions are unchanged.

## Timing

Each deck gains one ordinary two-minute slide, with no new exercise.
[timing.json](timing.json) records 87.1–90.1 minutes of core material and
49.1–54.1 minutes before the break. `pnpm check:timing` reports zero planning
issues. The fixed 14:55–15:05 break, final discussion cutoff of 15:55 and lab
schedule remain. These are rough planning estimates, not rehearsed timings.

## Local verification

- `pnpm check`: zero type errors or warnings, 125 pages built, accessibility,
  base-path links, broken-link and deck-structure checks passed; **464 tests
  across 12 files passed**.
- All twelve source files match their recorded SHA-256 hashes. The source
  directory contains exactly the twelve selected originals.
- **50 browser checks** cover the new figures: home and twelve lectures at
  1440 × 1080 and 390 × 844; twelve image slides at 1440 × 900 and 844 × 390
  landscape. Images decoded, responsive WebP variants loaded, captions and
  credits stayed inside the viewport, source links matched the manifest, and
  page/deck content matched. Portrait orientation is correct.
- Comic text toggles and local full-size image URLs worked. ArrowRight moved
  each image slide to the following slide. Home-to-week-1 navigation worked.
  No console errors, failed HTTP responses or error overlays were observed.
- The home figure was inspected in dark mode. Keyboard toggling of its comic
  transcript and full-size-image navigation followed by Back both passed.
- **50 regression browser checks** passed for the retained generated images
  on the same page/deck viewports, including alt/caption parity and navigation.
- The browser run used cached Playwright with local Chrome because the Browser
  plugin was unavailable. No dependency was installed. QA scripts and
  screenshots remain outside the repository.
- The unrelated `PROCESS.md` edit and existing patch retain their incoming
  SHA-256 hashes and are excluded from this checkpoint.

## Published verification

Source checkpoint **`20462dda3d767887dcd81e86bceda05b6fdee87c`** was pushed to
`main`. [GitHub Actions run 35423102674](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rangermix/actions/runs/35423102674)
completed deployment successfully; its build/spec step also passed.

The same **50 browser checks passed against the public Pages site**, with no
console errors or failed HTTP responses. Every new image, credit and caption
loaded at both page widths and both slide sizes; text toggles, local original
image URLs, page/deck parity, the home-to-week-1 link and keyboard navigation
all passed. These checks exercised the published pages, not a local preview.

The overall workflow remains red solely because the existing `PROCESS.md`
evidence step cites placeholder commits `a1b2c3d` and `e4f5a6b`. Its subsequent
secret and course-key scans were skipped. This is not a claim that the entire
CI workflow passed. The user's in-progress process account was left alone.

Live examples: [home](https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-rangermix/),
[week 3 meme slide](https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-rangermix/decks/week-03/#/25),
[week 7 poster slide](https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-rangermix/decks/week-07/#/26),
[week 11 standards slide](https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-rangermix/decks/week-11/#/27).
