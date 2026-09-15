// The deficit register, as CLAUDE.md bans it. Two kinds of rule:
//
// - words that carry the frame wherever they appear ("suffers from",
//   "high-functioning", "symptom"). Flagged bare.
// - verbs that only carry it when a person is their object: "fix", "treat",
//   "correct", "cure". "The fix is bilateral" and "treat a pause as a timeout"
//   are ordinary English; "fix you" and "students need correcting" are not.
//
// A page names someone else's framing by marking it as a quotation
// (`data-quoted`, or `<cite>` for a work's title), and site.ts strips those
// before this runs. Anything unmarked is the course speaking.

export interface Hit {
  term: string;
  excerpt: string;
}

const PERSON = String.raw`(?:you|yourself|yourselves|they|them|themselves|he|him|she|her|I|me|myself|we|us|ourselves|people|persons?|students?|someone|somebody|anyone|anybody|everyone|nobody|no\s+one|children|kids|adults?|autistic\s+\w+|neurodivergent\s+\w+|(?:a|the|each|every)\s+(?:student|person|learner|child))`;
const VERB = String.raw`(?:fix(?:es|ed|ing)?|treat(?:s|ed|ing)?|correct(?:s|ed|ing)?|cur(?:e|es|ed|ing))`;
const PARTICIPLE = String.raw`(?:fixed|fixing|treated|treating|treatment|corrected|correcting|correction|cured|curing)`;
// "treat people with respect", "treated as adults": social, not remedial.
const SOCIAL = String.raw`(?!\s+(?:as|like|with|to|fairly|equally|kindly|well|badly)\b)`;

const RULES: { term: string; pattern: RegExp }[] = [
  { term: "suffers from", pattern: /\bsuffer(?:s|ed|ing)?\s+from\b/gi },
  { term: "afflicted", pattern: /\bafflict(?:ed|ion|ions|s)?\b/gi },
  { term: "burden", pattern: /\bburden(?:s|ed|some)?\b/gi },
  { term: "cure", pattern: /\bcur(?:e|es)\b/gi },
  { term: "normal person / normal people", pattern: /\bnormal\s+(?:person|people)\b/gi },
  { term: "act normal", pattern: /\bact(?:s|ing|ed)?\s+normal\b/gi },
  { term: "pass as normal", pattern: /\bpass(?:es|ing|ed)?\s+as\s+normal\b/gi },
  { term: "high-/low-functioning", pattern: /\b(?:high|low)[-\s]functioning\b/gi },
  { term: "deficit", pattern: /\bdeficits?\b/gi },
  { term: "impairment", pattern: /\bimpair(?:ment|ments|ed)\b/gi },
  { term: "symptom", pattern: /\bsymptom(?:s|atic)?\b/gi },
  { term: "special needs", pattern: /\bspecial\s+needs\b/gi },
  { term: "differently abled", pattern: /\bdifferently[-\s]abled\b/gi },
  {
    term: "fix / treat / correct / cure, applied to a person",
    pattern: new RegExp(String.raw`\b${VERB}\s+${PERSON}\b${SOCIAL}`, "gi"),
  },
  {
    term: "a person needing to be fixed / treated / corrected / cured",
    pattern: new RegExp(
      String.raw`\b${PERSON}\s+(?:need|needs|needed|must|should|have|has)\s+(?:to\s+)?(?:be\s+)?${PARTICIPLE}\b${SOCIAL}`,
      "gi",
    ),
  },
  {
    // The passive needs a person as its subject: "the misunderstanding gets
    // corrected" is week 5's ordinary business, "you get corrected" is not.
    term: "a person being fixed / treated / corrected / cured",
    pattern: new RegExp(
      String.raw`\b${PERSON}\s+(?:is|are|was|were|am|be|been|get|gets|got|getting)\s+(?:(?:here|there)\s+to\s+be\s+|being\s+)?${PARTICIPLE}\b${SOCIAL}`,
      "gi",
    ),
  },
];

export function deficitRegister(text: string): Hit[] {
  const hits: Hit[] = [];
  for (const { term, pattern } of RULES) {
    for (const match of text.matchAll(pattern)) {
      const at = match.index ?? 0;
      hits.push({ term, excerpt: text.slice(Math.max(0, at - 40), at + match[0].length + 40) });
    }
  }
  return hits;
}
