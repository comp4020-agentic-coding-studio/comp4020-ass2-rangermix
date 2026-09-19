# Image provenance

The site's archive images, web memes and generated illustrations, with their
origins kept distinct. For sourced material, the source record and its reuse
terms are written down. Generated scenes are labelled as fictional and have their
prompts recorded below; they are not evidence of an observed exchange.

Nothing is hotlinked. Each archive file is fetched with `scripts/commons.py`, committed
under `src/assets/images/sourced/`, and rendered by `src/components/Plate.astro`,
which prints the source line under the picture where a reader can see it.

To re-check any row: `python3 scripts/commons.py info "<file title>"`.

## Why photographs at all

The drawings are the course's own hand --- a specification sketched in the
margin. A plate is the opposite and that is the point: somebody else's
document, of a protocol that really was written down, maintained and handed to
its operators. The contrast is the argument. The switchboard operators got a
manual; the students did not.

`docs/course-design.md` records the rule. Plates sit alongside the drawings and
never replace them.

## Licence status

| Slug | Used in | Source record | Licence field says | Verified |
| --- | --- | --- | --- | --- |
| `exchange-montreal-1897` | week 4 | [Telephone exchange Montreal QE3 33](https://commons.wikimedia.org/wiki/File:Telephone_exchange_Montreal_QE3_33.jpg) | Public domain (PD-old-70-expired, PD Canada) | 2026-09-16, Commons API |
| `mission-control-apollo13` | week 7 | [Mission Control during the Apollo 13 emergency return (s70-35368)](https://commons.wikimedia.org/wiki/File:View_of_Mission_Control_Center_during_the_Apollo_13_emergency_return_(s70-35368).jpg) | Public domain (NASA) | 2026-09-16, Commons API |
| `arpanet-map-1977` | week 11 | [Arpanet logical map, March 1977](https://commons.wikimedia.org/wiki/File:Arpanet_logical_map,_march_1977.png) | Public domain | 2026-09-16, Commons API |
| `signal-code-flags` | week 1 | [International Code of Signals](https://commons.wikimedia.org/wiki/File:International_Code_of_Signals.svg) | CC BY-SA 4.0, by Michi83 | 2026-09-16, Commons API |

Three are public domain and carry no attribution requirement; the source line
under each plate is there anyway, because a course about documentation should
say where its documents came from. The signal-code chart is CC BY-SA, so its
author is named in that line as the licence requires. It is also a modern
drawing of an old code rather than a historical scan, and the caption dates it
accordingly.

## Generated course illustrations

Thirteen original images were generated on **19 September 2026** with the
built-in image-generation tool for this repository. No stock photo, archive
image, artist reference or internet meme was supplied to the generator.
They are fictional editorial scenarios and visual metaphors, not photographs
or reproductions of research materials. No public-domain or Creative Commons
status is asserted for them.

The originals are committed under `src/assets/images/illustrations/`.
`CourseIllustration.astro` labels each as a fictional scene and renders
responsive WebP versions through Astro. Alt text describes the visible action;
the separate HTML caption supplies dialogue or the joke. The hero is eager
loaded, and the lecture/deck images are lazy loaded.

| File | Shared use | Subject |
| --- | --- | --- |
| `home.png` | Home | The help desk's impressive, empty manual |
| `week-01.png` | Week 1 lecture and deck | A passing greeting and time to answer |
| `week-02.png` | Week 2 lecture and deck | An exchange before its interpretation |
| `week-03.png` | Week 3 lecture and deck | Checking a hint beside an open window |
| `week-04.png` | Week 4 lecture and deck | A diary check and a hold token |
| `week-05.png` | Week 5 lecture and deck | The cost of a wrong-room message |
| `week-06.png` | Week 6 lecture and deck | Small demands competing for calendar space |
| `week-07.png` | Week 7 lecture and deck | Removing an optional commitment |
| `week-08.png` | Week 8 lecture and deck | One email request beside institutional paperwork |
| `week-09.png` | Week 9 lecture and deck | Passing on a topic in a café queue |
| `week-10.png` | Week 10 lecture and deck | Rae's request, with the response still unknown |
| `week-11.png` | Week 11 lecture and deck | Both partners editing the agreement |
| `week-12.png` | Week 12 lecture and deck | A usable manual with corrections still open |

The exact request for each image is the `commonPrompt` followed by that row's
`scene` in [the prompt set](course-illustrations/prompts.json).
[The selected-file manifest](course-illustrations/selected-files.json) records
dimensions and SHA-256 hashes. All thirteen were inspected individually before
integration; no image was cropped, retouched or composited after generation.
The build performs resizing and format conversion for delivery.

## Web memes, comics and photographs — 19 September 2026

The user's follow-up requested real memes and images found through web search,
while keeping the generated scenes. Twelve existing images now have 25
placements: one per lecture and deck, plus *Standards* on the home page.

The [source manifest](web-images/sources.json) records original source pages,
download URLs, creator credits, licence fields, retrieval dates, dimensions,
byte counts and SHA-256 hashes. The originals are committed unchanged under
`src/assets/images/web/`. Astro handles responsive resizing, EXIF orientation
and WebP delivery. Clicking a figure opens its full-size local original.

| Image | Placement | Creator / source | Reuse terms |
| --- | --- | --- | --- |
| Pull pictogram on a door | Week 1 | [Alastair Cook / Commons](https://commons.wikimedia.org/wiki/File:Pull_pushpullsigns_com.jpg) | CC BY-SA 3.0 |
| *Ten Thousand* | Week 2 | [Randall Munroe / xkcd](https://xkcd.com/1053/) | CC BY-NC 2.5 |
| I can has cheezburger? | Week 3 | [Or Hiltch / Commons](https://commons.wikimedia.org/wiki/File:I_can_has_cheezburger.jpg) | CC BY 2.0 |
| Pedestrian crossing WAIT sign | Week 4 | [Secretlondon / Commons](https://commons.wikimedia.org/wiki/File:Pedestrian_crossing_WAIT_sign.jpg) | CC BY-SA 4.0 |
| Rubber duck assisting with debugging | Week 5 | [Tom Morris / Commons](https://commons.wikimedia.org/wiki/File:Rubber_duck_assisting_with_debugging.jpg) | CC BY-SA 3.0 |
| If not broken, why fix it? | Week 6 | [Doc Tropics; caption by Microchip08 / Commons](https://commons.wikimedia.org/wiki/File:Aalolcat_notbroken.jpg) | CC BY-SA 3.0 |
| *Keep Calm and Carry On* | Week 7 | [UK Government / Commons](https://commons.wikimedia.org/wiki/File:Keep-calm-and-carry-on-scan.jpg) | Public domain, as recorded by the source |
| *Email Reply* | Week 8 | [Randall Munroe / xkcd](https://xkcd.com/1873/) | CC BY-NC 2.5 |
| May I join you? | Week 9 | [Stefano Mortellaro; caption by Iliev / Commons](https://commons.wikimedia.org/wiki/File:Lolcat_May_I_Join_You.jpg) | CC BY 2.0 |
| Do-not-disturb hanger | Week 10 | [Phrontis / Commons](https://commons.wikimedia.org/wiki/File:SignDoNotDisturb_res.jpg) | CC BY-SA 3.0 |
| *Standards* | Home and week 11 | [Randall Munroe / xkcd](https://xkcd.com/927/) | CC BY-NC 2.5 |
| *Wisdom of the Ancients* | Week 12 | [Randall Munroe / xkcd](https://xkcd.com/979/) | CC BY-NC 2.5 |

[xkcd's own reuse page](https://xkcd.com/license.html) permits copying its comics
noncommercially with attribution and a link back. This is a noncommercial
student course site. These third-party assets retain their respective terms;
their inclusion does not relicense them as course-authored work. The three
lolcats are existing licensed variants, not the original photographs of every
meme format. None was generated for this site.

`WebImage.astro` and `src/data/web-images.ts` share the alt text, commentary,
creator, source and linked licence across page and slide. Longer comics have
expandable text versions on pages. Course captions are commentary, not part
of the original image. The week 10 protected passage has no inserted images.
See [the implementation and verification record](web-images/README.md).

## Sourced material with unresolved reuse terms

None so far. If one is ever added, it goes in this table with its real status
written plainly --- `licence not verified`, or `likely in copyright` --- and
never dressed up as public domain. **The repo goes public when it ships**, so a
row like that is a thing to clear or swap before submission, not after.
