import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './landingPage.css'
class LandingPage extends Component {
    render() {
        return (
            <div id="landingContent">
                <div id="wrapper">
                    <h1 id="header-content">Boids gathers separated teams in one platform</h1>
                    <p>so you can stay productive you and your team</p>
                    {!this.props.auth.openedAcc ? (<Link to="/register">Register</Link>) : (<span></span>)}
                </div>
            </div>
        )
    }
}

let setPropsToState = state => ({ // added auth redux's state to props comp
    auth: state.auth
})

export default connect(setPropsToState)(LandingPage); 