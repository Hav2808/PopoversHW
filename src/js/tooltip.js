export class Tooltip {
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
    button.addEventListener("click", (e) => this.onButton(e));
  }
}
