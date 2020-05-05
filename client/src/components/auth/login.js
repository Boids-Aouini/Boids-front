import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authActions';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onchange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.loginAction(this.state);
    }
    render() {
        return !this.props.auth.openedAcc ? (
            <div>
                <form>
                    <input maxLength={250} onChange={this.onchange.bind(this)} type="email" placeholder="Email" name="email"></input><br></br>
                    <input maxLength={250} onChange={this.onchange.bind(this)} type="password" placeholder="Password" name="password"></input><br></br>
                    <button onClick={e => this.onSubmit(e)}>Log In</button>
                </form>
                <Link style={{ marginLeft: "45%" }} to="/register">Register</Link>
            </div>
        ) : (<Redirect to="/"></Redirect>)
    }
}

let mapPropstoState = state => ({
    auth: state.auth
})

export default connect(mapPropstoState, { loginAction })(Login);
