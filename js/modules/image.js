function image() {
  //Open Image
  const img = document.querySelectorAll(".icon-plus");
  const positionBox = document.querySelector(".position__box");

  img.forEach((el, index) => {
    el.addEventListener("click", function () {
      const div = document.createElement("div");
      const imgBox = document.createElement("div");
      const img = document.createElement("img");
      const imgClose = document.createElement("img");

      img.setAttribute("src", `./img/work${index + 1}.jpg`);
      img.className = "img-item mx-auto";
      img.setAttribute("alt", `work${index + 1}`);

      imgBox.className =
        "img-box img-fluid rounded mx-auto img-position bg-light";

      div.className = "overlay__box";
      div.append(imgBox);

      imgClose.className = "img-span";
      imgClose.setAttribute("src", `./img/svg-close.svg`);

      imgBox.append(img, imgClose);

      positionBox.append(div);

      closeImg();
    });
  });

  // Close Img

  function closeImg() {
    const close = document.getElementsByClassName("img-span");
    const removeImg = document.getElementsByClassName("overlay__box");
    [...close][0].addEventListener("click", () => [...removeImg][0].remove());

    [...removeImg][0].addEventListener("click", (e) => {
      if (!e.target.classList.contains("img-item")) {
        [...removeImg][0].remove();
      }
    });
  }
}
module.exports = image;
