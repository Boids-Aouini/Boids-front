import React, { Component } from 'react'

export default class AddNewMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            email: '',
            message: ''
        }
    }
    onChange(e) {
        this.setState({ [e.tagert.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Role" type="text" name="role"></input>
                    <input placeholder="Email" type="email" name="email"></input>
                    <textarea placeholder="Message" name="message"></textarea>
                </form>
            </div>
        )
    }
}
