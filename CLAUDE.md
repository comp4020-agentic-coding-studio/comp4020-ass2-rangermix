# Harness

Rules for any agent writing in this repo. They exist because this course makes
an argument, and an agent left to its own defaults will quietly write the
opposite one.

## The argument

SLOP1562 teaches the social protocol of the neurotypical majority as what it
is: a large, undocumented, inconsistently implemented legacy system that its
own users cannot describe and did not design. The course reverse-engineers it
so that students can interoperate with it deliberately.

One sentence governs every page:

> The protocol is undocumented, not obvious; the student is a minority
> implementation, not a broken one.

Everything on this site serves that sentence or gets cut.

## Both registers, always

The course is sincere and satirical at the same time, and neither is a coating
on the other. They come from one observation: the majority's social conventions
are arbitrary and inefficient, and being outnumbered is what gets the other
implementations classed as disorders.

- **Sincere** means a first-year autistic student can act on the page. Concrete
  scripts, named failure modes, real timings, actual sentences they can say.
  If a section teaches nothing usable, it is decoration --- cut it.
- **Satirical** means the deadpan holds: this is a systems course, the subject
  matter is a protocol, and the documentation problem is treated as a genuine
  engineering scandal.

Never resolve the tension by picking one. A page that is only funny is a sketch;
a page that is only earnest is a wellbeing pamphlet. Neither is the course.

## What the satire is aimed at

At the protocol, at the absence of its specification, and at the institutions
that call that absence a deficit in the reader.

Never at the student. Never at autistic, ADHD or otherwise divergent people, and
never at the majority as individuals --- they inherited the protocol too, and
they cannot read it either. The joke is that nobody wrote it down and everybody
insists it is self-evident.

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

Identity-first language (`autistic student`) is the default, because that is
what this course's constituency asked for. Do not "correct" it to person-first.

## Outcomes

The course's outcome is fluency plus choice: the student can read the protocol,
can run it when running it is worth the cost, and can decline it knowing what
declining costs. Masking is taught as a budget with a real price, never as an
aspiration and never as a moral failure.

Never write an outcome that amounts to becoming ordinary, passing, or being
indistinguishable. That is the outcome this course was built to refuse.

## Twelve weeks, one argument

Each week must do something the other eleven do not, and must move the argument
from reading the protocol, to implementing parts of it, to negotiating it.
A week that could be swapped with another week without anyone noticing is a
failed week. If asked to add a week, say which existing week it steals from.

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
  without running it.
- `pnpm check:evidence` gates submission. Every `STARTER_CONTENT` marker must be
  gone with the fragment it marked, not just the comment.
- Content refs are `<collection>/<slug>` and the key is the address --- file,
  URL, API path and ref all agree. Renaming means renaming all four.
- Never hand-write a root-absolute `href` in an `.astro` file; it breaks on the
  deployed base path. Use markdown links or the theme's components.
- Never edit generated JSON under `dist/`.
- Commit in steps that a reader can follow, with messages saying why, not what.
- The platform is fixed and documented in `README.md`, and the
  [course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
  publishes this deliverable's brief and spec. Read both before you plan or
  build.
