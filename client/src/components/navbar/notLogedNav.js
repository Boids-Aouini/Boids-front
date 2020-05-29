import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './notLogedNav.css';
export default class NotLogedNav extends Component {
    render() {
        return (
            <nav id="not-loged-nav">
                <Link class="notLogedNav-links" to="/">Home</Link>
                <Link class="notLogedNav-links" to="/whyBoids">Why Boids ?</Link>
                <Link class="notLogedNav-links" id="login" to="/login">Login</Link>
            </nav>
        )
    }
}
