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
import Login from './components/auth/login';
import LogedInNav from './components/navbar/logedInNav';
import NotLogedNav from './components/navbar/notLogedNav';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div >
            <NotLogedNav></NotLogedNav>
            <Switch>
              <Route exact path="/">
                <div></div>
              </Route>
              <Route exact path="/register">

                <Register />
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>

            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
