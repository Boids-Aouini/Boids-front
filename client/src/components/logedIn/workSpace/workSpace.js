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
        let server_name = null;
        let check = 0;

        for (let server of this.props.servers.serversAsLeader) {
            if (server.name === serverName) {
                server_name = server.name;
                setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                check++;
                // console.log(server)
            }
        }
        if (check === 0) {

            for (let server of this.props.servers.serversAsMember) {
                if (server.name === serverName) {
                    server_name = server.name;
                    setTimeout(() => { this.setState({ server_id: server.id }) }, 0)
                    check++;
                    // console.log(server)
                }
            }
        }
        if (check === 1) {

            sessionStorage.setItem('shhhxx', server_name)
        }

        for (let channel of this.props.channels.channels) {
            if (channel.name === channelName) {
                setTimeout(() => { this.setState({ channel_id: channel.id }) }, 0)
                check++
                // console.log(channel)
            }
        }

        return check === 2;


    }
    getServerId(serverName) {
        for (let server of this.props.servers.serversAsLeader) {
            console.log(server)
            if (server.name === serverName) {
                this.setState({ server_id: server.id })
                return true
            }
        }
        for (let server of this.props.servers.serversAsMember) {
            if (server.name === serverName) {
                this.setState({ server_id: server.id })
                return true;
            }
        }

    }

    componentWillUpdate() {
        // console.log(window.location.pathname.split('/')[2], this.state.server_name)
        // this.setState({ server_name: })
    }
    // onUrlChange() {
    //     let location = useLocation();
    //     React.useEffect(() => {
    //         ga.send(["pageview", location.pathname]);
    //         console.log(location)
    //     }, [location]);

    // }
    render() {
        let { serverName, channel } = useParams();
        return this.getIds(extractReference(serverName), extractReference(channel)) || (!this.state.channel_id && this.state.server_id ? this.props.getChannels(this.state.server_id) : sessionStorage.getItem('shhhxx') !== this.state.server_name ? this.props.getChannels(this.state.server_id) : null)

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