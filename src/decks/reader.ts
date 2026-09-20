/** Reuse the slide DOM as a document; Reveal is only loaded in presentation view. */
export function initDeckReader(): void {
  const slides = [...document.querySelectorAll<HTMLElement>(".reveal .slides > section")];
  const position = document.querySelector<HTMLElement>(".deck-reader-position");
  const bar = document.querySelector<HTMLElement>(".deck-reader-bar");
  const portrait = matchMedia("(max-width: 700px) and (orientation: portrait)");
  if (!slides.length) return;

  slides.forEach((slide, index) => {
    const link = document.createElement("a");
    link.className = "deck-slide-link";
    link.href = `#/${index + 1}`;
    link.textContent = `Slide ${index + 1}`;
    link.setAttribute("aria-label", `Link to slide ${index + 1}`);
    slide.prepend(link);

    slide.querySelectorAll<HTMLElement>(".at-table-wrap, .sketch-scroll").forEach((container) => {
      container.tabIndex = 0;
      container.setAttribute("role", "region");
      container.setAttribute("aria-label", `${container.classList.contains("at-table-wrap") ? "Table" : "Diagram"} on slide ${index + 1}; scroll horizontally if needed`);
    });

    // The diagrams already contain complete text equivalents. Make those
    // available to sighted readers too, instead of shrinking SVG lettering.
    slide.querySelectorAll<HTMLElement>(".sketch > .visually-hidden").forEach((text) => {
      const details = document.createElement("details");
      details.className = "deck-diagram-text";
      const summary = document.createElement("summary");
      summary.textContent = "Read diagram as text";
      text.before(details);
      text.classList.remove("visually-hidden");
      details.append(summary, text);
    });
  });

  let current = 0;
  let restoring = true;
  const setPosition = (index: number) => {
    current = index;
    if (position) position.textContent = `Slide ${index + 1} / ${slides.length}`;
  };
  const indexFromHash = () => {
    const match = location.hash.match(/^#\/(\d+)(?:\/\d+)*$/);
    if (match) return Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1));
    try {
      const id = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
      const target = document.getElementById(id)?.closest(".slides > section");
      const index = slides.indexOf(target as HTMLElement);
      return index >= 0 ? index : 0;
    } catch {
      return 0;
    }
  };
  const restorePosition = () => {
    restoring = true;
    setPosition(indexFromHash());
    slides[current].scrollIntoView({ block: "start" });
    restoring = false;
  };

  // Replace, rather than push, while scrolling so Back still leaves the deck.
  window.addEventListener("scroll", () => {
    if (restoring || !portrait.matches) return;
    const threshold = (bar?.getBoundingClientRect().bottom ?? 0) + 36;
    let index = 0;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].getBoundingClientRect().top <= threshold) index = i;
      else break;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 2) {
      index = slides.length - 1;
    }
    if (index !== current) {
      setPosition(index);
      history.replaceState(history.state, "", `#/${index + 1}`);
    }
  }, { passive: true });

  window.addEventListener("hashchange", restorePosition);
  // Restoring after fonts settle avoids landing partway through a previous slide.
  void document.fonts.ready.then(restorePosition);
}
