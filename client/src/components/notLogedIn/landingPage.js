import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Boids gathers separated teams in one platform</h1>
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