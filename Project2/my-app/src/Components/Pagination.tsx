import React from 'react';

interface Props {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div>
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            <button className="page-link">{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
