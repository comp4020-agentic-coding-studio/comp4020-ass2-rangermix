import type { ImageMetadata } from "astro";
import pull_sign from "../assets/images/web/pull-sign.jpg";
import cheezburger from "../assets/images/web/cheezburger.jpg";
import wait_sign from "../assets/images/web/wait-sign.jpg";
import debugging_duck from "../assets/images/web/debugging-duck.jpg";
import keep_calm from "../assets/images/web/keep-calm.jpg";
import join_you from "../assets/images/web/join-you.jpg";
import do_not_disturb from "../assets/images/web/do-not-disturb.jpg";
import standards from "../assets/images/web/standards.png";
import ten_thousand from "../assets/images/web/ten-thousand.png";
import email_reply from "../assets/images/web/email-reply.png";
import wisdom_of_the_ancients from "../assets/images/web/wisdom-of-the-ancients.png";
import not_broken from "../assets/images/web/not-broken.jpg";

interface WebImage {
  src: ImageMetadata;
  title: string;
  author: string;
  source: string;
  licence: string;
  licenceUrl: string;
  alt: string;
  caption: string;
  transcript?: string[];
}

// Original web images: source records and unchanged-file hashes are in
// docs/notes/web-images/sources.json. Captions are this course’s commentary.
export const webImages = {
  "pull-sign": {
    src: pull_sign,
    title: "Pull pictogram on a door",
    author: "Alastair Cook (Alcook101)",
    source: "https://commons.wikimedia.org/wiki/File%3APull_pushpullsigns_com.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    alt: "A photograph of a hand pulling a green door beside a yellow pictogram showing a person pulling a door towards them.",
    caption: "The door comes with instructions. The conversation on the other side is apparently self-explanatory.",
  },
  "cheezburger": {
    src: cheezburger,
    title: "I can has cheezburger?",
    author: "Or Hiltch",
    source: "https://commons.wikimedia.org/wiki/File%3AI_can_has_cheezburger.jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    alt: "A tabby cat looks up at the camera below the meme caption “I CAN HAS CHEEZBURGER?”.",
    caption: "The question asks for permission. The cat would also like a cheeseburger.",
  },
  "wait-sign": {
    src: wait_sign,
    title: "Pedestrian crossing WAIT sign",
    author: "Secretlondon",
    source: "https://commons.wikimedia.org/wiki/File%3APedestrian_crossing_WAIT_sign.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    alt: "A pedestrian crossing button with an illuminated orange WAIT indicator. The instructions read: “PEDESTRIANS push button and wait for signal opposite”, with red wait and green cross-with-care symbols.",
    caption: "The crossing acknowledges the request before it is your turn. “Let me check” can do the same job in a conversation.",
  },
  "debugging-duck": {
    src: debugging_duck,
    title: "Rubber duck assisting with debugging",
    author: "Tom Morris",
    source: "https://commons.wikimedia.org/wiki/File%3ARubber_duck_assisting_with_debugging.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    alt: "A yellow rubber duck sits on a MacBook keyboard beside a screen of Java code.",
    caption: "The duck will hear your rehearsal. Only the person affected can tell you whether the repair helped.",
  },
  "keep-calm": {
    src: keep_calm,
    title: "Keep Calm and Carry On",
    author: "UK Government",
    source: "https://commons.wikimedia.org/wiki/File%3AKeep-calm-and-carry-on-scan.jpg",
    licence: "Public domain",
    licenceUrl: "https://commons.wikimedia.org/wiki/Template:PD-UKGov",
    alt: "A scan of the red 1939 poster with a white crown above the words “KEEP CALM AND CARRY ON”.",
    caption: "The poster has a “carry on” instruction. Its “what gets dropped” section is missing.",
  },
  "join-you": {
    src: join_you,
    title: "May I join you?",
    author: "Stefano Mortellaro; caption by Iliev",
    source: "https://commons.wikimedia.org/wiki/File%3ALolcat_May_I_Join_You.jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    alt: "A kitten clings to a potted tree below the caption “I CAN JOEEN U TOO, PLZ?”.",
    caption: "The request has a question mark. Leave room for the answer.",
  },
  "do-not-disturb": {
    src: do_not_disturb,
    title: "Do not disturb",
    author: "Phrontis",
    source: "https://commons.wikimedia.org/wiki/File%3ASignDoNotDisturb_res.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    alt: "A red hotel door hanger says “Do not disturb” in French, German, English and Spanish. A smaller line gives instructions for requesting housekeeping.",
    caption: "The request is on the door; the occupant’s reasons stay inside.",
  },
  "standards": {
    src: standards,
    title: "xkcd: Standards",
    author: "Randall Munroe",
    source: "https://xkcd.com/927/",
    licence: "CC BY-NC 2.5",
    licenceUrl: "https://creativecommons.org/licenses/by-nc/2.5/",
    alt: "A three-panel comic: there are fourteen competing standards; two people propose one universal replacement; soon there are fifteen competing standards.",
    caption: "One more universal standard should do it. For this course, try an agreement between the people actually in the room.",
    transcript: ["How standards proliferate (see: A/C chargers, character encodings, instant messaging, etc.). Situation: there are 14 competing standards.", "Two people: “14?! Ridiculous! We need to develop one universal standard that covers everyone’s use cases.” “Yeah!”", "Soon: situation: there are 15 competing standards."],
  },
  "ten-thousand": {
    src: ten_thousand,
    title: "xkcd: Ten Thousand",
    author: "Randall Munroe",
    source: "https://xkcd.com/1053/",
    licence: "CC BY-NC 2.5",
    licenceUrl: "https://creativecommons.org/licenses/by-nc/2.5/",
    alt: "A comic rejects mocking people for not knowing something. Its rough arithmetic imagines ten thousand people learning a supposedly universal fact each day. Someone who has never heard of the Diet Coke and Mentos experiment gets invited to try it.",
    caption: "“Everyone knows” is a terrible set of instructions.",
    transcript: ["“I try not to make fun of people for admitting they don’t know things. Because for each thing ‘everyone knows’ by the time they’re adults, every day there are, on average, 10,000 people in the US hearing about it for the first time.”", "The comic’s calculation: fraction who have heard of it at birth = 0%; fraction who have heard of it by 30 ≈ 100%; US birth rate ≈ 4,000,000/year; number hearing about it for the first time ≈ 10,000/day.", "“If I make fun of people, I train them not to tell me when they have those moments. And I miss out on the fun.”", "“‘Diet Coke and Mentos thing’? What’s that?” “Oh man! Come on, we’re going to the grocery store.” “Why?” “You’re one of today’s lucky 10,000.”"],
  },
  "email-reply": {
    src: email_reply,
    title: "xkcd: Email Reply",
    author: "Randall Munroe",
    source: "https://xkcd.com/1873/",
    licence: "CC BY-NC 2.5",
    licenceUrl: "https://creativecommons.org/licenses/by-nc/2.5/",
    alt: "A person writes a lengthy apology for taking two years to answer an email. The final paragraph reveals that the email was a LinkedIn invitation, which they decline.",
    caption: "All that, for a LinkedIn invitation. Before drafting the perfect reply, check whether this message needs one.",
    transcript: ["“Dear Kevin, I’m sorry it’s taken me two years to reply to your email.”", "“I’ve built up so much stress and anxiety around my email inbox; it’s an unhealthy dynamic which is more psychological than technical. I’ve tried one magical solution after another, and as each one has failed, deep down I’ve grown more certain that the problem isn’t email—it’s me.”", "“Regardless, these are my issues, not yours; you’re my friend, and I owe you the basic courtesy of a response. I apologize for my neglect and I hope you haven’t been too hurt by my failure to reply.”", "“Anyway, I appreciate your invitation to join your professional network on LinkedIn, but I’m afraid I must decline…”"],
  },
  "wisdom-of-the-ancients": {
    src: wisdom_of_the_ancients,
    title: "xkcd: Wisdom of the Ancients",
    author: "Randall Munroe",
    source: "https://xkcd.com/979/",
    licence: "CC BY-NC 2.5",
    licenceUrl: "https://creativecommons.org/licenses/by-nc/2.5/",
    alt: "A person finds a 2003 forum thread about their exact error, with no answer. They shake their monitor and ask DenverCoder9 what happened.",
    caption: "Write down what fixed it. Future readers cannot interview your abandoned browser tab.",
    transcript: ["“Never have I felt so close to another soul and yet so helplessly alone as when I Google an error and there’s one result: a thread by someone with the same problem and no answer. Last posted to in 2003.”", "A person shaking their monitor: “Who were you, DenverCoder9? What did you see?!”"],
  },
  "not-broken": {
    src: not_broken,
    title: "If not broken, why fix it?",
    author: "Doc Tropics; caption by Microchip08",
    source: "https://commons.wikimedia.org/wiki/File%3AAalolcat_notbroken.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    alt: "A kitten sits among papers in a wastebasket. The meme reads “if not broken” at the top and “y iz u fixing?” at the bottom.",
    caption: "Before pricing the change: who asked for it, and who benefits?",
  },
} as const satisfies Record<string, WebImage>;

export type WebImageId = keyof typeof webImages;
