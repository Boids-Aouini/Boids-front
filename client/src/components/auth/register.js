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
        console.log(this.state)

        // console.log(e.target.firstname.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="firsname" placeholder="First Name" maxLength={30} onChange={this.onchange.bind(this)}></input><br></br>
                    <input type="text" name="firstname" placeholder="Last Name" maxLength={30} onChange={this.onchange.bind(this)}></input><br></br>
                    <input type="email" name="email" placeholder="Email" maxLength={250} onChange={this.onchange.bind(this)}></input><br></br>
                    <input type="password" name="password" placeholder="Password" maxLength={250} onChange={this.onchange.bind(this)}></input><br></br>
                    <input type="date" name="birthDate" onChange={this.onchange.bind(this)}></input><br></br>
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

export default connect(mapStateToProps, registerAction)(Register);
// export default Register;