import React, { Component } from 'react'
import { extractReference } from '../../../utils/urlReference';

class AddNewMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            email: '',
            message: '',
            server_id: null
        }
        this.validPage = this.validPage.bind(this);
    }
    // extractReference(window.location.pathname.split('/')[3])
    onChange(e) {
        this.setState({ [e.tagert.name]: e.target.value });
    }
    validPage(serverName, serversAsLeader) {
        for (let server in serversAsLeader) {
            if (server.name === serverName) {
                this.setState({ server_id: server.id });
                return true;
            }
        }
        return false;
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

export default AddNewMember;