import React from 'react';
import '../App/index.css';
import Home from '../../pages/Home'
import Artist from '../../pages/Artist'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Artist/:id">
          <Artist />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
