import React from 'react';
import 'bulma/css/bulma.css';
import 'animate.css';
import './App.css';

import { youtube } from '../util/youtube';

import SearchBar from '../SearchBar/SearchBar';


export default function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}
