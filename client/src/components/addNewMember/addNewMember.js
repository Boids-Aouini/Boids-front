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
    onAdd(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Role" type="text" name="role"></input><br></br>
                    <input placeholder="Email" type="email" name="email"></input><br></br>
                    <textarea placeholder="Message" name="message"></textarea><br></br>
                    <button>Add Member</button>
                </form>
            </div>
        )
    }
}
