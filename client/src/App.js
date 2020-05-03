import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import SignUp from './components/auth/signUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div></div>
            </Route>
            <Route exact path="/register">

              <SignUp />
            </Route>

          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
