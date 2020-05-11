import React, { Component } from 'react'

export default class AddNewMember extends Component {
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
