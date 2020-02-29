import React from 'react';
import 'bulma/css/bulma.css';
import 'animate.css';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import NoMatch from '../NoMatch';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/search/">
          <Redirect to="/" />
        </Route>
        <Route exact path="/search/:querySearch">
          <SearchBar />
          <SearchResultsList />
        </Route>
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}
