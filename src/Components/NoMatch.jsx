import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <Fragment>
      <h1>Página não encontrada</h1>
      <Link
        to="/"
        className="button is-info"
        style={{ width: '200px', display: 'block', margin: '0 auto' }}
      >
        voltar para pesquisa
      </Link>
    </Fragment>
  );
}
