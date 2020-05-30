import React, { Component } from 'react'
import { connect } from 'react-redux';
import './channelsNav.css'
import { Link } from 'react-router-dom';
import { referenceUrl } from '../../../utils/urlReference';
import { shortChannelName } from '../../../utils/shortName';
import { extractReference } from '../../../utils/urlReference'
import { currentChannel, getPosts } from '../../../../actions/channelActions'
class ChannelsNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            max780: null
        }
    }
    onChangeChannel(channel_id) {
        this.props.currentChannel(channel_id)
        this.props.getPosts(this.props.servers.currentServer, channel_id)
    }

    checkServerinLeader(){
        let place = window.location.pathname.split('/')[1];
        let serverName = place === 'boidsServer' ? window.location.pathname.split('/')[2] : place === 'options' ?
            window.location.pathname.split('/')[3] : null;
        
        for(let server of this.props.servers.serversAsLeader){
            if(server.name === serverName) return true;
        }
    }

    checkMedia(){
        let checkMedia = window.matchMedia('(max-width: 780px)')
        setTimeout(()=>this.setState({max780: checkMedia.matches}), 0)
        return true
    }

    render() {

        return this.checkMedia() ? (
            <div id="channelsNav" style={
                this.state.max780 ? {
                    marginTop: (!this.checkServerinLeader()? '16%': '23%')
                } : {}
            }>
                {this.props.channels.channels.map((channel, i) => (
                    <div key={i}>
                        <Link onClick={() => this.onChangeChannel(channel.id)} class="channelLink" to={'/boidsServer/' + window.location.pathname.split('/')[2] + '/' + referenceUrl(channel.name)}>
                            <span class="iconify" data-icon="uil:channel" data-inline="false"></span>
                            {shortChannelName(channel.name)}
                        </Link>
                    </div>
                ))}
            </div>

        ) : <></>
    }
}

let mapPropsToState = state => ({
    channels: state.channels,
    servers: state.servers
})

export default connect(mapPropsToState, { currentChannel, getPosts })(ChannelsNav);