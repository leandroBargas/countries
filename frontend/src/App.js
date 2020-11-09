import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Countries />
        </Route>
        <Route path='/country/:id'>
          <CountryDetail />
        </Route>
      </Switch>
    </Router>
  );
}
