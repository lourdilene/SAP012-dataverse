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

export const anotherExample = () => {
  return [];
};
