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
                <form>
                    <input type="text" name="search" placeholder="Search" onChange={this.onchange.bind(this)}></input>
                    <button onClick={this.onSearch.bind(this)}>Search</button>
                </form>
                <Link id="logout" onClick={(e) => this.props.logoutAction()}>Log out</Link>

            </nav>
        )
    }
}

export default connect(() => { }, { logoutAction })(LogedInNav);
