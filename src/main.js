import { sortData, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const rootElement = document.querySelector("#root");
let processedData = [];

document.addEventListener("DOMContentLoaded", function () {
  const sortSelectElement = document.querySelector("#sorts");
  const filterSelectElement = document.querySelector("#filters");
  const orderSelectElement = document.querySelector("#ordenacao");

  // orderSelectElement.disabled = true;
  filterSelectElement.addEventListener("change", function () {
    // const selectedValue = filterSelectElement.value;
    console.log(filterSelectElement.value, filterSelectElement.name);
    // if (selectedValue === "novel") {
    // }
    rootElement.innerHTML = "";
    processedData = filterData(
      data,
      filterSelectElement.name,
      filterSelectElement.value
    );
    rootElement.appendChild(renderItems(processedData));
  });

  sortSelectElement.addEventListener("change", function () {
    const sortBy = sortSelectElement.value;

    // orderSelectElement.disabled = false;

    processedData = sortData(data, sortBy, orderSelectElement.value);

    // const pagesBookValues = processedData.map(
    //   (book) =>
    //     book.facts[
    //       sortBy.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
    //     ]
    // );
    // console.log(pagesBookValues);
    // console.log(sortBy, orderSelectElement.value);

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedData));
  });
  orderSelectElement.addEventListener("change", function () {
    const sortBy = sortSelectElement.value;

    processedData = sortData(data, sortBy, orderSelectElement.value);
    // const pagesBookValues = processedData.map(
    //   (book) =>
    //     book.facts[
    //       sortBy.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
    //     ]
    // );
    // console.log(pagesBookValues);
    // console.log(sortBy, orderSelectElement.value);

    rootElement.innerHTML = "";

    rootElement.appendChild(renderItems(processedData));
  });
  rootElement.appendChild(renderItems(data));
});
