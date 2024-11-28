function changeSize() {
  //Change Size
  function widthSize() {
    if (window.innerWidth >= 769) {
      document.querySelector(".collapse").classList.add("show");
    } else {
      document.querySelector(".collapse").classList.remove("show");
    }
  }
  widthSize();

  window.addEventListener("resize", () => {
    widthSize();
  });
}


module.exports = changeSize;