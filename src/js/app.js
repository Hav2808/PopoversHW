import { Tooltip } from "./tooltip";

const container = document.querySelector(".container");

const tooltip = new Tooltip(container);

tooltip.bind();
