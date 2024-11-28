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
