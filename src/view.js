export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((book) => {
    const liElement = document.createElement("li");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "http://schema.org/Book");

    liElement.classList.add("books");

    const dlElement = document.createElement("dl");

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

    //pagesbook
    const dtPagesBookElement = document.createElement("dt");
    dtPagesBookElement.textContent = book.facts.pagesBook;

    const ddPagesBookElement = document.createElement("dd");
    ddPagesBookElement.setAttribute("itemprop", "pagesBook");
    ddPagesBookElement.textContent = book.facts.pagesBook;

    //publicationBook
    const dtPublicationBookElement = document.createElement("dt");
    dtPublicationBookElement.textContent = book.facts.publicationBook;

    const ddPublicationBookElement = document.createElement("dd");
    ddPublicationBookElement.setAttribute("itemprop", "publicationBook");
    ddPublicationBookElement.textContent = book.facts.publicationBook;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
    dlElement.appendChild(imgElement);

    dlElement.appendChild(dtShortDescriptionElement);
    dlElement.appendChild(ddShortDescriptionElement);
    dlElement.appendChild(dtPagesBookElement);
    dlElement.appendChild(ddPagesBookElement);
    dlElement.appendChild(dtPublicationBookElement);
    dlElement.appendChild(ddPublicationBookElement);

    liElement.appendChild(dlElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
};
