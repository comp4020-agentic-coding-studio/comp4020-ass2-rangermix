# SLOP1562 course site --- implementation plan

> **For agentic workers:** execute task by task, in order, in this session
> (inline; no subagents unless the user asks). Steps use checkbox syntax.
> Tick them in this file as they land, and commit the ticks with the work, so
> the next session can see where the build stands.

**Goal:** turn the starter into the NT 101 course site `docs/course-design.md`
settles --- twelve researched weeks, four assessments, readings, cast, policies,
two decks --- with every `spec/` test green and `pnpm check:evidence` failing
only on the `PROCESS.md` the student writes.

**Architecture:** the fixed Astro platform (theme, course graph, astromotion).
Weeks are `lectures` (the week's page, MDX so it can draw diagrams) plus
`sessions` (the Lab). A fifth collection, `readings`, holds each verified
source as a graph node. The hand-drawn visual system is build-time SVG from
one seeded-jitter module, used by pages and decks alike, so it costs no
client JavaScript and follows the theme into dark mode.

**Tech stack:** Astro 7, `astro-theme-university` + `astro-theme-slop`,
`astro-course-university`, astromotion (Reveal.js), vitest, Astro's fonts API
(Google provider) for one handwriting face, `sharp` for the social card.

**Sources this plan argues from:** the Assignment 2 brief and spec
(`/api/assessments/assignment-2.json` on the course site), `CLAUDE.md`,
`docs/course-design.md`, `README.md`, and the red tests in `spec/`.

## Global constraints

- Deadline: noon Mon 21 Sep 2026 (+15 min grace). Marked live in Chrome at
  **1920×1080** and **390×844**.
- Code `SLOP1562`; keep `562`. Level 1.
- Platform fixed: Slop identity, the four collections and their keys, the
  build pipeline, the generated API. Adding (a collection, a component, a font
  registration, a page) is allowed.
- `pnpm check` green before anything is called done; read the command's own
  output. `pnpm check:evidence`: every `STARTER_CONTENT` marker gone *with* its
  fragment; all four starter images replaced or deleted.
- `PROCESS.md` is the student's own account (course AI-use policy: "your
  process overview ... by definition your own account"). **Do not write it.**
  Keep `docs/notes/process-evidence.md` so the student can.
- Never a root-absolute `href` in `.astro`; use `withBase`, the theme's
  components, or markdown links.
- Content pipeline order per week: research → review + readings → decide →
  write lecture and lab → slides. No citation from memory; each reading
  records what it was checked against.
- Vocabulary: `spec/inclusive-language.test.ts`. Name someone else's framing
  only inside `data-quoted` or `<cite>`.
- Commit and push in steps a reader can follow, messages saying why.

## Decisions this plan settles

These close the gaps raised when the repo was read. Each is recorded in the
harness or the design doc in Task 1, so it outlives this file.

1. **The week's page is the lecture.** `lectures/[slug].astro` renders
   `SpecList` (it didn't), headed "Check yourself against this week". The Lab
   keeps its own spec, headed "What you leave the lab with". Both required by
   `spec/weeks.test.ts`.
2. **Quotation mechanism for banned framing:** `data-quoted` on an inline
   element, or `<cite>` for a work's title. Styled visibly as someone else's
   words (see Task 2), so the exception is legible to a reader as well as a test.
3. **Field Journal** is one assessment entry: `week: 2`, `due` = its last
   Sunday, and a pass-through `submissions:` list of all eleven timestamps,
   rendered as a schedule on its page and card.
4. **Capstone** is one entry, "Personal Protocol Document *or* Neurotypical
   Interaction Field Experiment", 30%, with both routes in its brief. One entry
   is what lets weights sum to 100.
5. **Times:** everything due at 23:59 Canberra local, with the right offset
   either side of DST's end (03:00 Sun 4 Apr 2027): `+11:00` up to 28 Mar and
   for Fri 2 Apr, `+10:00` from 4 Apr.
6. **Research reviews** (pipeline step 2) live in `docs/research/week-NN.md`:
   settled artefacts, not notes. Each reading's page carries a one-paragraph
   annotation of why it is on the list, drawn from the review.
7. **Course outcomes** go in the course record's `learningOutcomes` (the
   catalogue API already defines the field; the Slop schema gains it as
   optional) and render on the home page from there.
8. **Cast:** three fictional staff with new names --- a convenor and two
   tutors --- and no portraits. The starter portraits are deleted with the
   people they belonged to.
9. **Hero:** an inline, theme-aware SVG on the home page instead of a raster.
   `hero-home.avif` is deleted and the 404 page loses its hero. The 1200×630
   social card is a PNG rendered from the same sketch module by a script.
10. **Decks:** weeks 1 and 2, as the design doc says, each built from its
    written lecture and at least eight slides.
11. **Glossary:** `src/data/terms.ts`, one entry per protocol term with the
    week that introduces it, rendered at `/glossary/`. It is the course
    specifying its own vocabulary, and the list the harness's "reuse terms
    exactly" rule can be checked against.
12. **Slugs:** `lectures/week-NN`, `sessions/week-NN`,
    `readings/<firstauthor>-<year>-<keyword>`, `people/<given>-<family>`,
    `assessments/<kebab-title>`.

## File map

| Path | Responsibility |
| --- | --- |
| `src/course-config.ts` | course record, now with `learningOutcomes` |
| `src/site-config.ts` | Lab labels, nav, `graphCollections` + `readings`, social card |
| `src/content.config.ts` | `readings` schema; lectures may be `.mdx` |
| `src/content/lectures/week-NN.mdx` | the week's page: argument, diagrams, spec |
| `src/content/sessions/week-NN.md` | the Lab: run sheet with timings, spec |
| `src/content/readings/*.md` | one verified source each, with annotation |
| `src/content/assessments/*.md` | four tasks |
| `src/content/people/*.md` | three staff |
| `src/pages/readings/{index.astro,[slug].astro}` | reading list and detail |
| `src/pages/glossary/index.astro` + `src/data/terms.ts` | the course's terms |
| `src/pages/lectures/[slug].astro` | adds `SpecList`, `WeekReadings`, clause numbering |
| `src/pages/assessments/[slug].astro`, `src/components/AssessmentsGrid.astro` | submission schedules |
| `src/components/WeekReadings.astro` | formatted citations for a week |
| `src/components/Citation.astro` | one citation, title in `<cite>` |
| `src/lib/sketch.ts` | seeded jitter: lines, arrows, boxes as SVG path data |
| `src/components/sketch/{SequenceDiagram,SketchTable,MarginNote,HeroSketch}.astro` | hand-drawn primitives |
| `src/styles/protocol.css` | site-wide visual system, imported by `PageLayout.astro` |
| `src/decks/theme.css`, `src/decks/week-0{1,2}.deck.mdx` | decks |
| `scripts/verify-readings.ts` | `pnpm check:readings`: DOIs against Crossref |
| `scripts/render-card.ts` | writes `src/assets/images/card.png` |
| `docs/research/week-NN.md` | literature review per week |
| `docs/notes/process-evidence.md` | commit log of decisions for the student's PROCESS.md |

---

### Task 1: Platform slice --- record, labels, readings collection, week page

**Files:** modify `src/course-config.ts`, `src/site-config.ts`,
`src/content.config.ts`, `src/pages/lectures/[slug].astro`,
`src/pages/sessions/index.astro`, `src/pages/sessions/[slug].astro`,
`src/pages/assessments/[slug].astro`, `src/components/AssessmentsGrid.astro`,
`src/components/SessionsGrid.astro`, `CLAUDE.md`, `docs/course-design.md`;
create `src/pages/readings/index.astro`, `src/pages/readings/[slug].astro`,
`src/components/WeekReadings.astro`, `src/components/Citation.astro`.

**Interfaces produced:**
- `readings` entry data: `{ title, description, authors: string[], year: number,
  venue: string, kind: "article" | "book" | "chapter", doi?: string, url?: string,
  checked: { against: "full text" | "abstract" | "publisher record", on: string } }`
- `<Citation reading={CollectionEntry<"readings">} />`,
  `<WeekReadings lecture={CollectionEntry<"lectures">} />`
- assessment pass-through `submissions?: string[]` (ISO timestamps with offset)
- `sessionLabels = { singular: "Lab", plural: "Labs" }`

- [x] **Step 1: course record.** Extend the schema and fill it from the design doc.

```ts
// in slopCourseMetaSchema's strictObject
learningOutcomes: z.array(z.string().trim().min(20).max(200)).min(3).max(6).optional(),
```

```ts
export const courseMeta = slopCourseMetaSchema.parse({
  code: "SLOP1562",
  title: "Undocumented Protocols: Field Methods in Neurotypical Interoperation",
  session: "Semester 1",
  year: 2027,
  level: 1,
  startDate: "2027-02-22",
  endDate: "2027-06-13",
  description:
    "The social protocol everyone runs has no specification, no changelog and no " +
    "maintainer who will admit to writing it. Twelve weeks observing it, documenting " +
    "it, testing the documentation, and deciding which parts of it you will run.",
  tags: ["social protocol", "field methods", "communication"],
  learningOutcomes: [
    "Document one part of the social protocol precisely enough that someone who does not run it could implement it.",
    "Run a documented subroutine on purpose when it is worth running, and put a number on what it cost.",
    "Decline a subroutine knowing what declining costs, and say in plain words what you are doing instead.",
    "Negotiate a working protocol with someone whose implementation differs from yours, and write down what each side conceded.",
  ],
}) satisfies CourseMetaInput;
```

- [x] **Step 2: labels, nav, graph collections.**

```ts
export const sessionLabels = { singular: "Lab", plural: "Labs" } as const;
export const graphCollections = ["sessions", "assessments", "lectures", "people", "readings"];
// links:
{ text: "Lectures", href: "/lectures/" },
{ text: sessionLabels.plural, href: "/sessions/" },
{ text: "Readings", href: "/readings/" },
{ text: "Assessment", href: "/assessments/" },
{ text: "People", href: "/people/" },
{ text: "Policies", href: "/policies/" },
```

- [x] **Step 3: readings schema** in `src/content.config.ts`.

```ts
readings: defineCollection({
  loader: courseNodeLoader("readings"),
  schema: courseNodeSchema
    .extend({
      authors: z.array(z.string().trim().min(2)).min(1),
      year: z.number().int().min(1900).max(2027),
      venue: z.string().trim().min(2),
      kind: z.enum(["article", "book", "chapter"]),
      doi: z.string().regex(/^10\.\d{4,9}\/\S+$/).optional(),
      url: z.url().optional(),
      checked: z.object({
        against: z.enum(["full text", "abstract", "publisher record"]),
        on: z.iso.date(),
      }),
    })
    .loose()
    .refine((r) => r.doi || r.url, { message: "a reading needs a DOI or a URL" }),
}),
```

- [x] **Step 4: week page.** In `lectures/[slug].astro`, wrap `<Content />` in
  `<article class="protocol-doc">`, then render
  `<SpecList spec={lecture.data.spec} heading="Check yourself against this week">`
  with the preamble "Lines you can check on yourself, without asking anyone.
  If one is still false, that is where next week's journal entry is.", then
  `<WeekReadings lecture={lecture} />`, then `RelatedContent` with
  `collections={graphCollections.filter((c) => c !== "readings")}`. Lab page
  heading: "What you leave the lab with". Sessions index drops the template
  paragraph about labels.

- [x] **Step 5: readings pages.** Index grouped by week (a reading used in
  several weeks lists under its first), each entry `<Citation>` + link. Detail
  page: citation, a "Find it" link (`https://doi.org/<doi>` or `url`), "Checked
  against the <against> on <date>", body annotation, related weeks.
  `Citation` renders `Authors (year). <cite>Title</cite>. Venue.` with the
  title in `<cite>` so a quoted title never trips the vocabulary test.

- [x] **Step 6: submission schedules.** Assessment page: when
  `data.submissions` exists, render "Submitted weekly" and an ordered list of
  `formatCourseDate` dates with "23:59". Grid card: "Weekly, first due … last
  due …" instead of a single due date.

- [x] **Step 7: record the decisions.** `CLAUDE.md` Conventions: the lecture
  is the week's page; labs carry their own spec; quote framing with
  `data-quoted`/`<cite>`; reviews in `docs/research/`. `docs/course-design.md`
  "Still open": strike what this plan settled.

- [x] **Step 8: verify and commit.** `pnpm check`. Expect typecheck clean and
  the build to pass. Calendar and weeks tests stay red until content exists.
  Commit, push.

### Task 2: Visual system --- sketch module, primitives, fonts, stylesheet

**Files:** create `src/lib/sketch.ts`, `src/components/sketch/*.astro`,
`src/styles/protocol.css`; modify `astro.config.ts` (a `fonts` registration and
astromotion `fontVariables` only), `src/layouts/PageLayout.astro`,
`src/decks/theme.css`.

**Interfaces produced:**

```ts
// src/lib/sketch.ts
export function rng(seed: string): () => number;                 // mulberry32 over a string hash
export function line(x1: number, y1: number, x2: number, y2: number, r: () => number, wobble?: number): string; // SVG path d
export function arrow(x1: number, y1: number, x2: number, y2: number, r: () => number): { shaft: string; head: string };
export function box(x: number, y: number, w: number, h: number, r: () => number): string;
```

`SequenceDiagram.astro` props:
`{ actors: string[]; messages: { from: number; to: number; label: string; note?: string; dashed?: boolean; timing?: string }[]; caption: string; seed?: string }`.
Renders `<figure class="sketch sequence">` with an SVG (`role="img"`, `<title>`
from caption, `aria-describedby` a visually hidden ordered list of the
messages, so the exchange is readable without the picture). Strokes use
`currentColor`; labels use the handwriting face; horizontal overflow scrolls
inside the figure below 520 px.

`SketchTable.astro`: wraps a slotted markdown table, draws a jittered frame
behind it. `MarginNote.astro`: an aside in the handwriting face, floated into
the margin at desktop and inline at phone width. `HeroSketch.astro`: home-page
drawing of the opening handshake.

- [x] **Step 1:** load `frontend-design:frontend-design`; settle the
  handwriting face against the monospace (legible at 16 px on a phone, reads as
  a person's hand in an RFC margin) and the scale.
- [x] **Step 2:** write `sketch.ts`: deterministic (same seed, same drawing on
  every build, so diffs stay quiet), wobble proportional to length.
- [x] **Step 3:** register the font in `astro.config.ts` `fonts:` with
  `fontProviders.google()`, and add its variable to astromotion `fontVariables`.
- [x] **Step 4:** `protocol.css`: `.protocol-doc` h2 counters as `§N`;
  `[data-quoted]` styled as marked-up foreign text (handwritten quotation marks
  and a hand-drawn underline, colour from `--at-text-secondary`); spec lists as
  checkbox clauses in the monospace; table frames; margin notes. Colours only
  from `--at-*` tokens. Check contrast in both schemes.
- [x] **Step 5:** build the primitives, import `protocol.css` from
  `PageLayout.astro`, and try a scratch diagram in week 1.
- [x] **Step 6:** in the browser at 1920×1080 and 390×844, light and dark:
  no horizontal page scroll, labels legible, axe clean in the build. Commit.

**As built (deviations):** no `SketchTable` --- the theme already wraps every
markdown table in a scroll container, so a drawn frame would scroll away with
the content; tables get the monospace header instead. `HeroSketch` moves to
Task 17 with the home page it belongs to. Diagrams cap at their natural width
(labels were oversized at desktop); three-party diagrams keep their size on a
phone and scroll sideways in a focusable region. Verified at 1920×1080 and
390×844 with a scratch week that was not committed.

### Task 3: Readings verification tool

**Files:** create `scripts/verify-readings.ts`; modify `package.json`
(`"check:readings": "node scripts/verify-readings.ts"`, devDependency `yaml`).

- [x] **Step 1:** parse each `src/content/readings/*.md` frontmatter. For a DOI,
  fetch `https://api.crossref.org/works/<doi>` and compare the normalised title
  (case, punctuation, subtitle separator), the year (`issued`), and the first
  author's family name against the frontmatter. Print one line per reading:
  `✓`, `✗ <field>: frontmatter X / Crossref Y`, or `! no DOI --- check <url>
  by hand`. Exit 1 on any `✗`.
- [x] **Step 2:** run it against one known-good and one deliberately wrong
  entry in a temp dir, and confirm it catches the wrong one. Commit.

It stays out of `pnpm check` on purpose: a test that depends on Crossref being
up is a flaky test. It is the tool used while researching, and a check any
reader can rerun.

### Tasks 4--15: the twelve weeks

Every week runs the same pipeline, and each has one thing no other week has.

- [x] **Research.** Search the literature (Crossref, Semantic Scholar, OpenAlex,
  PubMed). For each candidate, read the abstract or full text and confirm the
  specific claim the week would make. Candidates below are **unverified leads,
  not citations**: cut any that don't hold, and never state a number the
  source doesn't state.
- [x] **Review.** `docs/research/week-NN.md`: the question; the sources with
  what each was checked against; what they say; where they disagree; what
  survives into teaching, and what the course states as its own observation
  rather than research.
- [x] **Readings.** 2--4 entries, annotated; `pnpm check:readings` clean.
- [x] **Lecture** `week-NN.mdx`: argument in both registers, concrete scripts
  and timings, the signature artefact, in-text citations to its readings, 3--5
  spec lines a student can check on themselves, `related:` to its lab and
  readings.
- [x] **Lab** `week-NN.md`: what to bring, a timed run sheet, what leaves the
  room, 2--4 spec lines; for weeks 2--12, the journal prompt.
- [x] **Glossary** terms introduced this week, added to `src/data/terms.ts`.
- [x] `pnpm check`; that week's tests green; commit and push.

| Week | Title | Signature artefact (this week only) | Lab | Leads to check |
| --- | --- | --- | --- | --- |
| 1 | Introduction + The Opening Handshake | sequence diagram and full spec of "how are you", including the branch nobody takes: answering | corridor capture: log ten real openings, time the replies | Coupland, Coupland & Robinson 1992 (phatic communion); Schegloff & Sacks 1973 (closings); Malinowski 1923 |
| 2 | The Undocumented Majority + Field Notes Without Pathology | the four-part field-note template, and a before/after rewrite of a pathologising observation | twenty minutes observing in a public space; swap notes and flag any sentence that diagnoses instead of describing | Milton 2012 (double empathy); Polanyi 1966 (tacit knowledge); Garfinkel 1967 (breaching); Sasson et al. 2017 |
| 3 | Payload and Envelope | a decoder table: utterance → payload → envelope → expected response | envelope relay: write a payload, a partner wraps it, a third decodes, measure loss | Grice 1975; Brown & Levinson 1987; Pinker, Nowak & Lee 2008; Searle 1975 |
| 4 | Latency and Turn-Taking | a timing chart of gaps and what each length reads as | stopwatch lab: measure gaps in paired talk; try the documented hold token | Stivers et al. 2009; Sacks, Schegloff & Jefferson 1974; Roberts, Francis & Morgan 2006; Levinson & Torreira 2015 |
| 5 | Error Handling and Repair | state machine: trouble → repair initiation → repair → acknowledgement; apology components | scripted misunderstandings, specific versus open repair initiators | Schegloff, Jefferson & Sacks 1977; Dingemanse et al. 2015; Lewicki, Polin & Lount 2016 |
| 6 | Masking: Cost Accounting | the masking ledger: subroutine × cost × what it buys | a one-day ledger, compared across the room; the same subroutine costs different people different amounts | Hull et al. 2017; Cage & Troxell-Whitman 2019; Pearson & Rose 2021; Hochschild 1983 |
| 7 | Emergency: Overload, Shutdown, Recovery | a personal runbook with pre-written messages for when composing one is not possible | write the runbook and three messages, saved on your phone before the break | Raymaker et al. 2020; Higgins et al. 2021; Sonnentag & Fritz 2007 |
| 8 | Institutional Protocols | annotated templates: the email to a tutor, the extension request, the office-hours opener | draft three institutional messages; a partner runs conformance tests on them | Stephens, Houser & Cowan 2009; Flynn & Lake 2008; Gurbuz, Hanley & Riby 2019 |
| 9 | Escalation Rates | a rate-limit table: disclosure depth per stage, hours invested, the reciprocity rule | structured reciprocity exercise; Interoperation Report partners begin | Hall 2019; Sprecher et al. 2013; Collins & Miller 1994; Aron et al. 1997 |
| 10 | Disclosure | the five-audience table; need-without-label scripts; the register break, verbatim | draft partial disclosures of needs, not labels, for two audiences; nothing real disclosed in the room | Sasson & Morrison 2019; Thompson-Hodgetts et al. 2020; Romualdez et al. 2021; Chaudoir & Fisher 2010 |
| 11 | Interoperation, Not Conversion | a bilateral protocol document: what each side concedes | third partner session; the room reviews the vocabulary it has built since week 1 | Crompton et al. 2020 (information transfer); Crompton et al. 2020 (autistic peers); Mitchell, Sheppard & Cassidy 2021 |
| 12 | Advanced Topics and Further Study | an RFC-style "open issues" register: romance, persuasion, power, sketched with where to read further | capstone clinic: route choice and an ethics review of experiment proposals | Keltner, Gruenfeld & Anderson 2003; Petty & Cacioppo 1986; one relationship source, found in research |

Week 10 carries the approved register break from `docs/course-design.md`
**verbatim**, with nothing between its last paragraph and "Right. Mechanics."
(`spec/settled-text.test.ts`).

Week to week, the terms must hold: *protocol*, *implementation*, *subroutine*,
*timeout*, *repair*, *budget*, *runbook*, *rate limit*, *interoperation*. Introduce
each once, in the week the table puts it, and reuse it exactly.

**As built:** all twelve weeks landed in pipeline order, each with a review in
`docs/research/`. Leads cut during research: Schegloff & Sacks 1973, Jefferson
1980, Brown & Levinson's face specifics, Sprecher et al. 2013, Petty &
Cacioppo 1986, Sala et al. 2023, Hall's hour figures. Two harness rules were
added while writing, after repeated failures: a study's vivid details are
claims, and uncited "most people" frequency statements are claims. New sketch
primitives: `TimingLine` (week 4) and `StateMachine` (week 5).

### Task 16: Assessments

**Files:** delete `src/content/assessments/{assignment-1,final-project}.md`;
create `field-journal.md`, `protocol-specification.md`,
`interoperation-report.md`, `personal-protocol-document.md`.

| Entry | week | weight | due | extra |
| --- | --- | --- | --- | --- |
| Field Journal | 2 | 30 | `2027-05-30T23:59:00+10:00` | `submissions:` the eleven Sundays, `+11:00` for 7--28 Mar, `+10:00` from 4 Apr; best ten count |
| Protocol Specification | 6 | 20 | `2027-04-02T23:59:00+11:00` | a subroutine as an undocumented API, with conformance tests |
| Interoperation Report | 12 | 20 | `2027-05-30T23:59:00+10:00` | negotiated across the labs of weeks 9--11 |
| Personal Protocol Document *or* Neurotypical Interaction Field Experiment | 12 | 30 | `2027-06-13T23:59:00+10:00` | two routes; the experiment's ethics reflection is graded |

- [x] Each brief: the provocation as a blockquote, what to submit, a
  `marking:` block (weights sum to 100), and spec lines. Field Journal: the
  four-part entry format; no penalty for grammar, spelling or presentation; AI
  talk allowed, writing yours; no word limit. Related to the weeks each draws on.
- [x] `pnpm check`: `spec/assessment.test.ts` green. Commit.

### Task 17: People, policies, home, glossary, 404

- [x] **People:** delete both starter entries and portraits. Create three
  staff, with contact lines that model week 8's institutional protocol: who to
  email for what, a subject-line format, expected reply time. Reassign
  `teachers:` refs across the weeks.
- [x] **Policies:** prerequisite (three references, what they attest), the
  no-diagnosis clause verbatim, extensions (framed with the week 6 budget),
  best ten of eleven, AI use, adjustments (a need can be stated without a label,
  from week 10), how to ask for help, integrity.
- [x] **Home:** `HeroSketch`, the governing sentence, what you will do, who it
  is for (both sides of the room), the four parts I--IV, outcomes from the
  course record, cards to Lectures, Labs, Readings, Assessment, Glossary.
- [x] **Glossary page** from `src/data/terms.ts`, each term linked to its week.
- [x] **404:** drop the hero; a deadpan line in the protocol register.
- [x] `pnpm check`; the policies test green. Commit.

### Task 18: Decks, weeks 1 and 2

- [x] Replace `week-01.deck.mdx`; create `week-02.deck.mdx`. Built from the
  written lecture: same argument, same diagrams (`SequenceDiagram` imported
  into the deck), speaker notes in ```` ```notes ```` fences. At least eight
  slides each. Set `slides:` on both lectures.
- [x] `theme.css`: handwriting annotations, sketch frames, the `quote` and
  `impact` classes in the house style, colours from tokens only.
- [x] In the browser, check every slide at both viewports for fit. Commit.

### Task 19: Art and starter cleanup

- [x] `scripts/render-card.ts`: 1200×630 PNG, the handshake drawing plus the
  code and title outlined as paths (no runtime font dependency in librsvg),
  written to `src/assets/images/card.png`; `socialImageAlt` describes it.
- [x] Delete `hero-home.avif` and both portraits; `git grep STARTER_CONTENT`
  returns nothing.
- [x] `pnpm check:evidence`: only `PROCESS.md` failures remain. Commit.

**As built:** text rasterised through sharp silently fell back to a sans-serif
on macOS, so the card outlines Kalam into paths with opentype.js, pinned to
1.3.4 because 2.0.0 emitted NaN path data for some glyphs.

### Task 20: Verification pass

- [x] `pnpm check` green from a clean `dist/`.
- [x] Browser, 1920×1080 and 390×844, light and dark: the home page, weeks
  1, 6 and 10, a lab, each assessment, the deck, policies, readings, glossary.
  Keyboard through the nav and the deck. No horizontal page scroll.
- [x] Read every page against CLAUDE.md, looking for the failures no test can
  catch: a page addressing one side of the room, an outcome that amounts to
  passing, a week that could swap with another, a sentence that could open any
  page. Fix at the harness level if a failure repeats.
- [x] Commit fixes with the reason each was needed.

**As built:** every one of the 85 built pages was loaded in a 390px iframe and
measured: no horizontal overflow outside the scroll containers the design
allows (diagrams, tables). Spot-checked by screenshot at 1920×1080 and
390×844, light and dark: home, weeks 1, 2, 4, 5, 6 and 10, a lab, the decks.
The prose scan for loaded vocabulary and frequency claims found three length
claims in assessment briefs and one unmarked diagnosing example; all fixed.

### Task 21: Evidence for the student's PROCESS.md

- [ ] `docs/notes/process-evidence.md`: the decisions in order, each with its
  commit hash and the reason, the harness changes and what prompted them, and
  the checks and which promise each protects. It is source material for the
  student's own 400--600 words, not a draft of them.
- [ ] Report what `check:evidence` still needs (PROCESS.md), and that shipping
  (`/ship` makes the repo public) is the student's call.
