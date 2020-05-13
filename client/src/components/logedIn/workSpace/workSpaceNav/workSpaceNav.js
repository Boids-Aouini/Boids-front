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
    check(serverName, serversAsLeader) {
        for (let server of serversAsLeader) {
            if (server.name === serverName) {
                setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                return true;
            }
        }
        return false;
    }
    makeChannel() {
        let name = prompt('insert your new channel\'s name');
        while (name === "") {
            name = prompt('your new channel\'s name is empty');

        }
        if (name !== null) {
            console.log(name, this.state.server_id)
            let newChannel = {
                name,
                server_id: this.state.server_id
            };
            let currentDate = new Date();
            newChannel.createdAt = currentDate.getFullYear() + "-" + currentDate.getDay() + "-" + currentDate.getMonth();

        }
    }
    render() {
        return this.check(window.location.pathname.split('/')[2], this.props.servers.serversAsLeader) ? (
            <nav>
                <Link class="link" to={`/options/boidsServer/${window.location.pathname.split('/')[2]}/addMember`}>Add Member</Link>
                <Link class="link" onClick={this.makeChannel.bind(this)}>Add Channel</Link>
            </nav>
        ) : (<div></div>)
    }
}

let mapPropsToState = state => ({
    servers: state.servers
})

export default connect(mapPropsToState, { makeChannel })(WorkSpaceNav);