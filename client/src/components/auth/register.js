import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerAction } from '../../actions/authActions';

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

        if (this.state.firstname.length === 0 ||
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

            this.props.registerAction(this.state)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="firstname" placeholder="First Name" maxLength={30} onChange={this.onchange.bind(this)} required ></input><br></br>
                    <input type="text" name="lastname" placeholder="Last Name" maxLength={30} onChange={this.onchange.bind(this)} required ></input><br></br>
                    <input type="email" name="email" placeholder="Email" maxLength={250} onChange={this.onchange.bind(this)} required ></input><br></br>
                    <input type="password" name="password" placeholder="Password" maxLength={250} onChange={this.onchange.bind(this)} required ></input><br></br>
                    <input type="date" name="birthDate" onChange={this.onchange.bind(this)} required ></input><br></br>
                    <button type="submit" onClick={this.onSubmit.bind(this)}>Register</button>

                </form>
            </div>
        )
    }
}
Register.propTypes = {
    register: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { registerAction })(Register);
// export default Register;