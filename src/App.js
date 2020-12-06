import './App.scss';
import './responsive.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
   <>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
   </>
    );
}

export default App;
