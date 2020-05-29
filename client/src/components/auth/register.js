import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerAction } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';
import './register.css';
import TextField from '@material-ui/core/TextField';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            birthDate: ""
        }
    }
    onchange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        let validEmail = /@./;

        if (this.state.firstname.length === 0 || // send alert if there is a prob
            this.state.lastname.length === 0 ||
            this.state.email.length === 0 ||
            this.state.password.length === 0 ||
            this.state.birthDate.length === 0 ||
            !validEmail.test(this.state.email)
        ) {
            if (this.state.firstname.length === 0) alert('first name is empty')
            if (this.state.lastname.length === 0) alert('last name is empty')
            if (this.state.email.length === 0) alert('email is empty')
            else if (!validEmail.test(this.state.email)) alert('email is not valid')
            if (this.state.password.length === 0) alert('password is short')
            if (this.state.birthDate.length === 0) alert('birth date is empty')
        } else {
            let creds = this.state;
            let newDate = new Date();
            creds.createdAt = newDate.getFullYear() + "-" + newDate.getDay() + "-" + newDate.getMonth();
            this.props.registerAction(creds); // make request to register new account
        }
    }
    render() {
        return !this.props.auth.openedAcc ? (
            <div id="register-comp">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <TextField type="text" name="firstname" placeholder="First Name" maxLength={30} onChange={this.onchange.bind(this)} required /><br></br><br></br>
                    <TextField type="text" name="lastname" placeholder="Last Name" maxLength={30} onChange={this.onchange.bind(this)} required /><br></br><br></br>
                    <TextField type="email" name="email" placeholder="Email" maxLength={250} onChange={this.onchange.bind(this)} required /><br></br><br></br>
                    <TextField type="password" name="password" placeholder="Password" maxLength={250} onChange={this.onchange.bind(this)} required /><br></br><br></br>
                    <TextField type="date" name="birthDate" onChange={this.onchange.bind(this)} required /><br></br><br></br>
                    <button type="submit" onClick={this.onSubmit.bind(this)}>Register</button>

                </form>
            </div>
        ) : <Redirect to="/"></Redirect>
    }
}
Register.propTypes = {
    registerAction: PropTypes.func.isRequired // register action is required in register component
}

const mapStateToProps = state => ({ // reteive redux's state(s)
    auth: state.auth // set this.props.auth to redux's auth state
});

export default connect(mapStateToProps, { registerAction })(Register); // add to props auth state and registerAction
