// Accessible mobile navigation toggle
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-navigation");
  if (!toggle || !nav) return;

  function openNav() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }
  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function toggleNav() {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeNav() : openNav();
  }

  toggle.addEventListener("click", toggleNav);

  // Close on Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNav();
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && e.target !== toggle) {
      closeNav();
    }
  });
})();
