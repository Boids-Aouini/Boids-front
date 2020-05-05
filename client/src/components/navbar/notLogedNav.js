import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './notLogedNav.css';
export default class NotLogedNav extends Component {
    render() {
        return (
            <nav>
                <Link class="links" to="/">Home</Link>
                <Link class="links" to="/whyBoids">Why Boids ?</Link>
                <Link class="links" id="login" to="/login">Login</Link>
            </nav>
        )
    }
}
