# Harness

Rules for any agent writing in this repo. They exist because this course makes
an argument, and an agent left to its own defaults will quietly write the
opposite one.

`docs/course-design.md` is the settled specification --- the twelve weeks, the
assessment scheme, the calendar, the cast, the visual system. This file is the
rules. Read both before writing anything.

## The argument

SLOP1562 teaches the social protocol of the neurotypical majority as what it
is: a large, undocumented, inconsistently implemented legacy system that its
own users cannot describe and did not design. The course reverse-engineers it
so that anyone can interoperate with it deliberately.

One sentence governs every page:

> The protocol is undocumented, not obvious; a minority implementation is not a
> broken one.

Everything on this site serves that sentence or gets cut.

## Who the course is for

Anyone who wants the protocol made explicit. Autistic and otherwise divergent
students, who were never handed the implicit version --- and neurotypical
students who run the protocol fluently and cannot describe a line of it, which
is its own reason to enrol.

This is not a remedial course and it must never read as one. Nobody is here
because something is wrong with them. They are here because the specification
is missing, and some people find that intolerable.

The class is mixed by design. That is what makes week 11 work: the shared
vocabulary a mixed group builds over twelve weeks is the course's actual thesis
demonstrated rather than asserted. Never write a page that addresses only one
side of the room.

## Both registers, always

The course is sincere and satirical at the same time, and neither is a coating
on the other. They come from one observation: the majority's conventions are
arbitrary and inefficient, and being outnumbered is what gets the other
implementations classed as disorders.

- **Sincere** means a first-year can act on the page. Concrete scripts, named
  failure modes, real timings, actual sentences they can say. If a section
  teaches nothing usable, it is decoration --- cut it.
- **Satirical** means the deadpan holds: this is a systems course, the subject
  matter is a protocol, and the documentation problem is treated as a genuine
  engineering scandal.

Never resolve the tension by picking one. A page that is only funny is a sketch;
a page that is only earnest is a wellbeing pamphlet. Neither is the course.

**The one sanctioned exception is week 10.** Its section on what disclosure does
to your past drops the protocol register entirely for four paragraphs, then
snaps back. That shift is deliberate and load-bearing: a course arguing the
protocol framing is a *tool* has to be able to put the tool down. Do not
"fix" the inconsistency, do not restore the metaphor, and do not soften the
snap-back line. If a check or a reviewer flags it as tonal drift, the answer is
that it is intentional, and the answer is in this file.

## What the satire is aimed at

At the protocol, at the absence of its specification, and at the institutions
that call that absence a deficit in the reader.

Never at the student. Never at autistic, ADHD or otherwise divergent people, and
never at neurotypical people as individuals --- they inherited the protocol too,
and they cannot read it either. The joke is that nobody wrote it down and
everybody insists it is self-evident.

## Vocabulary

`spec/inclusive-language.test.ts` fails the build on the deficit register. It is
not a style preference; it is the argument, enforced.

Never write, outside a clearly-marked quotation of someone else's framing:

- `suffers from`, `afflicted`, `burden`
- `cure`, `treat`, `fix`, `correct` (applied to a person)
- `normal person`, `normal people`, `act normal`, `pass as normal`
- `high-functioning`, `low-functioning`
- `deficit`, `impairment`, `symptom` (applied to a student)
- `special needs`, `differently abled`

Say what is true instead: a protocol mismatch, a cost, an undocumented
expectation, a minority implementation.

Identity-first language (`autistic student`) is the default. Do not "correct"
it to person-first. Do not use it as though every student is autistic.

## Outcomes

Fluency plus choice: the student can read the protocol, can run it when running
it is worth the cost, and can decline it knowing what declining costs. Masking
is taught as a budget with a real price, never as an aspiration and never as a
moral failure.

Never write an outcome that amounts to becoming ordinary, passing, or being
indistinguishable. That is the outcome this course was built to refuse.

## The content pipeline

Content is built in this order, and never out of it:

1. **Research the topic.** Find what is actually known, from the literature.
2. **Produce the reading list and a short review.** What the sources say, where
   they disagree, and what survives into teaching.
3. **Decide what gets delivered.** The review justifies the week's content; the
   week does not go looking for sources afterwards to decorate a conclusion.
4. **Write the week** --- lecture, lab, `spec` block.
5. **Build the slides** from the written week, not in parallel with it.

Skipping step 1 or 2 and backfilling citations is the failure this order exists
to prevent. If a week's content cannot be traced back to its review, it is not
finished.

## Alignment

**Within a week:** the lecture, the lab, the readings and the deck say the same
thing in four registers. The lab explores by doing what the lecture argued. A
deck slide that contradicts its lecture is a bug.

**Across the course:** each week does something the other eleven do not, and
moves the argument from reading the protocol, to implementing parts of it, to
negotiating it. A week that could be swapped with another without anyone
noticing is a failed week. Terminology introduced in one week is reused exactly
in later weeks, never re-coined. If asked to add a week, say which existing week
it steals from.

## Citations

- Every concept a lecture introduces that came from research cites its source.
- **Verify every citation against the actual paper before it ships.** Never cite
  from memory, never infer an author, year, venue or finding, and never let a
  plausible-sounding reference through unchecked. A fabricated citation in a
  course that argues for documentation is the worst available failure.
