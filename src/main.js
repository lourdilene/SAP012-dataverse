import { sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const rootElement = document.getElementById("root");
let processedData = [];

document.addEventListener("DOMContentLoaded", function () {
  const sortSelectElement = document.getElementById("sorts");
  const orderSelectElement = document.getElementById("ordenacao");

  orderSelectElement.disabled = true;

  sortSelectElement.addEventListener("change", function () {
    const sortBy = sortSelectElement.value;

    orderSelectElement.disabled = false;

    processedData = sortData(data, sortBy, orderSelectElement.value);

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedData));
  });
  orderSelectElement.addEventListener("change", function () {
    const sortBy = sortSelectElement.value;

    processedData = sortData(data, sortBy, orderSelectElement.value);

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedData));
  });
  rootElement.appendChild(renderItems(data));
});
