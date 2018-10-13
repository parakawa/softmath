import React from 'react';
import Home from './components/home/Home';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search" render={() => <Search />} />
        </div>
    </BrowserRouter>
  );
}

const Search = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
