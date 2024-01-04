import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(example, renderItems(data), data);

document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("root");

  // Create an unordered list
  const ulElement = document.createElement("ul");

  data.forEach((book) => {
    // Create a list item for each book
    const liElement = document.createElement("li");

    // Create a div for the book with microdata attributes
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("root");
    cardDiv.setAttribute("itemscope", "");
    cardDiv.setAttribute("itemtype", "http://schema.org/Book");

    // Title of the book with itemprop attribute
    const titleElement = document.createElement("h2");
    titleElement.textContent = book.name;
    titleElement.setAttribute("itemprop", "name");
    cardDiv.appendChild(titleElement);

    // Image of the book with itemprop attribute
    const imgElement = document.createElement("img");
    imgElement.src = book.imageUrl;
    imgElement.setAttribute("itemprop", "image");
    cardDiv.appendChild(imgElement);

    // Description of the book with itemprop attribute
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = book.shortDescription;
    descriptionElement.setAttribute("itemprop", "description");
    cardDiv.appendChild(descriptionElement);

    // Append the cardDiv to the liElement
    liElement.appendChild(cardDiv);

    // Append the liElement to the ulElement
    ulElement.appendChild(liElement);
  });

  // Append the ulElement to the rootElement
  rootElement.appendChild(ulElement);
});
