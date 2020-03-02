import React from 'react';
import './Pagination.css';

export default function Pagination({
  query,
  handleClick,
  pagination: { prevPageToken, nextPageToken },
}) {
  return (
    <div className="Pagination-container">
      <nav className="pagination" role="navigation" aria-label="pagination">
        {prevPageToken === null ? (
          <button className="pagination-previous" disabled>
            Anterior
          </button>
        ) : (
          <button
            className="pagination-previous button is-info is-light"
            onClick={() => handleClick(query, prevPageToken)}
          >
            Anterior
          </button>
        )}
        {nextPageToken === null ? (
          <button className="pagination-next" disabled>
            Próxima
          </button>
        ) : (
          <button
            className="pagination-next button is-info is-light"
            onClick={() => handleClick(query, nextPageToken)}
          >
            Próxima
          </button>
        )}
      </nav>
    </div>
  );
}
