# SLOP1562 --- settled design

Every decision fixed so far. `CLAUDE.md` holds the rules; this holds the spec.
Nothing here is built yet: no dependency in this repo installs in the session
where it was written, so **none of it is build-verified**.

## Identity

| | |
| --- | --- |
| Code | `SLOP1562` (level 1; the last three digits are this repo's allocation) |
| Title | Undocumented Protocols: Field Methods in Neurotypical Interoperation |
| Nickname | **NT 101** |
| Session | Semester 1, 2027 |
| Teaching | Tuesday lecture 14:00--16:00, Thursday lab 14:00--15:00 |
| Period | 22 Feb 2027 -- 13 Jun 2027 |
| Weekly hour | **Lab** |
| Tags | social protocol, field methods, communication |

Description (80--300 chars, for `src/course-config.ts`):

> The social protocol everyone runs has no specification, no changelog and no
> maintainer who will admit to writing it. Twelve weeks observing it,
> documenting it, testing the documentation, and deciding which parts of it you
> will run.

The formal title names the protocol *neurotypical* rather than *human* on
purpose: calling it the human protocol concedes that the reader is not one,
which is the premise the course exists to refuse.

## Prerequisite

No prior study. Entry is by **three references from people who know you well**,
attesting either that you would genuinely benefit from this course, or that you
are genuinely interested in how human relationships and communication work.

> No diagnosis is required, and none is accepted as evidence.

That clause is the course's position in one line, and it is why the class is
mixed. It goes on the policies page verbatim.

## Cast

Staffed on **demonstrated understanding of the subject**, not on lived
experience --- convenor and tutors alike. An autistic convenor is not always
available and the course does not pretend otherwise; what it requires is
someone who can read the protocol and teach it.

## Calendar

Weeks 1--7 run 22 Feb -- 9 Apr. **Mid-semester break: two weeks, 12 -- 23 Apr.**
Weeks 8--12 run 26 Apr -- 28 May, where teaching ends. The capstone is due
after that, at 23:59 on Sun 13 Jun, so the course record's `endDate` is
`2027-06-13`, not the last teaching day: `spec/data-integrity.test.ts` fails on
any due date after `endDate`.

| Week | Lecture (Tue) | Lab (Thu) |
| --- | --- | --- |
| 1 | 23 Feb | 25 Feb |
| 2 | 2 Mar | 4 Mar |
| 3 | 9 Mar | 11 Mar |
| 4 | 16 Mar | 18 Mar |
| 5 | 23 Mar | 25 Mar |
| 6 | 30 Mar | 1 Apr |
| 7 | 6 Apr | 8 Apr |
| | *break* | |
| | *break* | |
| 8 | 27 Apr | 29 Apr |
| 9 | 4 May | 6 May |
| 10 | 11 May | 13 May |
| 11 | 18 May | 20 May |
| 12 | 25 May | 27 May |

Tuesday/Thursday teaching keeps every session clear of Easter Monday (29 Mar)
and the ANZAC Day holiday (observed Mon 26 Apr), both Mondays in 2027.

## Where and when

| | |
| --- | --- |
| Lecture | Tuesday 14:00--16:00, Theatre 1, Applied Interaction Building |
| Lab | Thursday 14:00--15:00, Room 2.14, the same building |
| Field Journal | Sunday 23:59, weeks 2--12 |
| Contact | three hours a week |

Two hours for the lecture and one for the lab. The hour is what the labs were
already built to: every run sheet in `sessions` runs 0:00 to 1:00. The two
hours are what `pnpm check:timing` sizes each deck against: 105 minutes of
content in the 120-minute slot, the rest being arrival, the break at 15:00 and
overrun. The speaker notes on the first slide of weeks 1, 4 and 5 already say
the break is at the hour and to announce it, which is the timetable's second
clause.

All of it lives on one page, `/timetable/`, **first in the navigation, before
Lectures**: where to be and when is what a student needs before anything else
on the site is any use. The page carries the identity facts, the week's shape,
the twelve-week calendar, every deadline, the break, the public holidays and
who to ask. The *rules* --- extensions, adjustments, AI use, observing people
--- stay on the policies page and are linked from it, never restated, so there
is one place each fact is true.

**The calendar is generated, never retyped.** The page reads its dates from the
lectures, the labs and the assessments, the Field Journal's eleven
`submissions:` included, so a week that moves moves there too.
`spec/timetable.test.ts` fails if any teaching date or deadline in the course
API is missing from it.

**The undocumented half of a timetable is the point.** A timetable hands you a
room and a start time and leaves you to infer everything else, which is this
course's subject matter happening to the course itself. So the page writes down
what is usually inferred: 14:00 means 14:00 and not ten past; the lecture breaks
at 15:00 for ten minutes, announced in advance rather than called when the room
looks tired; you can leave by the back door without explaining; lectures are
recorded and captioned by Wednesday morning, with nothing to ask for and no
reason to give; labs are not recorded, because week 1's rule about observing
people applies to the room you are sitting in; weeks 1 and 2 are the only labs
that leave it; nothing is expected before the first lecture; and attendance is
not marked, though from week 9 the lab is where the report partner is.

Four public holidays fall inside the teaching weeks: Canberra Day (Mon 8 Mar),
Good Friday (Fri 26 Mar), Easter Monday (Mon 29 Mar) and ANZAC Day, observed
(Mon 26 Apr). None is a Tuesday or a Thursday, which is the reason for the
pattern; `spec/timetable.test.ts` re-derives each weekday rather than taking the
page's word for it.

## The twelve weeks

### I --- Read the protocol

1. **Introduction + The Opening Handshake.** Opens by doing the thing: here is
   "how are you", here is its actual specification, documented in forty minutes
   after a lifetime of nobody writing it down. Carries the course thesis
   explicitly, because a reader who sees only week 1 must not mistake this for
   a remedial course.
2. **The Undocumented Majority + Field Notes Without Pathology.** Why no
   specification exists; the double empathy problem; structured observation
   without the deficit frame. The field journal starts here.
3. **Payload and Envelope.** Indirect speech, hints, implicature --- and a
   protocol that routinely violates its own maxims and calls it politeness.
4. **Latency and Turn-Taking.** Timing, interruption, processing delay. Why a
   pause reads as disagreement. An undocumented timeout.

### II --- Implement selectively

5. **Error Handling and Repair.** Misunderstanding, offence, apology. Scripts
   that actually work. The only subroutine nobody will document.
6. **Masking: Cost Accounting.** Masking works and has a price. Taught as a
   budget, never as an aspiration and never as a failing.
7. **Emergency: Overload, Shutdown, Recovery.** What happens when the week 6
   budget is overspent. Placed immediately before the break on purpose --- the
   break is when it gets used, and rest is a skill the course declines to
   assume anyone was taught.

### III --- Negotiate

8. **Institutional Protocols.** Emails to tutors, office hours, extensions,
   group work. The university specifies everything except how to ask for help.
9. **Escalation Rates.** How closeness actually paces. Rate limits nobody
   publishes.
10. **Disclosure.** Whether, when, to whom, at what cost. See below.
11. **Interoperation, Not Conversion.** Mixed-neurotype groups; the fix is
    bilateral. The class itself is the worked example.

### IV --- Horizon

12. **Advanced Topics and Further Study.** Romance, persuasion, power ---
    sketched, not taught, with the reading to go further.

## Week 10, in detail

Sections: irreversibility; the five audiences; partial disclosure; the timing
trap; and the register break.

**The five audiences** are different transactions and conflating them is the
common mistake --- disability services, a tutor, a group partner, a friend, an
employer, each with its own return and its own cost.

**Partial disclosure** is the week's most useful and least-taught idea: you can
disclose a *need* without the *label*. "I process written instructions much
better than verbal ones" buys the accommodation without the rest.

**The register break** is the sanctioned exception in `CLAUDE.md`. Approved
text:

> Here is the part nobody warns you about.
>
> After you tell someone, they go back through everything. The tutorial where
> you didn't laugh. The email that was too short. The party you left at nine.
> They re-read all of it, and they decide what it meant, and they do not tell
> you they are doing it.
>
> Sometimes this is a relief. A person who thought you were cold for three
> years understands, and something between you gets easier, and you wonder why
> you waited.
>
> Sometimes you lose something. There was a version of you in their head ---
> competent, or funny, or just unremarkable --- and it is replaced by a version
> with an explanation attached. You do not get to choose which one they keep.
> You do not get to take it back.
>
> That risk is real and this course is not going to talk you out of it. It is
> going to make sure you knew it was there.
>
> Right. Mechanics.

## Assessment --- 100%

| Task | Weight | Week | Due |
| --- | --- | --- | --- |
| Field Journal | 30% | 2--12 | Weekly, Sundays 23:59 |
| Protocol Specification | 20% | 6 | Fri 2 Apr 2027 |
| Interoperation Report | 20% | 12 | Sun 30 May 2027, 23:59 |
| Personal Protocol Document *or* Neurotypical Interaction Field Experiment | 30% | 12 | Sun 13 Jun 2027, 23:59 |

**Protocol Specification.** Document one social subroutine as though it were an
undocumented API, with conformance tests.

**Field Journal.** Turned in weekly, weeks 2--12, with at least one entry each
time. Each week's submission is due at 23:59 on that week's Sunday: 7, 14, 21
and 28 Mar; 4 and 11 Apr; then 2, 9, 16, 23 and 30 May. Nothing is due over the
break. Eleven submissions at 3% each, **best ten count** --- one week is
redeemable, because a course that teaches a cost budget and then punishes one
bad week is not taking its own week 6 seriously. No word limit: 50 words or 5000
are both acceptable.
**No penalty for grammar, spelling or presentation.** Talk to an AI as much as
you like; the writing must be yours, which is exactly why the format is
unconstrained --- a fixed word count is what makes generated text convenient.

Each entry, following the shape of a good engineering retro:

1. **What happened** --- one concrete exchange: who, where, what was said.
2. **The rule you inferred** --- stated so someone else could run it.
3. **The test** --- a second instance where you checked it, including failures.
4. **The rule now** --- revised or held, with the reason.

**Interoperation Report.** Negotiate a shared protocol with a partner over the
labs of weeks 9--11; report what you each conceded and what held.

**Personal Protocol Document.** What you run, what you decline, what you need
from others. The capstone the course has been building towards.

**Neurotypical Interaction Field Experiment.** Vary one protocol parameter
deliberately, record what comes back, report it straight. **The ethics
reflection is a graded component**, not an appendix: state what you varied, on
whom, and why it stayed inside the range of ordinary behaviour. The deadpan
answer --- that this is what the majority does to us continuously without
calling it an experiment --- is a real point and is not sufficient on its own.

## Content model

A fifth collection, `readings`, alongside the shipped four. Declared in
`src/content.config.ts`, listed in `graphCollections`, with pages under
`src/pages/readings/`.

It makes each reading a real node with `related:` edges to the weeks that use
it, so the build fails on a week citing a reading that does not exist, and the
list is navigable rather than a bibliography stapled to a page. It also gives
the reading list somewhere to live when it extends past what the slides cover.

## Visual system

Standards-document structure --- numbered clauses, sequence diagrams,
conformance tables --- drawn by hand. Jittered SVG strokes, a handwriting face
against monospace, nothing mechanically straight. Applies to the hero, the
social card, on-page diagrams and the deck theme.

Drawings are build-time SVG from one seeded-jitter module, and the same drawing
appears on a week's page and its deck. The primitives are a sequence diagram, a
timing line, a state machine, a margin note, an envelope, a blank form, a depth
ladder, a diffusion chain and an open-issues register. A week gets a drawing
when it shows a mechanism its prose can't; where the week's signature artefact
is already a populated table, it stays a table.

No raster illustrations and no borrowed visual idiom: the satire is carried in
the course's own hand --- a stamped status, a pencilled margin note, a deadpan
caption under a rigorous drawing --- and is aimed at the protocol, never the
student.

`pnpm check:evidence` rejects the starter artwork, so the hero and social card
must be replaced or deliberately removed.

## Modelling

- **The week's page is the lecture.** Both the lecture and the Lab carry a
  `spec:` block; the lecture's says what a student can now check on
  themselves, the Lab's what leaves the room.
- **The Field Journal is one assessment entry** (`week: 2`, 30%) whose `due` is
  its last Sunday and whose `submissions:` lists all eleven timestamps.
- **The capstone is one entry** carrying both routes, so the weights sum to 100.
- **Every deadline is 23:59 Canberra time**, with the offset that is true on
  the day: `+11:00` up to Sun 28 Mar and for Fri 2 Apr, `+10:00` from Sun 4 Apr,
  when daylight saving ends.
- **Outcomes** live in the course record's `learningOutcomes`.
- **Cast:** three fictional staff, a convenor and two tutors, with no
  portraits.
- **Glossary:** each protocol term with the week that introduces it, published
  at `/glossary/`.
- **Every week has a deck**, built from its written lecture, at `/decks/week-NN/`
  and linked from the lecture's `slides:`. The design first scoped decks to
  weeks 1 and 2; a lecture without slides turned out to be the one artefact of a
  week that had no second register, so all twelve have one.

## Still open

- `PROCESS.md`, 400--600 words, every claim citing a real commit --- the
  student's own account, and not for an agent to write.

Settled and built since this list was first written: the reading list and the
twelve literature reviews, with every citation checked against its source; the
decks; the cast, home page, policies page and glossary; the timetable.
