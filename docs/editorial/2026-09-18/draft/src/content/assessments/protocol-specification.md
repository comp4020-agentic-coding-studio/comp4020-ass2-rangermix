---
title: Protocol Specification
description: "Document one social subroutine as though it were an undocumented API, with conformance tests a stranger could run by watching."
week: 6
due: 2027-04-02T23:59:00+11:00
weight: 20
marking:
  mode: weighted
  criteria:
    - name: "Precision: the subroutine is specified tightly enough to implement"
      weight: 35
    - name: "Conformance tests: each is observable without asking anyone what they meant"
      weight: 25
    - name: "Implementations: at least two variants documented, neither ranked as correct"
      weight: 20
    - name: "Grounding: built from your own observations, with journal entries cited"
      weight: 20
spec:
  - "The document names one subroutine and states its scope: where it runs, and between whom."
  - "It specifies the messages in order, what counts as a valid response to each, and any timing that matters."
  - "It includes at least five conformance tests, each checkable by someone watching the exchange."
  - "It documents at least two implementations of the subroutine without calling either one correct."
  - "It cites at least two of your own Field Journal entries as evidence."
related:
  - lectures/week-01
  - lectures/week-05
  - lectures/week-06
---

> Pick one social subroutine that nobody documented, and document it.

Week 1 specified the opening handshake. Do the same for a subroutine of your
choice. Treat it as an undocumented API: a
system everyone calls, that nobody wrote a reference for.

Good subroutines are small and frequent. Some that work well: leaving a
conversation at a party; declining an invitation from a group chat; the "sorry,
can I just…" interruption in a tutorial; asking a stranger to swap seats;
splitting a bill. A row from your week 6 ledger is a strong candidate, because
you already know what it costs.

A subroutine too big to specify (a first date, a job interview) is a sign
you're writing week 12's open issues, not this.

## What a strong response does

It is **precise enough to implement**. Someone who has never run the
subroutine could read your document and run it passably.

It **documents variation without ranking it**. The majority implementation
goes in, and so do the others you've observed. "Some people close a
conversation with a reason ('I'd better go find my friend'); some close it
without one ('Great talking to you!')" is a specification. "The correct way is"
isn't.

It **knows its limits**. A known-issues section is a sign of a good
specification, not a weak one.

## What you submit

A single document, with these sections:

1. **Name and scope.** The subroutine, where it runs, between whom.
2. **Preconditions.** What has to be true before it starts.
3. **Messages.** In order, with what counts as a valid response to each. A
   hand-drawn sequence diagram, photographed, is welcome.
4. **Timing.** Any timing that matters, and how you know (week 4).
5. **Errors and repair.** What goes wrong, and how the protocol recovers
   (week 5).
6. **Implementations.** At least two variants.
7. **Conformance tests.** At least five lines, each checkable by someone
   watching the exchange: "The closer names a next action before leaving" is
   checkable. "The closer is polite" isn't.
8. **Known issues.**

Length is whatever the specification needs. Aim for two to four pages, and go
longer only if the subroutine demands it.
Grammar and presentation aren't marked beyond whether the specification can be
read.

Due **Friday 2 April 2027, 23:59** Canberra time: the Friday of week 6.
