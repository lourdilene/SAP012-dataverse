export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((book) => {
    const liElement = document.createElement("li");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "http://schema.org/Book");

    liElement.classList.add("books");

    const dlElement = document.createElement("dl");

    const dtElement = document.createElement("dt");

    const ddElement = document.createElement("dd");
    ddElement.setAttribute("itemprop", "name");
    ddElement.textContent = book.name;

    ddElement.classList.add("book-name");

    const imgElement = document.createElement("img");
    imgElement.src = book.imageUrl;
    imgElement.setAttribute("itemprop", "img");

    const divElement = document.createElement("div");
    divElement.classList.add("book-info");

    const dtPagesBookElement = document.createElement("dt");
    dtPagesBookElement.textContent = "Pages:";

    const ddPagesBookElement = document.createElement("dd");
    ddPagesBookElement.setAttribute("itemprop", "sort");
    ddPagesBookElement.textContent = book.facts.pagesBook;

    const dtPublicationBookElement = document.createElement("dt");
    dtPublicationBookElement.textContent = "Year:";

    const ddPublicationBookElement = document.createElement("dd");
    ddPublicationBookElement.setAttribute("itemprop", "sort");
    ddPublicationBookElement.textContent = book.facts.publicationBook;

    dlElement.appendChild(imgElement);
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);

    divElement.appendChild(dtPagesBookElement);
    divElement.appendChild(ddPagesBookElement);
    divElement.appendChild(dtPublicationBookElement);
    divElement.appendChild(ddPublicationBookElement);

    dlElement.appendChild(divElement);

    liElement.appendChild(dlElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
};
