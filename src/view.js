export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((book) => {
    const liElement = document.createElement("li");
    liElement.classList.add("books");

    const dlElement = document.createElement("dl");
    dlElement.setAttribute("itemscope", "");
    dlElement.setAttribute("itemtype", "http://schema.org/Book");

    const dtElement = document.createElement("dt");
    dtElement.textContent = "name";

    const ddElement = document.createElement("dd");
    ddElement.setAttribute("itemprop", "name");
    ddElement.textContent = book.name;

    ddElement.classList.add("book-name");

    const imgElement = document.createElement("img");
    imgElement.src = book.imageUrl;
    imgElement.setAttribute("itemprop", "image");

    const dtShortDescriptionElement = document.createElement("dt");
    dtElement.textContent = "shortDescription";
    const ddShortDescriptionElement = document.createElement("dd");
    ddShortDescriptionElement.setAttribute("itemprop", "shortDescription");
    ddShortDescriptionElement.textContent = book.shortDescription;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
    dlElement.appendChild(imgElement);

    dlElement.appendChild(dtShortDescriptionElement);
    dlElement.appendChild(ddShortDescriptionElement);

    liElement.appendChild(dlElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
};
