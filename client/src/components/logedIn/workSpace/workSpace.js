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
            channel_id: this.props.channels.currentChannel,
            server_id: this.props.servers.currentServer,
            server_name: window.location.pathname.split('/')[2]
        }
    }
    getIds(serverName, channelName) {
        let check = 0;
        for (let server of this.props.servers.serversAsLeader) {
            if (server.name === serverName) {

                // this.props.getChannels(server.id)
                setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                check++;
                break;
            }
        }
        if (check === 0) {

            for (let server of this.props.servers.serversAsMember) {
                if (server.name === serverName) {

                    // this.props.getChannels(server.id)
                    setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                    check++;
                    break
                }

            }


        }
        for (let channel of this.props.channels.channels) {
            if (channel.name === channelName) {
                setTimeout(() => { this.setState({ channel_id: channel.id }) }, 0)
                check++;
                break
            }
        }
        return check === 2

    }

    render() {
        return this.getIds(extractReference(window.location.pathname.split('/')[2]), extractReference(window.location.pathname.split('/')[3])) ? (

            <div>
                <WorkSpaceNav />
                <ChannelsNav server_id={this.state.server_id} />
                {this.state.server_id && this.state.channel_id ? <Messages server_id={this.state.server_id} channel_id={this.state.channel_id} /> : <></>}
            </div>
        ) : <></>

    }
}
let mapPropsToState = state => ({ // setup channels and servers state to props in workspace comp
    channels: state.channels,
    servers: state.servers
})

export default connect(mapPropsToState, { getChannels, getPosts })(WorkSpace); //  add get channels to props in workspace comp