import React, { Component } from 'react'
import { connect } from 'react-redux';
import './channelsNav.css'
import { Link } from 'react-router-dom';
import { referenceUrl } from '../../../../utils/urlReference';
import { shortChannelName } from '../../../../utils/shortName';
class ChannelsNav extends Component {
    render() {
        return (
            <div id="channelsNav">
                {this.props.channels.channels.map((channel, i) => (
                    <div key={i}>
                        <Link class="channelLink" to={'/boidsServer/' + window.location.pathname.split('/')[2] + '/' + referenceUrl(channel.name)}>
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
    channels: state.channels
})

export default connect(mapPropsToState)(ChannelsNav);