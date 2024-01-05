import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(example, renderItems(data), data);

document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("root");
  const ulElement = document.createElement("ul");
  rootElement.appendChild(ulElement);
  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
  liElement.textContent = renderItems(data);
  console.log(rootElement.childElementCount);
});
