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
      "An opening exchange that confirms a connection is up before anything else is said. In the corridor version: “How are you?” / “Good, you?”",
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
      "Garfinkel's term for the unstated assumptions an ordinary situation runs on. Breaching them can make them visible.",
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
      "A four-part record: what happened, the rule you inferred, a test on a second exchange, the rule now. It describes an exchange; it does not diagnose a person. Predictions about what would have happened stay labelled as predictions.",
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
      "The point at which a listener starts inferring meaning from a gap. In the telephone calls studied by Kendrick and Torreira, rejections outnumbered acceptances after gaps of 700 ms or more. This is a pattern, not a rule for decoding any one pause.",
  },
  {
    term: "hold token",
    week: 4,
    definition:
      "A sound or phrase that fills a gap to mean “still here, thinking”: “hm, let me think about that.” A standing hold token explains in advance how to read your pauses; it is a recommendation to try, not a tested result.",
  },
  {
    term: "repair",
    week: 5,
    definition:
      "The protocol's error handling for trouble in speaking, hearing or understanding. In the twelve-language study used in week 5, a listener flagged trouble about once every 1.4 minutes.",
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
      "Five columns: subroutine, context, what it bought, cost in recovery hours, and pressure — chosen, expected or enforced. A switching row names the from/to contexts; its pressure may be “n/a — transition” when no separate social demand applies. Blank is not a pressure value.",
  },
  {
    term: "recovery hours",
    week: 6,
    definition:
      "The ledger's planning unit: your estimate of recovery time after a subroutine in a particular context. Revise it against experience. Time spent camouflaging and recovery time are different quantities; the research supplies no conversion.",
  },
  {
    term: "switching charge",
    week: 6,
    definition:
      "A separate ledger estimate for changing how much you mask between contexts. Record the from/to contexts and any cost you noticed; this is not a fixed fee that everyone pays. No switch observed is a valid entry.",
  },
  {
    term: "budget",
    week: 6,
    definition:
      "A plan for which subroutines to run or decline, using estimated costs, recovery time and the pressure on each choice. Keep a subroutine when declining costs more than you can afford. Masking is never an aspiration or a failing.",
  },
  {
    term: "overload",
    week: 7,
    definition:
      "Input arriving faster than it can be processed. Week 7 places it on a short-term planning scale; that is not a recovery deadline or a research definition.",
  },
  {
    term: "shutdown",
    week: 7,
    definition:
      "Output stopping: words are hard to find, messages go unanswered. Week 7 uses this as a planning label, not a recovery deadline or a research definition.",
  },
  {
    term: "autistic burnout",
    week: 7,
    definition:
      "Defined with autistic adults as chronic exhaustion, loss of skills and reduced tolerance to stimulus, linked to cumulative load and barriers to relief. The studies distinguish it from depression and from work burnout.",
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
      "How formal or casual a message is. In the 2009 US study used in week 8, casual email wording explained a large share of how instructors judged the student.",
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
      "Telling someone something about yourself. Research links disclosure and liking, but another person's disclosure does not oblige you to match it.",
  },
  {
    term: "depth scale",
    week: 9,
    definition:
      "The course's five levels of disclosure, from logistics (0) to things few people know (4). A model for discussing voluntary escalation; neither the levels nor their order have been validated as a research instrument.",
  },
  {
    term: "rate limit",
    week: 9,
    definition:
      "For voluntary escalation, the course suggests staying within one level of the other person's last disclosure, stepping up one level at a time and waiting. Holding a lower level, stepping down or passing is always available; their disclosure sets no minimum for yours. The numerical rule is untested.",
  },
  {
    term: "responsiveness",
    week: 9,
    definition:
      "Whether the person who disclosed came away feeling received. The field the depth scale doesn't have, and a partial mediator between disclosure and intimacy.",
  },
  {
    term: "follow-up question",
    week: 9,
    definition:
      "A question that picks up what the other person just said, as opposed to one that switches topic. A turn that costs no disclosure of your own.",
  },
  {
    term: "step-down",
    week: 9,
    definition:
      "A one-turn repair for going past a rate limit: name it lightly and return to a lower level.",
  },
  {
    term: "anticipated stigma",
    week: 10,
    definition:
      "What you expect would happen if people knew. Distinct from concealment effort or disclosure status; one of four predictors of distress in the study covering thirteen concealable identities. It does not measure the price of telling versus not telling.",
  },
  {
    term: "the five audiences",
    week: 10,
    definition:
      "Disability services, a tutor, a group partner, a friend, an employer: five different disclosure transactions, each with its own return and cost.",
  },
  {
    term: "partial disclosure",
    week: 10,
    definition:
      "Disclosing a need without the label: “I process written instructions much better than verbal ones.” You state the need without naming a diagnosis. The course’s synthesis, not a tested intervention.",
  },
  {
    term: "the timing trap",
    week: 10,
    definition:
      "A disclosure after a problem can be heard as an excuse. The course suggests stating a need early as one option, before a problem needs explaining.",
  },
  {
    term: "irreversibility",
    week: 10,
    definition: "Once told, a disclosure cannot reliably be taken back. It can change how the listener reads earlier exchanges; you do not control that reading.",
  },
  {
    term: "interoperation",
    week: 11,
    definition:
      "Two implementations agreeing a shared protocol for the exchange at hand: what each sends, what each accepts, and how either flags a mismatch. Both concede something; neither replaces itself.",
  },
  {
    term: "conversion",
    week: 11,
    definition:
      "One implementation replacing itself to talk to another: everywhere, indefinitely, with the cost landing in one person's week 6 ledger.",
  },
  {
    term: "rapport signals",
    week: 11,
    definition:
      "The visible signs taken to show engagement, such as mutual gaze and backchannelling. Implementation-specific, not a universal readout.",
  },
  {
    term: "bilateral protocol",
    week: 11,
    definition:
      "A written agreement between two people: clauses, who concedes each, how either checks it, and a signal for flagging a mismatch.",
  },
  {
    term: "open issue",
    week: 12,
    definition:
      "A known problem logged and deliberately left out of scope, with where its documentation starts. This course has three: romance, persuasion, power.",
  },
  {
    term: "errata",
    week: 12,
    definition:
      "The known issues in the course's own models, published so they can be tested rather than trusted.",
  },
];
