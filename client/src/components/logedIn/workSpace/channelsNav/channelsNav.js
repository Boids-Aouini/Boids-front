import React, { Component } from 'react'
import { connect } from 'react-redux';

class ChannelsNav extends Component {
    render() {
        return (
            <div>
                {this.props.channels.channels.map((channel, i) => (
                    <div key={i}>
                        <span class="iconify" data-icon="whh:birdhouse" data-inline="false"></span>
                        <Link to={'/boidsServer/' + window.location.pathname.split('/')[2] + '/' + referenceUrl(channel.name)}>{channel.name}</Link>
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