import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(example, renderItems(data), data);

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.getElementById("card");

  data.forEach((book) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const titleElement = document.createElement("h2");
    titleElement.textContent = book.name;
    cardDiv.appendChild(titleElement);

    const imgElement = document.createElement("img");
    imgElement.src = book.imageUrl;
    cardDiv.appendChild(imgElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = book.shortDescription;
    cardDiv.appendChild(descriptionElement);

    cards.appendChild(cardDiv);
  });
});
