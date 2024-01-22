import React from 'react';

const MyPagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageItems = [];
  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
       <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
       <button className="page-link" onClick={() => onPageChange(i)}>
         {i}
       </button>
     </li>
    );
  }

  return totalPages > 1 ? (
    <nav aria-label="Page navigation">
      <ul className="pagination d-flex justify-content-end">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link rounded-0" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous">
            <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
          </button>
        </li>
        {pageItems}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link rounded-0" onClick={() => onPageChange(currentPage + 1)} aria-label="Next">
            <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </button>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default MyPagination;
