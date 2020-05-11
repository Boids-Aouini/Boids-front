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
import { connect } from 'react-redux';
import Servers from './components/logedIn/servers/servers';
import { retreiveServerAsLeader } from './actions/serverActions';
import AddNewMember from './components/logedIn/addNewMember/addNewMember';

class App extends Component {

  render() {

    return (

      <Router>
        <div id="app">
          {!this.props.auth.openedAcc ? (<div></div>) : (<Servers />)}

          <div id="content">
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
              <Route exact path="/boidsServer/:serverName/:channel">
                <div></div>
              </Route>
              <Route exact path='/options/boidsServer/:serverName/addMember'>
                <AddNewMember />
              </Route>

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
const mapPropsToState = state => ({
  auth: state.auth
})
export default connect(mapPropsToState, { retreiveServerAsLeader })(App);
