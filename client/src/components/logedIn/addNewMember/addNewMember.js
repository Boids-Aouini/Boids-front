import React, { Component } from 'react'
import { extractReference } from '../../utils/urlReference';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMember, addedMember } from '../../../actions/membershipsActions';
import ChannelsNav from '../workSpace/channelsNav/channelsNav'
import WorkSpaceNav from '../workSpace/workSpaceNav/workSpaceNav';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './addNewMember.css'
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

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
                    this.props.addedMember()
                })

        }
    }
    render() {
        // const classes = useStyles()
        return !this.props.memberShip.addedMember ? (
            <div>
                {this.props.servers.currentServer ? (<WorkSpaceNav />) : <></>}
                {this.props.servers.currentServer ? (<ChannelsNav />) : <></>}
                <form id="addNewMember-form">
                    <TextField onChange={this.onChange.bind(this)} label="Role" type="text" name="role" /><br></br>
                    <TextField onChange={this.onChange.bind(this)} label="Email" type="email" name="email" /><br></br>
                    <TextField onChange={this.onChange.bind(this)} label="Message" name="message" /><br></br>
                    <button id="addMember-btn" onClick={this.onAdd.bind(this)}>Add Member</button>
                </form>
            </div>) : (<Redirect to={'/boidsServer/' + window.location.pathname.split('/')[3] + '/Announcement'} />)
    }
}
let mapPropsToState = state => ({ // set props to servers redux's state
    servers: state.servers,
    channels: state.channels,
    memberShip: state.memberShip

})
export default connect(mapPropsToState, { addMember, addedMember })(AddNewMember); // added action