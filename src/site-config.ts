import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

// The weekly contact hour is a Lab: students go and try the week's protocol in
// the room. The collection key, URL and API path stay `sessions`.
export const sessionLabels = {
  singular: "Lab",
  plural: "Labs",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people", "readings"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    // Before the lectures on purpose: the first thing a student needs is where
    // to be and when, and that is the one page no course writes down in full.
    { text: "Timetable", href: "/timetable/" },
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Readings", href: "/readings/" },
    { text: "Assessment", href: "/assessments/" },
    // Six items is what fits beside the logo on one row; a seventh drops the
    // whole list to a second row at every desktop width. People made room for
    // the timetable, whose "Who to ask" section links each of them, the way
    // Glossary made room earlier. spec/timetable.test.ts holds the count.
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  socialImage: "/src/assets/images/card.png",
  socialImageAlt: `${courseMeta.code}, NT 101: Undocumented Protocols. A hand-drawn sequence diagram of the handshake “How are you?”, “Good, you?”, beside the line “The protocol is undocumented, not obvious.”`,
});
