import React, { Component } from 'react'
import WorkSpaceNav from './workSpaceNav/workSpaceNav'
import { connect } from 'react-redux';
import { Link, Redirect, useLocation, useParams } from 'react-router-dom';
import { referenceUrl, extractReference } from '../../utils/urlReference';
import { getChannels, getPosts, currentChannel } from '../../../actions/channelActions';
import { current_server } from '../../../actions/serverActions'
import ChannelsNav from './channelsNav/channelsNav';
import Messages from './messages/messages';
class WorkSpace extends Component {

    getIds(serverName, channelName) {
        console.log(this.props.servers.currentServer, this.props.channels.currentChannel)
        if (this.props.servers.currentServer && this.props.channels.currentChannel) return true;
        let check = 0;
        if (!this.props.servers.currentServer) {
            for (let server of this.props.servers.serversAsLeader) {
                if (server.name === serverName) {

                    // this.props.getChannels(server.id)
                    this.props.currentServer(server.id)
                    check++;
                    break;
                }
            }
            if (check === 0) {

                for (let server of this.props.servers.serversAsMember) {
                    if (server.name === serverName) {

                        // this.props.getChannels(server.id)
                        this.props.currentServer(server.id)
                        check++;
                        break
                    }

                }

            }


        } else if (this.state.server_id) { check++ }

        if (!this.props.channels.currentChannel) {

            for (let channel of this.props.channels.channels) {
                if (channel.name === channelName) {
                    this.props.currentChannel(channel.id)
                    check++;
                    break
                }
            }
            if (check === 1) {
                this.props.getChannels(this.props.servers.currentServer)
                    .then(landingChannel => {
                        this.props.currentChannel(landingChannel.channel_id)
                        this.props.getPosts(landingChannel.server_id, landingChannel.channel_id)
                    })
            }
        }

        return check === 2

    }
    // this.getIds(extractReference(window.location.pathname.split('/')[2]), extractReference(window.location.pathname.split('/')[3])) ? 
    render() {
        return (

            <div>
                {this.props.servers.currentServer && this.props.channels.currentChannel ? (<WorkSpaceNav />) : <></>}
                {this.props.servers.currentServer ? (<ChannelsNav />) : <></>}
                {this.props.servers.currentServer && this.props.channels.currentChannel ? <Messages /> : <></>}
            </div>
        )

    }
}
let mapPropsToState = state => ({ // setup channels and servers state to props in workspace comp
    channels: state.channels,
    servers: state.servers
})

export default connect(mapPropsToState, { getChannels, getPosts, currentChannel, current_server })(WorkSpace); //  add get channels to props in workspace comp