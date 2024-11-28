/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/change.js":
/*!******************************!*\
  !*** ./js/modules/change.js ***!
  \******************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/experts.js":
/*!*******************************!*\
  !*** ./js/modules/experts.js ***!
  \*******************************/
/***/ ((module) => {

function experts() {
  //Experts block

  const priceBox = document.querySelector(".price__box");

  fetch("db.json")
    .then((data) => data.json())
    .then((res) => priceBlock(res.price));

  function priceBlock(price) {
    for (let i = 0; i <= price.length - 1; i++) {
      priceBox.innerHTML += `<div class="col-xs-12 col-md-6 col-lg-3 price__item text-center">
						           <div class="price__value py-5 ">
							        <div class="price__head p-5 rounded-circle mx-auto">
								     <h2 class="price__dollar fw-bold"><sup>$</sup>${price[i].price}</h2>
								     <p class="price__month"><small>/month</small></p>
							        </div>
							        <p class="price__text pt-5 d-inline-block px-5">${price[i].description}</p>
							        <h4 class="fw-bold pb-4 text-capitalize">${price[i].package}</h4>
							        <ul>
								     <li>${price[i].projects} Project</li>
								     <li>${price[i].storage} GB Storage</li>
								     <li>${price[i].users} Users</li>
								     <li>${price[i].bandwidth} GB Bandwidth</li>
							        </ul>
							        <a class="price__link text-decoration-none d-block p-3 m-4" href="#">Get Started Now</a>
						           </div>
					              </div>`;
    }
  }
}

module.exports = experts;


/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((module) => {

function form() {
  //Form
  const formItem = document.querySelectorAll(".form__input");
  const formBtn = document.querySelector(".form__btn");
  const dataObj = {};
  formBtn.addEventListener("click", sendForm);

  async function sendForm(e) {
    e.preventDefault();

    formItem.forEach((item) => (dataObj[item.name] = item.value));

    let error = formValidate(formItem);

    if (error === 0) {
      clearLocaStorage();
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataObj),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (err) {
        console.error(err);
		  console.log(err)
      }
    }
    //   const formI = document.querySelector(form);
    //   formItem.addEventListener("submit", sendForm);

    //   console.log(error);
    //   const object = {};

    //   formData.forEach(function (value, key) {
    //     object[key] = value;
    //   });

    //  let formData = new FormData(formItem);
    //  console.log(formData);

    //  const content = formData.get("input");

    //  console.log(content);

    //  formItem.forEach((item) => console.log(item));

    //  console.log(formItem);
    //  let error = formValidate(formItem);

    //  console.log(formData);
    //  const object = {};

    //  formData.forEach(function (value, key) {
    //    object[key] = value;
    //  });
  }

  function formValidate() {
    let error = 0;
    const formReq = document.querySelectorAll(".input__data");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("email__data")) {
        if (testEmail(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("__error");
    input.classList.add("__error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("__error");
    input.classList.remove("__error");
  }

  function testEmail(input) {
    const reg =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return !reg.test(input.value);
  }

  //Form (LocalStorage Data)

  const form = document.querySelectorAll(".form__input");

  function clearLocaStorage() {
    localStorage.clear();
    for (let i = 0; i <= form.length - 1; i++) {
      form[i].value = "";
    }
  }

  function inputEvent() {
    for (let i = 0; i <= form.length - 1; i++) {
      form[i].addEventListener("input", saveLocalStorage);
    }
  }

  function saveLocalStorage() {
    localStorage.setItem(this.name, this.value);
  }

  function checkLocalStorage() {
    for (let i = 0; i <= form.length - 1; i++) {
      let name = form[i].name;

      form[i].value = localStorage.getItem(name);
    }
  }

  inputEvent();
  checkLocalStorage();

  // Focus and Blur in Form
  const mainForm = document.forms.main;

  function addFocus() {
    let mainFormInputPlaceholder;
    for (let i = 0; i <= mainForm.length - 1; i++) {
      if (mainForm[i].classList.contains("form__input")) {
        mainForm[i].addEventListener("focus", function () {
          mainFormInputPlaceholder = mainForm[i].placeholder;
          mainForm[i].placeholder = "";
        });
        mainForm[i].addEventListener("blur", function () {
          mainForm[i].placeholder = mainFormInputPlaceholder;
        });
      }
    }
  }

  addFocus();
}

module.exports = form;


/***/ }),

/***/ "./js/modules/gallery.js":
/*!*******************************!*\
  !*** ./js/modules/gallery.js ***!
  \*******************************/
/***/ ((module) => {

function gallery() {
  //Gallery
  const rowImages = document.querySelector(".row-images");
  function generateImgs() {
    for (let i = 0; i <= 7; i++) {
      rowImages.innerHTML += `
	 <div class="col-md-3 gallery__img mb-4 mb-md-0">
					  <figure>
						  <img class="gallery__img-item img-fluid " src="./img/work${
                i + 1
              }.jpg" alt="work">
						  <figcaption class="gallery__img-figcaption top-50 start-50 translate-middle">
								  <span class="gallery__img-span"><i class="icon-plus"></i></span>
						  </figcaption>
					  </figure>
				  </div>`;
    }
  }
  generateImgs();
}

module.exports = gallery;


/***/ }),

/***/ "./js/modules/image.js":
/*!*****************************!*\
  !*** ./js/modules/image.js ***!
  \*****************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./js/modules/position.js":
/*!********************************!*\
  !*** ./js/modules/position.js ***!
  \********************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./js/modules/scrolling.js":
/*!*********************************!*\
  !*** ./js/modules/scrolling.js ***!
  \*********************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./js/modules/service.js":
/*!*******************************!*\
  !*** ./js/modules/service.js ***!
  \*******************************/
/***/ ((module) => {

function service() {
  //Service block
  const serviceBlock = document.querySelector(".service-block");
  fetch("db.json")
    .then((data) => data.json())
    .then((res) => generateService(res.service));

  function generateService(data) {
    for (let i = 0; i <= data.length - 1; i++) {
      serviceBlock.innerHTML += `<div class="col-lg-4 col-md-6 col-xs-12">
						  <div class="service__item bg-light-subtle p-5 h-100">
							  <div class="service__icon d-inline-block rounded-circle p-4">
								  <i class="icon-${data[i].icon}"></i>
							  </div>
							  <div class="service__content">
								  <h4 class="h4 fw-bold py-3"><a class="text-decoration-none text-uppercase"
										  href="#">${data[i].title}</a></h4>
								  <p class="">${data[i].text}</p>
							  </div>
						  </div>`;
    }
  }
}

module.exports = service;


/***/ }),

/***/ "./js/modules/sliders.js":
/*!*******************************!*\
  !*** ./js/modules/sliders.js ***!
  \*******************************/
/***/ ((module) => {

function sliders() {
  //  Slider 1
  const swiper2 = new Swiper(".about .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Slider 2
  const swiper = new Swiper(".experts .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Slider 3
  const swiper1 = new Swiper(".testimonial .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
  });
}

module.exports = sliders;


/***/ }),

/***/ "./js/modules/social.js":
/*!******************************!*\
  !*** ./js/modules/social.js ***!
  \******************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./js/modules/year.js":
/*!****************************!*\
  !*** ./js/modules/year.js ***!
  \****************************/
/***/ ((module) => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/

window.addEventListener("DOMContentLoaded", () => {
  const change = __webpack_require__(/*! ./modules/change */ "./js/modules/change.js"),
    experts = __webpack_require__(/*! ./modules/experts */ "./js/modules/experts.js"),
    form = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js"),
    gallery = __webpack_require__(/*! ./modules/gallery */ "./js/modules/gallery.js"),
    image = __webpack_require__(/*! ./modules/image */ "./js/modules/image.js"),
    position = __webpack_require__(/*! ./modules/position */ "./js/modules/position.js"),
    scrolling = __webpack_require__(/*! ./modules/scrolling */ "./js/modules/scrolling.js"),
    service = __webpack_require__(/*! ./modules/service */ "./js/modules/service.js"),
    sliders = __webpack_require__(/*! ./modules/sliders */ "./js/modules/sliders.js"),
    social = __webpack_require__(/*! ./modules/social */ "./js/modules/social.js"),
    year = __webpack_require__(/*! ./modules/year */ "./js/modules/year.js");

  change();
  experts();
  form();
  gallery();
  image();
  position();
  scrolling();
  service();
  sliders();
  social();
  year();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map