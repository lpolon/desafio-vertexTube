import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import RemoveSearchInputButton from '../RemoveSearchInputButton';

export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (value) => {
    setSearchInput(value);
  };

// 'keydown', ({ code enter }) to input field to search on enter

  return (
    <div className="SearchBar field has-addons">
      <div className="search-input control has-icons-left has-icons-right">
        <input
          type="text"
          name="search"
          placeholder="Pesquisar"
          className="input is-info"
          value={searchInput}
          onChange={({ target: { value } }) => handleChange(value)}
          required
        />
        <span className="icon is-small is-left">
          <FA icon={faSearch} />
        </span>
        <span className="icon is-small is-right">
          {!searchInput ? null : (
            <RemoveSearchInputButton handleChange={handleChange} />
          )}
        </span>
      </div>
      <div className="control">
        <Link className="button is-info">Buscar</Link>
      </div>
    </div>
  );
}
