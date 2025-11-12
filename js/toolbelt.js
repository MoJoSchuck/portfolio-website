// Start toolbelt marquee only after full page load to avoid width shifts
(function () {
  function start() {
    document.querySelectorAll(".toolbelt__logos").forEach((band) => {
      // Optionally ensure all images decoded before playing
      const imgs = Array.from(band.querySelectorAll("img"));
      Promise.all(imgs.map((i) => i.decode().catch(() => {}))).then(() => {
        band.classList.add("play");
      });
    });
  }
  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start);
  }
})();
