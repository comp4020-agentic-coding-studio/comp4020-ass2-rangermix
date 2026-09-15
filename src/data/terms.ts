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
];
