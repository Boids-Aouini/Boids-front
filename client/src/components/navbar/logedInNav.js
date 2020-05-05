import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutAction } from '../../actions/authActions';
class LogedInNav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="whyBoids">Why Boids ?</Link>
                <Link onClick={(e) => this.props.logoutAction()}>Log out</Link>

            </nav>
        )
    }
}

export default connect(() => { }, { logoutAction })(LogedInNav);
