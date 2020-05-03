import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Register from './components/auth/register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div >
            <Switch>
              <Route exact path="/">
                <div></div>
              </Route>
              <Route exact path="/register">

                <Register />
              </Route>


            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
