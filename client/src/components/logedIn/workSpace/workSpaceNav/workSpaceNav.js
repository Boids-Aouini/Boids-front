import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeChannel } from '../../../../actions/channelActions';
import './workSpaceNav.css'

class WorkSpaceNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            createdAt: '',
            server_id: null
        }
    }
    check(serverName, serversAsLeader) { // check if server in the serversAsLeader state
        for (let server of serversAsLeader) {
            if (server.name === serverName) {
                setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                return true;
            }
        }
        return false;
    }
    makeChannel() { // make new channel
        let name = prompt('insert your new channel\'s name'); // retrive new channel name
        while (name === "") {
            name = prompt('your new channel\'s name is empty');

        }
        if (name !== null) {
            let newChannel = {
                name,
                server_id: this.state.server_id
            };
            let currentDate = new Date();
            newChannel.createdAt = currentDate.getFullYear() + "-" + currentDate.getDay() + "-" + currentDate.getMonth();
            this.props.makeChannel(newChannel); // make request to add channel to the boids server
        }
    }
    render() {
        return this.check(window.location.pathname.split('/')[2], this.props.servers.serversAsLeader) ? (
            <nav id="workspace-nav">
                <Link class="link" to={`/options/boidsServer/${window.location.pathname.split('/')[2]}/addMember`}>Add Member</Link>
                <Link class="link" onClick={this.makeChannel.bind(this)}>Add Channel</Link>
            </nav>
        ) : (<div></div>)
    }
}

let mapPropsToState = state => ({ // add servers redux's state to props comp
    servers: state.servers
})

export default connect(mapPropsToState, { makeChannel })(WorkSpaceNav); // add makeChannel action