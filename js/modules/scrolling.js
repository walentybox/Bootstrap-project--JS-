function scroll() {
  // Scroll
  document.querySelectorAll(".header__link-item").forEach((link) =>
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = 100;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offSetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offSetPosition,
        behavior: "smooth",
      });
    })
  );
}

module.exports = scroll;
