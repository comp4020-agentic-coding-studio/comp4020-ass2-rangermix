import { describe, expect, it } from "vitest";
import { byWeek, normalise, pageFor, readPage, visibleText } from "./support/site";

// Two passages in docs/course-design.md are settled word for word, and both
// are the kind an agent "improves": a policy line that reads as abrupt, and a
// register break that reads as tonal drift. CLAUDE.md says both are deliberate.
// These tests make them hard to lose quietly.

const NO_DIAGNOSIS = "No diagnosis is required, and none is accepted as evidence.";

const REGISTER_BREAK = [
  "Here is the part nobody warns you about.",
  "After you tell someone, they go back through everything. The tutorial where you didn't laugh. The email that was too short. The party you left at nine. They re-read all of it, and they decide what it meant, and they do not tell you they are doing it.",
  "Sometimes this is a relief. A person who thought you were cold for three years understands, and something between you gets easier, and you wonder why you waited.",
  "Sometimes you lose something. There was a version of you in their head --- competent, or funny, or just unremarkable --- and it is replaced by a version with an explanation attached. You do not get to choose which one they keep. You do not get to take it back.",
  "That risk is real and this course is not going to talk you out of it. It is going to make sure you knew it was there.",
  "Right. Mechanics.",
];

describe("the prerequisite", () => {
  it("states the no-diagnosis clause on the policies page, verbatim", () => {
    expect(normalise(visibleText(readPage("policies/index.html")))).toContain(NO_DIAGNOSIS);
  });
});

describe("week 10's register break", () => {
  const week10 = byWeek("lectures", 10)[0];
  const text = () => normalise(visibleText(pageFor(week10.id)));

  it("is on the week 10 lecture page, every paragraph intact", () => {
    for (const paragraph of REGISTER_BREAK) expect(text()).toContain(normalise(paragraph));
  });

  it("comes in order, and snaps back to the protocol register", () => {
    const at = REGISTER_BREAK.map((paragraph) => text().indexOf(normalise(paragraph)));
    expect(at).toEqual([...at].sort((a, b) => a - b));
    expect(at.at(-1)! - at.at(-2)!, "nothing softens the snap-back").toBeLessThan(
      normalise(REGISTER_BREAK.at(-2)!).length + 2,
    );
  });

  it("happens once, not as a repeated device", () => {
    const occurrences = text().split(normalise(REGISTER_BREAK[0])).length - 1;
    expect(occurrences).toBe(1);
  });
});
