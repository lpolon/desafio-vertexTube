import React from 'react';
import 'bulma/css/bulma.css';
import 'animate.css';
import './App.css';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import NoMatch from '../NoMatch';

export default function App() {
  const { pathname } = useLocation();
  let searchOverlayToggle = false;
  if (pathname === '/') {
    searchOverlayToggle = true;
  }
  const props = useSpring({
    height: searchOverlayToggle ? '100vh' : '4vh',
  });

  return (
    <div className="App">
      <animated.div className="SearchBar field has-addons" style={props}>
        <SearchBar />
      </animated.div>
      <Switch>
        <Route exact path="/"></Route>
        <Redirect exact from="/search" to="/" />
        <Route exact path="/search/:querySearch">
          <SearchResultsList />
        </Route>
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}
