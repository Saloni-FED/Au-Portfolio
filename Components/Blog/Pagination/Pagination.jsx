import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="flex justify-center space-x-2 my-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border-2 border-black rounded-full"
      >
        &lt;
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-full ${page === currentPage ? 'bg-black text-white' : 'border-2 border-black'}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border-2 border-black rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
