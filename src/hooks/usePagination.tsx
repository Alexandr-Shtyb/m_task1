const usePagination = <T,>(
  data: T[],
  currentPage: number,
  itemsPerPage: number,
) => {
  const count = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRepos = data.slice(startIndex, endIndex);

  return {
    displayedRepos,
    count,
  };
};

export default usePagination;
