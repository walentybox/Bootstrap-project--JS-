"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const change = require("./modules/change"),
    experts = require("./modules/experts"),
    form = require("./modules/form"),
    gallery = require("./modules/gallery"),
    image = require("./modules/image"),
    position = require("./modules/position"),
    scrolling = require("./modules/scrolling"),
    service = require("./modules/service"),
    sliders = require("./modules/sliders"),
    social = require("./modules/social"),
    year = require("./modules/year");

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
