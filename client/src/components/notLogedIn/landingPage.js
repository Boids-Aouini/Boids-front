import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Boids gathers separated teams in one platform</h1>
                <p>so you can stay productive you and your team</p>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}
