import React, { Component } from 'react'
import { connect } from 'react-redux';
import './channelsNav.css'
import { Link } from 'react-router-dom';
import { referenceUrl } from '../../../utils/urlReference';
import { shortChannelName } from '../../../utils/shortName';
import { extractReference } from '../../../utils/urlReference'
import { currentChannel, getPosts } from '../../../../actions/channelActions'
class ChannelsNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            server_id: this.props.servers.currentServer
        }
    }
    onChangeChannel(channel_id) {
        this.props.currentChannel(channel_id)
        this.props.getPosts(this.props.servers.currentServer, channel_id)
    }
    componentDidMount() {
        let check = 0;
        let serverName = extractReference(window.location.pathname.split('/')[3])
        for (let server of this.props.servers.serversAsLeader) {
            if (server.name === serverName) {

                this.props.getChannels(server.id)
                setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                check++;
                break;
                // console.log(server)
            }
        }
        if (check === 0) {
            for (let server of this.props.servers.serversAsMember) {
                if (server.name === serverName) {

                    this.props.getChannels(server.id)
                    setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                    check++;
                    // console.log(server)
                }

            }
        }
    }
    render() {
        return (
            <div id="channelsNav">
                {this.props.channels.channels.map((channel, i) => (
                    <div key={i}>
                        <Link onClick={() => this.onChangeChannel(channel.id)} class="channelLink" to={'/boidsServer/' + window.location.pathname.split('/')[2] + '/' + referenceUrl(channel.name)}>
                            <span class="iconify" data-icon="uil:channel" data-inline="false"></span>
                            {shortChannelName(channel.name)}
                        </Link>
                    </div>
                ))}
            </div>

        )
    }
}

let mapPropsToState = state => ({
    channels: state.channels,
    servers: state.servers
})

export default connect(mapPropsToState, { currentChannel, getPosts })(ChannelsNav);