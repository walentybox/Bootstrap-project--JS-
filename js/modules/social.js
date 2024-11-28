function social() {
  // Social Generate
  const footerIcons = document.querySelector(".footer__icons");
  const headerIcons = document.querySelector(".header__top-social");

  fetch("db.json")
    .then((data) => data.json())
    .then(
      (res) => (
        generateIcons(footerIcons, res.icons),
        generateIcons(headerIcons, res.icons)
      )
    );

  function generateIcons(box, icons) {
    for (let i = 0; i <= 5; i++) {
      box.innerHTML += `<li>
  <a href="#${icons[i]}">
  <div class=" icon-universal">
  <i class="icon-${icons[i]}"></i>
  </div>
  </a>
  </li>`;
    }
  }
}

module.exports = social;
