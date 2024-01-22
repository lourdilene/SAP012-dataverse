// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const sortByPagesAscending = (data) => {
  const pagesAscending = (a, b) => {
    return parseInt(a.facts.pagesBook) - parseInt(b.facts.pagesBook);
  };

  const booksAscending = data.slice().sort(pagesAscending);
  return booksAscending;
};

export const sortByPagesDescending = (data) => {
  const pagesDescending = (a, b) => {
    return parseInt(b.facts.pagesBook) - parseInt(a.facts.pagesBook);
  };

  const booksDescending = data.slice().sort(pagesDescending);
  return booksDescending;
};

export const sortByPublicationBookAscending = (data) => {
  const publicationAscending = (a, b) => {
    return (
      parseInt(a.facts.publicationBook) - parseInt(b.facts.publicationBook)
    );
  };

  const booksAscending = data.slice().sort(publicationAscending);
  return booksAscending;
};

export const sortByPublicationBookDescending = (data) => {
  const publicationDescending = (a, b) => {
    return (
      parseInt(b.facts.publicationBook) - parseInt(a.facts.publicationBook)
    );
  };
  const booksDescending = data.slice().sort(publicationDescending);
  return booksDescending;
};

export const filterByTypeBookMovie = (data) => {
  return data.filter((book) => book.facts.typeBook === "movie");
};


export const filterByTypeBookNovel = (data) => {
  return data.filter((book) => book.facts.typeBook === "novel");
};

export const filterByTypeBookTheather = (data) => {
  return data.filter((book) => book.facts.typeBook === "theather");
};


export const anotherExample = () => {
  return [];
};
