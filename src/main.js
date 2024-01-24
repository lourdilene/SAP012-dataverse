import { sortData, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const rootElement = document.querySelector("#root");
const buttonElement = document.querySelector("#clear-button");
const filterSelectElement = document.querySelector("#filters");
const sortSelectElement = document.querySelector("#sorts");
const orderSelectElement = document.querySelector("#ordenacao");
let processedData = [];
let processedDataAfterFilter = [];

document.addEventListener("DOMContentLoaded", function () {
  filterSelectElement.addEventListener("change", function () {
    rootElement.innerHTML = "";
    processedData = filterData(
      data,
      filterSelectElement.name,
      filterSelectElement.value
    );
    rootElement.appendChild(renderItems(processedData));
  });

  sortSelectElement.addEventListener("change", function () {
    processedDataAfterFilter = sortData(
      processedData,
      sortSelectElement.value,
      orderSelectElement.value
    );

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedDataAfterFilter));
  });

  orderSelectElement.addEventListener("change", function () {
    processedDataAfterFilter = sortData(
      processedData,
      sortSelectElement.value,
      orderSelectElement.value
    );

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedDataAfterFilter));
  });
  rootElement.appendChild(renderItems(data));
});

buttonElement.addEventListener("click", (event) => {
  if (event.target.value === "clear-filters") {
    filterSelectElement.value = "selecione";
    sortSelectElement.value = "selecione";
    orderSelectElement.value = "selecione";
  }
});
