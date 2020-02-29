import React from 'react';
import 'bulma/css/bulma.css';
import 'animate.css';
import './App.css';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { useTransition, animated } from 'react-spring';

import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import NoMatch from '../NoMatch';

export default function App() {
  // const { location } = useContext(__RouterContext);
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      transform: 'translate3d(0,-40px,0)',
      // opacity: 0,
    },
    enter: {
      transform: 'translate3d(0,0px,0)',
      // opacity: 1,
    },
    leave: {
      transform: 'translate3d(0,-40px,0)',
      // opacity: 0,
    },
  });
  console.log(location);

  return (
    <div className="App">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
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
        </animated.div>
      ))}
    </div>
  );
}
