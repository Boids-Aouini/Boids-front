import React, { Component } from 'react'
import WorkSpaceNav from './workSpaceNav/workSpaceNav'
import { connect } from 'react-redux';
import { Link, Redirect, useLocation, useParams } from 'react-router-dom';
import { referenceUrl, extractReference } from '../../utils/urlReference';
import { addedMember } from '../../../actions/membershipsActions';
import { getChannels, getPosts, currentChannel } from '../../../actions/channelActions';
import { current_server } from '../../../actions/serverActions'
import ChannelsNav from './channelsNav/channelsNav';
import Messages from './messages/messages';
class WorkSpace extends Component {

    componentWillMount() {
        if (this.props.memberShip.addedMember) {
            this.props.addedMember()
            for (let channel of this.props.channels.channels) {
                if (channel.name === extractReference(window.location.pathname.split('/')[3])) {
                    this.props.getPosts(this.props.servers.currentServer, channel.id);

                }
            }
        }
    }

    render() {
        return (

            <div>
                {this.props.servers.currentServer ? (<WorkSpaceNav />) : <></>}
                {this.props.servers.currentServer ? (<ChannelsNav />) : <></>}
                {this.props.servers.currentServer && this.props.channels.currentChannel ? <Messages /> : <></>}
            </div>
        )

    }
}
let mapPropsToState = state => ({ // setup channels and servers state to props in workspace comp
    channels: state.channels,
    servers: state.servers,
    memberShip: state.memberShip
})

export default connect(mapPropsToState, { getChannels, getPosts, currentChannel, current_server, addedMember })(WorkSpace); //  add get channels to props in workspace comp