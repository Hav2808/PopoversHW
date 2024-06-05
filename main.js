/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tooltip.js
class Tooltip {
  constructor(tooltip) {
    this.tooltip = tooltip;
  }
  onButton(e) {
    e.preventDefault();
    const popover = this.tooltip.querySelector(".tooltip");
    if (popover.classList.contains("active")) {
      popover.classList.remove("active");
    } else {
      popover.classList.add("active");
    }
  }
  bind() {
    const button = this.tooltip.querySelector(".btn");
    button.addEventListener("click", e => this.onButton(e));
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector(".container");
const tooltip = new Tooltip(container);
tooltip.bind();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;