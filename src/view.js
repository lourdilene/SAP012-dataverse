export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((book) => {
    const liElement = document.createElement("li");
    liElement.classList.add("books");

    const dlElement = document.createElement("dl");
    dlElement.setAttribute("itemscope", "");
    dlElement.setAttribute("itemtype", "http://schema.org/Book");

    const ddElement = document.createElement("dd");
    ddElement.setAttribute("itemprop", "name");
    ddElement.textContent = book.name;

    ddElement.classList.add("book-name");

    const imgElement = document.createElement("img");
    imgElement.src = book.imageUrl;
    imgElement.setAttribute("itemprop", "image");

    const ddSElement = document.createElement("dd");
    ddSElement.setAttribute("itemprop", "shortDescription");
    ddSElement.textContent = book.shortDescription;

    dlElement.appendChild(ddElement);
    dlElement.appendChild(imgElement);

    dlElement.appendChild(ddSElement);

    liElement.appendChild(dlElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
};
