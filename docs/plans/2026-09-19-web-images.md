# Web images and memes

The user likes the scenario illustrations and now wants real memes and images found on the web. Keep the thirteen generated scenes and add existing web material, with the same source image and caption on each lecture page and its deck. Put xkcd's *Standards* on the home page as well.

Considered a page of meme links, replacing the generated drawings, and placing original web images beside the concepts they illuminate. Use the third: it answers the request inside the course and keeps the art the user already likes. Retain the originals without cropping, recolouring or added lettering. HTML captions carry the course's commentary. Memes are examples or comparisons, never evidence about a neurotype.

| Week | Selected web material | Connection |
| --- | --- | --- |
| 1 | Photograph of a door's pull pictogram | Instructions that are actually supplied |
| 2 | xkcd, *Ten Thousand* | The cost of calling something common knowledge |
| 3 | An existing “I can has cheezburger?” lolcat | A question can also be a request |
| 4 | Photograph of an illuminated WAIT crossing button | A visible hold token |
| 5 | Photograph of a rubber duck at a laptop | Rehearsing a repair versus checking it with its recipient |
| 6 | “If not broken, y iz u fixing?” lolcat | Who requested the change and who benefits |
| 7 | Scan of the 1939 *Keep Calm and Carry On* poster | An instruction to continue is missing a stopping rule |
| 8 | xkcd, *Email Reply* | Checking what a message actually asks before paying its social cost |
| 9 | “I can joeen u too, plz?” lolcat | An invitation leaves room for an answer |
| 10 | Photograph of a hotel do-not-disturb hanger | A request that does not disclose a reason |
| 11 | xkcd, *Standards* | A local agreement need not become a universal standard |
| 12 | xkcd, *Wisdom of the Ancients* | A useful record needs the resolution, not only the problem |

The lolcats are existing licensed variants, not claims to be the original versions of their meme formats. The four xkcd comics use the creator's CC BY-NC 2.5 permission for this noncommercial course site; Commons photographs and macros retain their individual CC licences. The poster's source records it as public domain. Link the source record, creator and licence below every figure; record exact download URLs, hashes and retrieval date in `docs/notes/web-images/`. Never relabel an uncertain source as public domain.

Implement a typed catalogue and a shared responsive figure, keeping portrait photos smaller on pages and readable comic lettering on slides. Include descriptive alt text, an expandable text version for longer comics on lecture pages, and a link to the original image. The fixed slide layout must show the complete image, its caption and credit. Leave the week 10 protected passage untouched.

Add at most one ordinary slide per week, at a suitable point around the existing break. Preserve the final discussion, lab schedules and all exercises. Check the rough timing totals; no rehearsal is required.

Run `pnpm check`, `pnpm check:timing`, source/hash and page/deck parity checks. Inspect the new figures in the browser at desktop and phone page widths and desktop and landscape-phone slide sizes, including image loading, captions, credit links and keyboard navigation. Commit and push verified checkpoints on the configured `main`/`origin`. Preserve the unrelated `PROCESS.md` edit and patch. Report deployment separately from the known unfinished-process CI failure.
