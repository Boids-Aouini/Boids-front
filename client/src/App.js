import React, { Component } from 'react';
import './App.css';
import Register from './components/auth/register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/auth/login';
import NavBar from './components/navbar/navBar';
import LandingPage from './components/notLogedIn/landingPage';
import WhyBoids from './components/notLogedIn/whyBoids';

class App extends Component {

  render() {
    return (

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
            {/* <Route exact path="/help">
                <div></div>
            </Route> */}

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
