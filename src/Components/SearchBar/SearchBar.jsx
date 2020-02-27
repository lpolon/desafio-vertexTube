import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function SearchBar(props) {
  return (
    <div className="SearchBar field has-addons">
      <div className="search-input control has-icons-left has-icons-right">
        <input
          type="text"
          name="search"
          placeholder="Pesquisar"
          className="input"
          required
        />
        <span className="icon is-small is-left">
          <FA icon={faSearch} />
        </span>
        <span className="icon is-small is-right">
          {/* TODO: conditional render from state */}
          {/* <div className="block">
            <button className="delete"></button>
          </div> */}
        </span>
      </div>
      <div className="control">
        <Link className="button is-info">Buscar</Link>
      </div>
    </div>
  );
}
