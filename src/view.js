export const renderItems = (data) => {
  console.log(data);

  // document.addEventListener("DOMContentLoaded", function () {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ulElement = document.createElement("ul");

  console.log("array: " + Array.isArray(data));
  data.forEach((book) => {
    const liElement = document.createElement("li");

    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "http://schema.org/Book");

    const titleElement = document.createElement("h2");
    titleElement.textContent = book.name;
    titleElement.setAttribute("itemprop", "name");
    liElement.appendChild(titleElement);

    const imgElement = document.createElement("img");
    imgElement.src = book.imageUrl;
    imgElement.setAttribute("itemprop", "image");
    liElement.appendChild(imgElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = book.shortDescription;
    descriptionElement.setAttribute("itemprop", "description");
    liElement.appendChild(descriptionElement);
    ulElement.appendChild(liElement);
  });
  // });
  return "teste";
};
