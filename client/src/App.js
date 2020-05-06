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
import NavBar from './components/navbar/navBar';
import LandingPage from './components/notLogedIn/landingPage';
import WhyBoids from './components/notLogedIn/whyBoids';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div >
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/">
                <LandingPage></LandingPage>
              </Route>
              <Route exact path="/whyBoids">
                <WhyBoids></WhyBoids>
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
