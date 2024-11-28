function year() {
  // Full Year
  function actualYear() {
    const year = document.querySelector(".footer__year-item");
    const d = new Date();
    const fullYear = d.getFullYear();
    year.textContent = fullYear;
  }
  actualYear();
}

module.exports = year;
