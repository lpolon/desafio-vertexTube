import React, { useState, Fragment } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link, useHistory, useLocation } from 'react-router-dom';

import RemoveSearchInputButton from '../RemoveSearchInputButton';
import BackButton from '../BackButton/BackButton';

export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');

  const locationHistory = useHistory();
  const { pathname } = useLocation();

  const handleChange = (value) => {
    setSearchInput(value);
  };

  return (
    <Fragment>
      {pathname === '/' ? null : <BackButton />}
      <div className="search-input control has-icons-left has-icons-right">
        <input
          type="text"
          name="search"
          placeholder="Pesquisar"
          className="input is-info"
          value={searchInput}
          onChange={({ target: { value } }) => handleChange(value)}
          onKeyDown={({ key }) => {
            if (key !== 'Enter') return;
            locationHistory.push({
              pathname: `/search/${searchInput}`,
              state: { prevLocationPathname: `${pathname}` },
            });
          }}
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
        <Link to={`/search/${searchInput}`} className="button is-info">
          Buscar
        </Link>
      </div>
    </Fragment>
  );
}