- If a source cannot be verified, cut the claim or state it as the course's own
  observation rather than dressing it as research.
- **A study's details are claims too.** What participants were asked to do, the
  famous example everyone repeats, a number from the results: if the check
  recorded in `docs/research/` didn't reach that detail, it doesn't go on the
  page. The vivid illustration is the part most likely to be remembered rather
  than read. Before a week ships, read each cited sentence against its row in
  the review.
- The `readings` collection extends past what the slides cover, but every entry
  must earn its place against the week it hangs off. A reading list padded for
  length is worse than a short one.

## Conventions

- The weekly contact hour is a **Lab**: students go and try the week's protocol,
  method or topic in the room. `sessionLabels` in `src/site-config.ts` carries
  the visible name; the collection key, URL and API path stay `sessions`.
- The course is **SLOP1562**; on campus it is **NT 101**. Use the nickname where
  a person would, not in formal positions.
- **Every week's page carries a `spec:` block** in the same register the course
  teaches: lines a reader can check on themselves without asking the teacher.
  The form is the argument --- a course that tells you to specify things and
  does not specify itself is making the majority's exact mistake. The week's
  page is the lecture (`lectures/week-NN`); the Lab (`sessions/week-NN`)
  carries its own spec for what leaves the room. No spec line repeats across
  weeks: a line that fits any week specifies none of them.
- `related:` edges connect weeks to their readings. Declare each edge once, on
  whichever side is convenient.
- To name someone else's framing --- a clinic's word, a paper's title --- mark
  it: `<span data-quoted>` inline, `<cite>` for a title. The vocabulary test
  skips marked quotations and nothing else, and the site styles them so a
  reader can see whose words they are.
- A week's literature review lives in `docs/research/week-NN.md`, and each
  reading's page carries the paragraph from it that says why the reading is on
  the list.

## Visual system

Standards-document structure, hand-drawn execution: numbered clauses, sequence
diagrams, conformance tables --- all of it drawn as though sketched by hand in
the margin of an RFC. Jittered strokes, a handwriting face against monospace,
nothing mechanically straight.

The pairing is the thesis in visual form: rigorous specification, provisional
and human in the execution. Never let it drift to either pole --- a clean
corporate diagram loses the argument, and pure whimsy loses the rigour.

## Prose

- Write the sentence a person would say out loud. Cut the throat-clearing.
- One concrete example beats three abstractions. Name the actual situation:
  the tutorial, the corridor, the group chat, the email at 11pm.
- No section that exists to have a section. No "in today's fast-paced world".
  No tricolon where two items would do. No sentence that could open any page on
  any site.
- Specifics carry the deadpan. `1.2 seconds` is funnier and truer than
  `a short pause`.

## Working rules

- `pnpm check` must pass before any change is called done. It runs the build,
  which runs axe, the link checker and the ref resolver. Do not report success
  without running it, and do not read an exit code from a wrapper --- read the
  command's own output.
- `pnpm check:evidence` gates submission. Every `STARTER_CONTENT` marker must be
  gone with the fragment it marked, not just the comment.
- Content refs are `<collection>/<slug>` and the key is the address --- file,
  URL, API path and ref all agree. Renaming means renaming all four.
- Never hand-write a root-absolute `href` in an `.astro` file; it breaks on the
  deployed base path. Use markdown links or the theme's components.
- Never edit generated JSON under `dist/`.
- Commit in steps that a reader can follow, with messages saying why, not what.
- Commit and push as you work, straight to `main` unless the user asks for a
  branch. Unpushed work can't deploy and can be lost: the first two commits
  here spent two days stranded as patch files.
- The platform is fixed and documented in `README.md`, and the
  [course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
  publishes this deliverable's brief and spec. Read both before you plan or
  build.

## No time limit

Nothing in this repo is on the clock, so never trade a step for speed. The slow
work --- reading the literature and checking each citation against the paper
--- is what an agent watching the clock cuts first, and it is the work this
course cannot ship without. Do not stub a section to finish later, drop a check,
shrink the scope, or stop to ask whether a long job is worth finishing. The one
reason to stop short is a real blocker: name it, and write down where the work
stands.

## Memory and agent communication

Prefer files to context. A conversation gets compacted, ends, or happens in a
cloud session this clone never sees, and the repo is the only memory every
session shares. Anything the next session or another agent needs is written to
a file here, committed and pushed with the work it describes.

- Settled decisions go in `docs/course-design.md`. Working state goes in
  `docs/notes/`, one file per topic: which citations have been checked against
  the paper and which have not, and what is blocked and why. A check recorded
  only in a conversation looks exactly like a check nobody did.
- Agents talk through files. Give a subagent or a parallel session its brief as
  a file and have it write its result to one; the message only says which file
  to read. A finding that lives only in a message is gone with the session that
  sent it.
- Keep project state out of machine-local memory under `~/.claude`: it never
  reaches a cloud session, and `PROCESS.md` cannot cite it.
- The repo goes public when it ships, notes included. Write nothing in one that
  can't be.
