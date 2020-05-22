import React, { Component } from 'react'
import WorkSpaceNav from './workSpaceNav/workSpaceNav'
import { connect } from 'react-redux';
import { Link, Redirect, useLocation, useParams } from 'react-router-dom';
import { referenceUrl, extractReference } from '../../utils/urlReference';
import { getChannels, getPosts } from '../../../actions/channelActions';
import ChannelsNav from './channelsNav/channelsNav';
import Messages from './messages/messages';
class WorkSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel_id: null,
            server_id: null,
            server_name: window.location.pathname.split('/')[2]
        }
    }
    getIds(serverName, channelName) {
        let prev_server = sessionStorage.getItem('sshhhhhxc_prev_server');
        let prev_channel = sessionStorage.getItem('sshhhhhxc_prev_channel')
        let check = 0;
        if (prev_channel !== channelName || prev_server !== serverName) {
            if (prev_server !== serverName) {
                for (let server of this.props.servers.serversAsLeader) {
                    if (server.name === serverName) {

                        this.props.getChannels(server.id)
                        sessionStorage.setItem('sshhhhhxc_prev_channel', server.name)
                        setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                        check++;
                        break;
                        // sessionStorage.setItem('sshhhhhxc_prev_server', serverName)

                        // console.log(server)
                    }
                }
                if (check === 0) {

                    for (let server of this.props.servers.serversAsMember) {
                        if (server.name === serverName) {

                            this.props.getChannels(server.id)
                            sessionStorage.setItem('sshhhhhxc_prev_channel', server.name)
                            setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                            check++;
                            // console.log(server)
                        }
                    }
                }

            }

            if (prev_channel !== channelName) {

                for (let channel of this.props.channels.channels) {
                    if (channel.name === channelName) {
                        this.props.getPosts(this.state.server_id, channel.id)
                        setTimeout(() => { this.setState({ channel_id: channel.id }) }, 0)

                        check++
                    }
                }

            }

            return check === 2;


        }

    }

    render() {
        return this.getIds(extractReference(extractReference(window.location.pathname.split('/')[2])), extractReference(extractReference(window.location.pathname.split('/')[3]))) || (!this.state.channel_id && this.state.server_id ? this.props.getChannels(this.state.server_id) : null)

            ? (

                <div>
                    <WorkSpaceNav />
                    <ChannelsNav server_id={this.state.server_id} />
                    {this.state.channel_id ? <Messages server_id={this.state.server_id} channel_id={this.state.channel_id} /> : <div></div>}
                </div>) :
            <div></div>

    }
}
let mapPropsToState = state => ({ // setup channels and servers state to props in workspace comp
    channels: state.channels,
    servers: state.servers
})

export default connect(mapPropsToState, { getChannels, getPosts })(WorkSpace); //  add get channels to props in workspace comp