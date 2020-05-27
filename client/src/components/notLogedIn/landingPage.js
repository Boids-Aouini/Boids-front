import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './landingPage.css'
class LandingPage extends Component {
    render() {
        return (
            <div id="landingContent">
                <h1 id="mainContent">Boids gathers separated teams in one platform</h1>
                <p>so you can stay productive you and your team</p>
                {!this.props.auth.openedAcc ? (<Link to="/register">Register</Link>) : (<span></span>)}
            </div>
        )
    }
}

let setPropsToState = state => ({ // added auth redux's state to props comp
    auth: state.auth
})

export default connect(setPropsToState)(LandingPage); 