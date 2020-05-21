import React, { Component } from 'react'
import './logedInNav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutAction } from '../../actions/authActions';
class LogedInNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    onchange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSearch(e) {
        e.preventDefault()
    }
    render() {
        return (
            <nav>

            </nav>
        )
    }
}


export default LogedInNav;
