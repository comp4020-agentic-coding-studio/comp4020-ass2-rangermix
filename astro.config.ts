import { defineConfig, fontProviders } from "astro/config";
import courseGraph from "astro-course-university";
import universityTheme from "astro-theme-university";
import { astromotion, deckRemarkPlugins } from "astromotion";
import { courseMeta } from "./src/course-config.ts";
import { courseApiCollections } from "./src/site-config.ts";
import { gitOrigin, resolveDeployment } from "./scripts/pages-base.ts";

// Derived, never hardcoded --- see scripts/pages-base.ts for why.
const { site, base } = resolveDeployment(process.env, gitOrigin);

export default defineConfig({
  site,
  base,
  // The course's one addition to the theme's type: a handwriting face for the
  // margin --- annotations, diagram labels, marked quotations --- set against
  // the theme's monospace for clause numbers and timings. The theme renders
  // every registered font on every page; astromotion needs it named below.
  fonts: [
    {
      name: "Kalam",
      cssVariable: "--font-kalam",
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  // Pages build as directories, so every route URL ends in a slash. Saying so
  // explicitly makes Astro emit matching links, which keeps the canonical URL
  // and what a visitor clicks in agreement --- otherwise each click costs a
  // 301 on GitHub Pages.
  trailingSlash: "always",
  integrations: [
    universityTheme({
      defaultLayout: "src/layouts/PageLayout.astro",
      // The whole brand choice: three colour tokens and a set of lockups. Keep
      // institutional brand packages and assets out of this fictional site.
      brandCss: [
        "astro-theme-slop/slop.css",
        // Not brand: the course's visual system, layered on the brand tokens
        // and taking every colour from them. Listed here because this is the
        // one hook that reaches every page, detail routes and decks included.
        "/src/styles/protocol.css",
      ],
      imageFormat: "avif",
      llmsTxt: true,
      // The theme owns the markdown plugin chain, so astromotion's slide
      // plugins (slide breaks, classes, backgrounds, notes, QR codes) are
      // handed to it rather than registered separately. Each one gates on
      // `.deck.mdx`, so ordinary pages are untouched.
      extraRemarkPlugins: deckRemarkPlugins,
    }),
    courseGraph({
      collections: courseApiCollections,
      timezone: "Australia/Canberra",
      course: courseMeta,
      canonicalUrl: `https://courses.slop.university/${courseMeta.code}/`,
    }),
    // Slide decks: every `.deck.mdx` under src/decks/ becomes a Reveal.js page
    // at /decks/<name>/. The theme's deck stylesheet reads the same brand
    // tokens the site does, so a deck arrives already wearing the Slop palette
    // --- see src/decks/theme.css. `fontVariables` makes the deck page emit the
    // @font-face for the theme's body font, which the deck styles ask for by
    // name.
    astromotion({
      theme: "./src/decks/theme.css",
      favicon: "/favicon.svg",
      fontVariables: ["--font-public-sans", "--font-roboto-mono", "--font-kalam"],
    }),
  ],
});
