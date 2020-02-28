import React from 'react';
import 'bulma/css/bulma.css';
import 'animate.css';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList';
import NoMatch from '../NoMatch';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}
