import crest from "astro-theme-slop/assets/slop-crest.svg?raw";

// Decks own their head; give their icon a stable URL without copying the brand asset.
export const GET = () => new Response(crest, {
  headers: { "Content-Type": "image/svg+xml" },
});
