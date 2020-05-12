import React, { Component } from 'react'
import { extractReference } from '../../../utils/urlReference';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMember } from '../../../actions/membershipsActions';

class AddNewMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            email: '',
            message: '',
            server_id: null
        }
    }
    // extractReference(window.location.pathname.split('/')[3])
    onChange(e) {
        this.setState({ [e.tagert.name]: e.target.value });
    }
    validPage(serverName, serversAsLeader) {
        for (let server of serversAsLeader) {
            if (server.name === serverName) {
                return server.id;
            }
        }
        return null;
    }
    setServerState(server_id) {
        if (!!server_id) {
            this.setState({ server_id });
            return true
        }
        return false
    }
    onAdd(e) {
        e.preventDefault()
        let validEmail = /@./;
        if (this.state.role === "" ||
            !validEmail.test(this.state.email) ||
            this.state.message === "") {
            if (this.state.role === '') alert('role is empty')
            else if (!validEmail.test(this.state.email)) alert('email is not valid')
            else if (this.state.message === '') alert('message is empty')
        } else {
            this.props.addMember(this.state)
        }
    }
    render() {
        return this.validPage(extractReference(window.location.pathname.split('/')[3]), this.props.servers.serversAsLeader) ? (
            <div>
                <form>
                    <input onChange={this.onChange.bind(this)} placeholder="Role" type="text" name="role"></input><br></br>
                    <input onChange={this.onChange.bind(this)} placeholder="Email" type="email" name="email"></input><br></br>
                    <textarea onChange={this.onChange.bind(this)} placeholder="Message" name="message"></textarea><br></br>
                    <button onClick={this.onAdd.bind(this)}>Add Member</button>
                </form>
            </div>
        ) : (<Redirect to="/" />)
    }
}
let mapPropsToState = state => ({
    servers: state.servers
})
export default connect(mapPropsToState, { addMember })(AddNewMember);