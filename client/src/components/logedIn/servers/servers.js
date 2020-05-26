import React, { Component } from 'react'
import './servers.css';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/serverActions';
import { retreiveServerAsLeader, retreiveServerAsMember, current_server } from '../../../actions/serverActions';
import { getChannels, getPosts, currentChannel } from '../../../actions/channelActions'
import { Link } from 'react-router-dom';
import { referenceUrl, extractReference } from '../../utils/urlReference';
import { logoutAction } from '../../../actions/authActions';

class Servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newServer: ''
        }
    }
    onNewServer() {
        let newServerName = prompt('Write your new server name')
        if (newServerName !== null && newServerName === "") { newServerName = prompt('you didn\'t write any thing for your server\'s name') }
        if (newServerName === "" && newServerName !== null) { newServerName = prompt('if you dont write a server name now your request is going to be canseled') }
        if (newServerName !== null && newServerName !== "") {
            let currentDate = new Date();
            let createdAt = currentDate.getFullYear() + '-' + currentDate.getDay() + '-' + currentDate.getMonth()
            let newServer = { // create server data
                name: newServerName,
                createdAt
            }
            this.props.createServer(newServer) // make request to create new server

        }

    }

    componentWillMount() {
        let check = 0;
        this.props.retreiveServerAsLeader() // retreive servers the user is leader in them and add it to serversAsLeader in redux's state
            .then(() => {
                if (window.location.pathname.split('/')[1] === 'boidsServer') {
                    for (let server of this.props.servers.serversAsLeader) {
                        if (server.name === window.location.pathname.split('/')[2]) {
                            this.props.current_server(server.id)
                            this.props.getChannels(server.id)
                                .then(getChannelsData => {
                                    let channelName = extractReference(window.location.pathname.split('/')[3])
                                    console.log(channelName)
                                    for (let channel of getChannelsData.channels) {
                                        if (channel.name === channelName) {
                                            this.props.currentChannel(channel.id)
                                            this.props.getPosts(this.props.servers.currentServer, channel.id)
                                            break;
                                        }
                                    }
                                })
                            check++;
                            // .then(landingChannel => {
                            //     this.props.currentChannel(landingChannel.channel_id)
                            //     this.props.getPosts(landingChannel.server_id, landingChannel.channel_id)
                            // })
                        }
                    }
                }
            });
        this.props.retreiveServerAsMember()
            .then(() => {
                if (window.location.pathname.split('/')[1] === 'boidsServer' && check === 0) {


                    for (let server of this.props.servers.serversAsMember) {
                        if (server.name === window.location.pathname.split('/')[2]) {
                            this.props.current_server(server.id)
                            this.props.getChannels(server.id)
                                .then(getChannelsData => {
                                    let channelName = extractReference(window.location.pathname.split('/')[3])
                                    console.log(channelName)
                                    for (let channel of getChannelsData.channels) {
                                        if (channel.name === channelName) {
                                            this.props.currentChannel(channel.id)
                                            this.props.getPosts(this.props.servers.currentServer, channel.id)
                                            break;
                                        }
                                    }
                                })
                        }

                    }
                }
            })
    }
    onClickServer(server_id) {
        this.props.current_server(server_id)
        this.props.getChannels(server_id)
            .then(channels => {
                this.props.currentChannel(channels.channels[0].id)
                this.props.getPosts(channels.server_id, channels.channels[0].id)
            })
    }
    render() {
        return (
            <div data-testid="serversComp" id="serversComp">

                <span data-testid="makeNewServer" id="makeNewServer" onClick={this.onNewServer.bind(this)}>

                    <span class="iconify" data-icon="mdi:server-plus" data-inline="false"></span>
                </span>
                <div data-testid="servers" id="servers">
                    {this.props.servers.serversAsLeader.map((server, i) => {
                        return (
                            <div class="serverAsLeader" key={i}>
                                <Link onClick={() => this.onClickServer(server.id)} class="link" to={'/boidsServer/' + referenceUrl(server.name) + '/Announcement'}>
                                    <div class="serversLeader">
                                        <span class="iconify" data-icon="wpf:administrator" data-inline="false"></span>
                                        <p className="serverName">{server.name}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    {this.props.servers.serversAsMember.map((server, i) => {
                        return (
                            <div class="serverAsMember" key={i}>
                                <Link onClick={() => this.onClickServer(server.id)} class="link" to={'/boidsServer/' + referenceUrl(server.name) + '/Announcement'}>
                                    <div class="serversMember">
                                        <span class="iconify" data-icon="whh:birdhouse" data-inline="false"></span>
                                        <p className="serverName">{server.name}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <Link id="logout" onClick={(e) => this.props.logoutAction()}>
                    <span class="iconify" data-icon="ri:logout-box-r-line" data-inline="false"></span>
                </Link>
            </div>

        )
    }
}

const mapPropsToState = state => ({ // add to props redux's servers state
    servers: state.servers
})

export default connect(mapPropsToState, { createServer, retreiveServerAsLeader, getChannels, current_server, logoutAction, retreiveServerAsMember, getPosts, currentChannel })(Servers); // add actions to servers comp props