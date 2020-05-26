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
    componentWillMount() {
        let channelName = extractReference(window.location.pathname.split('/')[3])
        for (let channel of this.props.channels.channels) {
            if (channel.name === channelName) {
                this.props.currentChannel(channel.id)
                this.props.getPosts(this.props.servers.currentServer, channel.id)
                break;
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