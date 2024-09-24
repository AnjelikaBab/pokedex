import React from 'react';
import './pagination.css';

function Pagination({ pageNumbers, currentPage, setCurrentPage }) {

  // Create an array of page numbers
  const numbers = Array.from({ length: pageNumbers }, (_, i) => i + 1);

  // Determine the range of page numbers to display
  const getDisplayedPages = () => {
    const displayed = [];
    const totalVisiblePages = 5; // You can adjust this number

    // Start and end of the range
    let start = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
    let end = Math.min(pageNumbers, currentPage + Math.floor(totalVisiblePages / 2));

    // Adjust start and end if near the boundaries
    if (currentPage <= Math.ceil(totalVisiblePages / 2)) {
      end = Math.min(totalVisiblePages, pageNumbers);
    }
    if (currentPage + Math.floor(totalVisiblePages / 2) >= pageNumbers) {
      start = Math.max(1, pageNumbers - totalVisiblePages + 1);
    }

    // Add first page
    if (start > 1) {
      displayed.push(1);
      if (start > 2) displayed.push('...'); // Add ellipsis
    }

    // Add the pages within range
    for (let i = start; i <= end; i++) {
      displayed.push(i);
    }

    // Add last page
    if (end < pageNumbers) {
      if (end < pageNumbers - 1) displayed.push('...'); // Add ellipsis
      displayed.push(pageNumbers);
    }

    return displayed;
  };

  const displayedPages = getDisplayedPages();

  return (
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <button className='page-link' onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
        </li>
        {displayedPages.map((n, index) => (
          <li
            className={`page-item ${currentPage === n ? `active` : ``}`}
            key={index}
            onClick={() => {
              if (typeof n === 'number') changeCPage(n);
            }}
          >
            <button className='page-link' disabled={n === '...'}>
              {n}
            </button>
          </li>
        ))}
        <li className='page-item'>
          <button className='page-link' onClick={nextPage} disabled={currentPage === pageNumbers}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );

  function changeCPage(id) {
    if (id !== currentPage) {
      setCurrentPage(id);
    }
  }

  function nextPage() {
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
}

export default Pagination;
