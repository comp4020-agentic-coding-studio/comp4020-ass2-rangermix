import type { ImageMetadata } from "astro";
import home from "../assets/images/illustrations/home.png";
import week01 from "../assets/images/illustrations/week-01.png";
import week02 from "../assets/images/illustrations/week-02.png";
import week03 from "../assets/images/illustrations/week-03.png";
import week04 from "../assets/images/illustrations/week-04.png";
import week05 from "../assets/images/illustrations/week-05.png";
import week06 from "../assets/images/illustrations/week-06.png";
import week07 from "../assets/images/illustrations/week-07.png";
import week08 from "../assets/images/illustrations/week-08.png";
import week09 from "../assets/images/illustrations/week-09.png";
import week10 from "../assets/images/illustrations/week-10.png";
import week11 from "../assets/images/illustrations/week-11.png";
import week12 from "../assets/images/illustrations/week-12.png";

/** Invented scenes, not research evidence. Pages and decks share the same
 * image and caption; generation prompts and provenance are in docs/notes. */
export const illustrations = {
  home: {
    src: home,
    alt: "A student and a university clerk examine a huge binder of blank pages. Shelves behind the counter are full of reference manuals; another student waits with forms.",
    caption: "The manual wasn’t included.",
  },
  "week-01": {
    src: week01,
    alt: "Two panels show the same students: exchanging a wave while walking through a corridor, then sitting together on a bench with time to talk.",
    caption: "“How are you?” Same words. One exchange keeps moving; the other has made time for an answer.",
  },
  "week-02": {
    src: week02,
    alt: "A student sketches a tutor addressing a group in the first of four notebook boxes. The pen waits over an empty box; the tutorial continues in the background.",
    caption: "The exchange goes in the first box. Your explanation still needs a test.",
  },
  "week-03": {
    src: week03,
    alt: "At a library table beside an open window, one student pulls their cardigan closer. The other turns towards them, with a hand near the window latch.",
    caption: "“I’m getting cold.” / “Want me to shut it?” / “Please.” The next turn does useful work.",
  },
  "week-04": {
    src: week04,
    alt: "One friend checks a diary and raises a hand to signal a moment while the other waits with a coffee. A large clock hangs behind them.",
    caption: "“Oh, nice. Let me just check my week.” The pause now has a label.",
  },
  "week-05": {
    src: week05,
    alt: "Two classmates stand at a university stairwell. One holds a phone and gestures towards the stairs; the other looks at the route they now need to take.",
    caption: "“You had to go back downstairs.” The cost belongs in the apology, even after the room number is fixed.",
  },
  "week-06": {
    src: week06,
    alt: "Three hands try to put small appointment cards into the same remaining space on an already crowded paper planner.",
    caption: "Each request is small. They have all booked the same remaining hour.",
  },
  "week-07": {
    src: week07,
    alt: "A hand removes an appointment card from a planner, leaving empty space. A closed laptop has been pushed aside.",
    caption: "Cancel the optional thing. Leave the space empty.",
  },
  "week-08": {
    src: week08,
    alt: "A student drafts a short email on a laptop beside a towering stack of university binders, forms and envelopes.",
    caption: "One question for the tutor. Seven clauses to get it out of drafts.",
  },
  "week-09": {
    src: week09,
    alt: "Two friends in a café queue: one makes a small open-palm gesture, and the other turns the conversation towards the pastry display. Both remain relaxed.",
    caption: "“I’d rather leave that one.” / “Sure. What are you getting?” The queue keeps moving.",
  },
  "week-10": {
    src: week10,
    alt: "Rae indicates a notepad while a supervisor listens across a table. A personal folder stays closed inside Rae’s tote beside the chair.",
    caption: "“Could I have the instructions in writing?” A request about the work. The reply is still pending.",
  },
  "week-11": {
    src: week11,
    alt: "Two students, each holding a pen, make changes to one shared sheet. Their separate notebooks remain on their respective sides of the table.",
    caption: "Both sides get a pen. Both sides can ask for a revision.",
  },
  "week-12": {
    src: week12,
    alt: "An open manual on an editor’s desk has correction marks and paper tabs. A hand is still revising it; a closed copy and replacement pages sit nearby.",
    caption: "Published with known issues. The pen stays on the desk.",
  },
} satisfies Record<string, { src: ImageMetadata; alt: string; caption: string }>;

export type IllustrationId = keyof typeof illustrations;
