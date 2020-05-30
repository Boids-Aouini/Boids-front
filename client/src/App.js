import React, { Component } from 'react';
import './App.css';
import Register from './components/auth/register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/auth/login';
import NavBar from './components/navbar/navBar';
import LandingPage from './components/notLogedIn/landingPage';
import WhyBoids from './components/notLogedIn/whyBoids';
import { connect } from 'react-redux';
import Servers from './components/logedIn/servers/servers';
import { retreiveServerAsLeader } from './actions/serverActions';
import AddNewMember from './components/logedIn/addNewMember/addNewMember';
import WorkSpace from './components/logedIn/workSpace/workSpace';
import socket from './components/utils/socket';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '780max': null
    }

  }

  checkMedia(){
    let mediaMatch = window.matchMedia('(max-width: 780px)');
    setTimeout(()=>this.setState({'780max': mediaMatch.matches}), 0)
   
    return true
  }

  render() {

    return this.checkMedia() ? (

      <Router>
        <div id="app" style={{
          gridTemplateColumns: this.props.auth.openedAcc ? 'auto': (this.state['780max'] ? 'auto' : '9% 91%' )

        }}>
          {!this.props.auth.openedAcc ? (<div></div>) : (<Servers />)}

          <div id="content" style={{
            marginLeft: this.props.auth.openedAcc ? (this.state['780max'] ? 'auto':  '9%') : 'auto',
            width: this.props.auth.openedAcc ? (this.state['780max'] ? '100%' : '91%') : '100%'
          
          }}>
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
                {this.props.auth.openedAcc ? (<WorkSpace />) : <Redirect to="/" />}
              </Route>
              <Route exact path='/options/boidsServer/:serverName/addMember'>
                {this.props.auth.openedAcc ? (<AddNewMember />) : <Redirect to="/" />}
              </Route>

            </Switch>
          </div>
        </div>
      </Router>
    ): <></>
  }
}
const mapPropsToState = state => ({
  auth: state.auth
})
export default connect(mapPropsToState, { retreiveServerAsLeader })(App);
