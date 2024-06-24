"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
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

  // Full Year
  function actualYear() {
    const year = document.querySelector(".footer__year-item");
    const d = new Date();
    const fullYear = d.getFullYear();
    year.textContent = fullYear;
  }
  actualYear();

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

  //Form
  const form = document.getElementById("form");

  form.addEventListener("submit", sendForm);

  async function sendForm(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      await fetch("server.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      })
        .then((data) => data.text())
        .then((data) => console.log(data));
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".__req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("__email")) {
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
});
