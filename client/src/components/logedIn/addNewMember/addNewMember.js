import React, { Component } from 'react'
import { extractReference } from '../../utils/urlReference';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMember } from '../../../actions/membershipsActions';
import ChannelsNav from '../workSpace/channelsNav/channelsNav'
import WorkSpaceNav from '../workSpace/workSpaceNav/workSpaceNav';
class AddNewMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            email: '',
            message: '',
            addedMember: false
        }
        this.setServerState = this.setServerState.bind(this);
        this.validPage = this.validPage.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onAddMember() {
        this.setState({ addedMember: true })

    }
    validPage(serverName, serversAsLeader) { // if server name in serversAsLeader return server's id
        let result = null
        for (let server of serversAsLeader) {
            if (server.name === serverName) {

                result = server.id;
                break;
            }
        }
        return result;
    }
    setServerState(server_id) { // if server_id is not null return true else false
        if (server_id !== null) {
            setTimeout(() => { this.setState({ server_id }) }, 0)

            return true
        }
        return false
    }

    onAdd(e) {
        e.preventDefault()
        let validEmail = /@./;
        if (this.state.role === "" || // if there is a prob make alert 
            !validEmail.test(this.state.email) ||
            this.state.message === "") {
            if (this.state.role === '') alert('role is empty')
            else if (!validEmail.test(this.state.email)) alert('email is not valid')
            else if (this.state.message === '') alert('message is empty')
        } else {
            let newMember = this.state;
            delete newMember.addedMember;
            newMember.server_id = this.props.servers.currentServer;
            this.props.addMember(newMember) //make request to add new member to server
                .then(() => {
                    this.setState({ addedMember: true })
                })

        }
    }
    render() {
        return !this.addedMember ? (
            <div>
                {this.props.servers.currentServer ? (<WorkSpaceNav />) : <></>}
                {this.props.servers.currentServer ? (<ChannelsNav />) : <></>}
                <form>
                    <input onChange={this.onChange.bind(this)} placeholder="Role" type="text" name="role"></input><br></br>
                    <input onChange={this.onChange.bind(this)} placeholder="Email" type="email" name="email"></input><br></br>
                    <textarea onChange={this.onChange.bind(this)} placeholder="Message" name="message"></textarea><br></br>
                    <button onClick={this.onAdd.bind(this)}>Add Member</button>
                </form>
            </div>) : (<Redirect to={'/boidsServer/' + window.location.pathname.split('/')[3] + '/Announcement'} />)
    }
}
let mapPropsToState = state => ({ // set props to servers redux's state
    servers: state.servers,
    channels: state.channels

})
export default connect(mapPropsToState, { addMember })(AddNewMember); // added action