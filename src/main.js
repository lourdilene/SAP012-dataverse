import {
  sortByPagesAscending,
  sortByPagesDescending,
  sortByPublicationBookAscending,
  sortByPublicationBookDescending,
  filterByTypeBookMovie,
} from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const sortSelectElement = document.getElementById("sorts");
const filterSelectElement = document.getElementById("filters");
const rootElement = document.getElementById("root");
let processedData = [];

sortSelectElement.addEventListener("change", function () {
  const selectedValue = sortSelectElement.value;

  if (selectedValue === "number-of-pages-ascending") {
    processedData = sortByPagesAscending(data);
  }
  if (selectedValue === "number-of-pages-descending") {
    processedData = sortByPagesDescending(data);
  }
  if (selectedValue === "year-of-publication-ascending") {
    processedData = sortByPublicationBookAscending(data);
  }
  if (selectedValue === "year-of-publication-descending") {
    processedData = sortByPublicationBookDescending(data);
  }
  if (selectedValue === "featured") {
    processedData = data;
  }

  rootElement.innerHTML = "";

  rootElement.appendChild(renderItems(processedData));
});

filterSelectElement.addEventListener("change", function () {
  const selectedValue = filterSelectElement.value;
  if (selectedValue === "movie") {
    processedData = filterByTypeBookMovie(data);
  }
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(processedData));
});

filterSelectElement.addEventListener("change", function () {
  const selectedValue = filterSelectElement.value;
  if (selectedValue === "novel") {
    processedData = filterByTypeBookMovie(data);
  }
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(processedData));
});

filterSelectElement.addEventListener("change", function () {
  const selectedValue = filterSelectElement.value;
  if (selectedValue === "theater") {
    processedData = filterByTypeBookMovie(data);
  }
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(processedData));
});


document.addEventListener("DOMContentLoaded", function () {
  rootElement.appendChild(renderItems(data));
});
