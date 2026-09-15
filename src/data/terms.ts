// The course's own vocabulary, each term with the week that introduces it.
//
// A course that argues for documentation specifies its own terms. CLAUDE.md
// requires a term introduced in one week to be reused exactly in later weeks,
// never re-coined; this list is what that rule is checked against, and
// /glossary/ publishes it for students.

export interface Term {
  term: string;
  week: number;
  definition: string;
}

export const terms: Term[] = [
  {
    term: "protocol",
    week: 1,
    definition:
      "The social rules the majority runs in conversation and interaction: large, undocumented, inconsistently implemented, and described by nobody who runs it.",
  },
  {
    term: "implementation",
    week: 1,
    definition:
      "One person's way of running the protocol. The majority implementation is the common one, not the correct one; a minority implementation is not a broken one.",
  },
  {
    term: "handshake",
    week: 1,
    definition:
      "The opening exchange that confirms a connection is up before anything else is said. “How are you?” / “Good, you?” is the flagship.",
  },
  {
    term: "token",
    week: 1,
    definition:
      "A reply that fills a slot in the protocol rather than answering the words of a question. “Good” in the handshake is a token, not a status report.",
  },
  {
    term: "fluency plus choice",
    week: 1,
    definition:
      "The course's outcome: able to read the protocol, run a part of it when running it is worth the cost, and decline a part of it knowing what declining costs.",
  },
  {
    term: "background expectancies",
    week: 2,
    definition:
      "Garfinkel's term for the unstated assumptions an ordinary situation runs on. They show only when breached, which is why the protocol's fluent runners can't state it.",
  },
  {
    term: "double empathy problem",
    week: 2,
    definition:
      "Milton's name for a misunderstanding between people of different implementations: it is mutual, a problem of reciprocity, not one party's missing capacity.",
  },
  {
    term: "mismatch",
    week: 2,
    definition:
      "A failure between two implementations. It has two sides by definition, and a note that records only one is incomplete.",
  },
  {
    term: "field note",
    week: 2,
    definition:
      "A four-part record: what happened, the rule you inferred, the test, the rule now. It describes an exchange; it does not diagnose a person.",
  },
  {
    term: "asleep test",
    week: 2,
    definition:
      "If a sentence would still be true of the person while they are asleep, it is about the person, not the exchange. Rewrite it.",
  },
  {
    term: "payload",
    week: 3,
    definition: "What a speaker needs you to understand or do.",
  },
  {
    term: "envelope",
    week: 3,
    definition:
      "How a payload is wrapped: the words used instead of it, and the conversational maxim those words bend to get there.",
  },
  {
    term: "plausible deniability",
    week: 3,
    definition:
      "Pinker, Nowak and Lee's account of why envelopes are sent: an indirect request can be declined without either side acknowledging a refusal.",
  },
  {
    term: "over-decoding",
    week: 3,
    definition: "Treating a sentence as an envelope when there was no payload inside it.",
  },
  {
    term: "latency",
    week: 4,
    definition:
      "The gap between the end of one turn and the start of the next. Ordinarily of the order of 200 ms.",
  },
  {
    term: "timeout",
    week: 4,
    definition:
      "The point at which a listener stops waiting and starts inferring meaning from a gap. Not a hard number; by 700 ms a no is more likely than a yes, and listeners have learned it.",
  },
  {
    term: "hold token",
    week: 4,
    definition:
      "A sound or phrase that fills a gap to mean “still here, thinking”: “hm, let me think about that.” A standing hold token, said once, resets the timeout for a whole relationship.",
  },
  {
    term: "repair",
    week: 5,
    definition:
      "The protocol's error handling for trouble in speaking, hearing or understanding. Routine: a listener flags trouble about once every 1.4 minutes.",
  },
  {
    term: "repair initiator",
    week: 5,
    definition:
      "The move that flags trouble. Open request (“huh?”), restricted request (“which Thursday?”), or restricted offer (“this Thursday?”). Choose the most specific available.",
  },
  {
    term: "subroutine",
    week: 5,
    definition:
      "A named, bounded part of the protocol you can run on purpose: the handshake, repair, an apology. Weeks 6 and 7 count what each one costs.",
  },
  {
    term: "masking",
    week: 6,
    definition:
      "Running a subroutine you wouldn't run by default, so that you will be read a particular way. The research word is camouflaging.",
  },
  {
    term: "ledger",
    week: 6,
    definition:
      "A record of masked subroutines: context, what each bought, its cost in recovery hours, and the pressure it was run under.",
  },
  {
    term: "recovery hours",
    week: 6,
    definition:
      "The ledger's planning unit: an honest estimate of how long a subroutine takes to recover from. A guess, not a measured price.",
  },
  {
    term: "switching charge",
    week: 6,
    definition:
      "The ledger line for changing how much you mask between contexts, which carries a cost of its own.",
  },
  {
    term: "budget",
    week: 6,
    definition:
      "What you can spend on masked subroutines before recovery runs out. Masking is taught as a budget: never an aspiration, never a failing.",
  },
  {
    term: "overload",
    week: 7,
    definition:
      "Input arriving faster than it can be processed. Recovered from in hours. The course's distinction, not a research definition.",
  },
  {
    term: "shutdown",
    week: 7,
    definition:
      "Output stopping: words are hard to find, messages go unanswered. Recovered from in a day or so. The course's distinction, not a research definition.",
  },
  {
    term: "autistic burnout",
    week: 7,
    definition:
      "Defined with autistic adults: chronic exhaustion, loss of skills, reduced tolerance to stimulus, from cumulative load with no way to get relief. Distinct from depression and from work burnout.",
  },
  {
    term: "runbook",
    week: 7,
    definition:
      "Decisions made in advance, by the version of you who can make them, for the version who can't: early signs, first actions, pre-written messages, who gets told, what gets dropped, recovery.",
  },
  {
    term: "recovery experiences",
    week: 7,
    definition:
      "Sonnentag and Fritz's four kinds of recovery from work: detachment, relaxation, mastery and control. A planning checklist, not a treatment.",
  },
  {
    term: "register",
    week: 8,
    definition:
      "How formal or casual a message is. Institutions run on an undocumented register, and how casual an email was explained a large share of how instructors judged the student.",
  },
  {
    term: "specimen",
    week: 8,
    definition:
      "A worked example of a message that meets its specification, with each clause it satisfies labelled.",
  },
  {
    term: "disclosure",
    week: 9,
    definition:
      "Telling someone something about yourself. The engine of closeness: disclosing, being disclosed to, and liking feed each other.",
  },
  {
    term: "depth scale",
    week: 9,
    definition:
      "The course's five levels of disclosure, from logistics (0) to things few people know (4). A working model, not a research instrument.",
  },
  {
    term: "rate limit",
    week: 9,
    definition:
      "The pace of escalation the other person can match: stay within one level of their last disclosure, step up one level at a time, and wait for them to step.",
  },
  {
    term: "step-down",
    week: 9,
    definition:
      "A one-turn repair for going past a rate limit: name it lightly and return to a lower level.",
  },
];
