import React from "react";

const CustomPagination = ({ perPage, totalPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span type='button' href="#" onClick={() => paginate(number)} className="page-link text-primary">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomPagination;
