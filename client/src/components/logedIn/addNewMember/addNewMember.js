import React, { Component } from 'react'

export default class AddNewMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            email: '',
            message: '',
            server_name: window.location.pathname.split('/')[3]
        }
    }
    onChange(e) {
        this.setState({ [e.tagert.name]: e.target.value });
    }
    onAdd(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.onChange.bind(this)} placeholder="Role" type="text" name="role"></input><br></br>
                    <input onChange={this.onChange.bind(this)} placeholder="Email" type="email" name="email"></input><br></br>
                    <textarea onChange={this.onChange.bind(this)} placeholder="Message" name="message"></textarea><br></br>
                    <button onClick={this.onAdd.bind(this)}>Add Member</button>
                </form>
            </div>
        )
    }
}
