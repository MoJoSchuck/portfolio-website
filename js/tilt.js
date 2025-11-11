// Random tilt on hover for project cards
// Adds one of: tilt-left, tilt-right, tilt-up to .grid__item while hovered
(function () {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return; // respect reduced motion

  const cards = document.querySelectorAll(".grid__item");
  const classes = ["tilt-left", "tilt-right", "tilt-up", null]; // null = plain zoom sometimes

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  cards.forEach((card) => {
    let applied;
    card.addEventListener("mouseenter", () => {
      // remove existing first
      card.classList.remove("tilt-left", "tilt-right", "tilt-up");
      applied = pick(classes);
      if (applied) card.classList.add(applied);
    });
    card.addEventListener("mouseleave", () => {
      if (applied) card.classList.remove(applied);
      applied = undefined;
    });
  });
})();
