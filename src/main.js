import { sortData, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const rootElement = document.querySelector("#root");
let processedData = [];
let processedDataAfterFilter = [];

document.addEventListener("DOMContentLoaded", function () {
  const filterSelectElement = document.querySelector("#filters");
  const sortSelectElement = document.querySelector("#sorts");
  const orderSelectElement = document.querySelector("#ordenacao");

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

    // const pagesBookValues = processedData.map(
    //   (book) =>
    //     book.facts[
    //       sortBy.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
    //     ]
    // );
    // console.log(pagesBookValues);
    // console.log(sortBy, orderSelectElement.value);

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedDataAfterFilter));
  });

  orderSelectElement.addEventListener("change", function () {
    processedDataAfterFilter = sortData(
      processedData,
      sortSelectElement.value,
      orderSelectElement.value
    );
    // const pagesBookValues = processedData.map(
    //   (book) =>
    //     book.facts[
    //       sortBy.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
    //     ]
    // );
    // console.log(pagesBookValues);
    // console.log(sortBy, orderSelectElement.value);

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedDataAfterFilter));
  });
  rootElement.appendChild(renderItems(data));
});
