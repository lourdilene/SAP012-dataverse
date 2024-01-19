// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

function transformToCamelCase(param) {
  const modifiedString = param.replace(/-([a-z])/g, (match, group1) =>
    group1.toUpperCase()
  );
  return modifiedString;
}

export const sortData = (data, sortBy, sortOrder) => {
  const sortByCamelCase = transformToCamelCase(sortBy);

  const OrderedBooks = data.slice().sort((a, b) => {
    if (sortOrder === "asc") {
      return (
        parseInt(a.facts[sortByCamelCase]) - parseInt(b.facts[sortByCamelCase])
      );
    }
    if (sortOrder === "desc") {
      return (
        parseInt(b.facts[sortByCamelCase]) - parseInt(a.facts[sortByCamelCase])
      );
    }
  });
  return OrderedBooks;
};

// export const sortByPagesAscending = (data) => {
//   const pagesAscending = (a, b) => {
//     return parseInt(a.facts.pagesBook) - parseInt(b.facts.pagesBook);
//   };

//   const booksAscending = data.slice().sort(pagesAscending);
//   return booksAscending;
// };

// export const sortByPagesDescending = (data) => {
//   const pagesDescending = (a, b) => {
//     return parseInt(b.facts.pagesBook) - parseInt(a.facts.pagesBook);
//   };

//   const booksDescending = data.slice().sort(pagesDescending);
//   return booksDescending;
// };

// export const sortByPublicationBookAscending = (data) => {
//   const publicationAscending = (a, b) => {
//     return (
//       parseInt(a.facts.publicationBook) - parseInt(b.facts.publicationBook)
//     );
//   };

//   const booksAscending = data.slice().sort(publicationAscending);
//   return booksAscending;
// };

// export const sortByPublicationBookDescending = (data) => {
//   const publicationDescending = (a, b) => {
//     return (
//       parseInt(b.facts.publicationBook) - parseInt(a.facts.publicationBook)
//     );
//   };
//   const booksDescending = data.slice().sort(publicationDescending);
//   return booksDescending;
// };

export const anotherExample = () => {
  return [];
};
