import React, { Component } from 'react'

export default class SignUp extends Component {
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
        console.log(e.target.firstname.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="firsname" placeholder="First Name"></input><br></br>
                    <input type="text" name="firstname" placeholder="Last Name"></input><br></br>
                    <input type="email" name="email" placeholder="Email"></input><br></br>
                    <input type="password" name="password" placeholder="Password"></input><br></br>
                    <input type="date" name="birthDate"></input><br></br>
                    <button type="submit">Register</button>

                </form>
            </div>
        )
    }
}
