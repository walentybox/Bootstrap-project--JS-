function getPosition() {
  // Get position of window and run
  function scrollPosition() {
    const facts = document.querySelector("#facts");
    if (
      window.pageYOffset >=
      facts.offsetTop + facts.offsetHeight / 2 - window.innerHeight
    ) {
      getSelectorsFacts();
      window.removeEventListener("scroll", scrollPosition);
    }
  }

  // Get all span and run them
  function getSelectorsFacts() {
    const divSelector = document.querySelectorAll(".facts__item h2 span");

    divSelector.forEach((item) => {
      let counterValue = item.textContent;
      counter(item, counterValue);
    });
  }

  //Counter for Span
  function counter(selector, value) {
    let num = 0;
    const time = Math.round(10000 / value);

    setInterval(function () {
      if (value >= num) {
        selector.innerHTML = num;
        num = num + 1;
      }
    }, time);
  }

  window.addEventListener("scroll", scrollPosition);
}

module.exports = getPosition;
