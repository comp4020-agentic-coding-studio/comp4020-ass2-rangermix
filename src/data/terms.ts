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
];
