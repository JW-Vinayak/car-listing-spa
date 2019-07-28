import React from "react";

const Paginator = props => {
  let { currentPage, totalPages, setPage } = props;
  console.log('nav props are', props);
  const setCurrentPage = pageNumber => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return false;
    }
    setPage(pageNumber);
  };

  return (
    <ul className="pagination">
      <li>
        <a className="first-link" onClick={() => setCurrentPage(1)}>
          First
        </a>
      </li>
      <li>
        <a className="prev-link" onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </a>
      </li>
      <li>
        Page {currentPage} of {totalPages}
      </li>
      <li>
        <a className="next-link" onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </a>
      </li>
      <li>
        <a className="last-link" onClick={() => setCurrentPage(totalPages)}>
          Last
        </a>
      </li>
    </ul>
  );
};

export default Paginator;
