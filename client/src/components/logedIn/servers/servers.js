import React, { Component } from 'react'
import './servers.css';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/serverActions';
import { retreiveServerAsLeader } from '../../../actions/serverActions';
import { Link } from 'react-router-dom';
import { referenceUrl } from '../../../utils/urlReference';
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
            let newServer = {
                name: newServerName,
                createdAt
            }
            this.props.createServer(newServer)

        }

    }

    componentWillMount() {
        this.props.retreiveServerAsLeader();
    }
    render() {
        return (
            <div id="servers">

                <span id="makeNewServer" onClick={this.onNewServer.bind(this)}>

                    <span class="iconify" data-icon="mdi:server-plus" data-inline="false"></span>
                </span>
                <div id="serversAsALeader">
                    {this.props.servers.serversAsLeader.map((server, i) => {
                        return (
                            <div class="serverAsLeader" key={i}>
                                <Link class="link" to={'/boidsServer/' + referenceUrl(server.name)}>
                                    <div class="serversLeader">
                                        <span class="iconify" data-icon="wpf:administrator" data-inline="false"></span>
                                        <p>{server.name}</p>
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

const mapPropsToState = state => ({
    servers: state.servers
})

export default connect(mapPropsToState, { createServer, retreiveServerAsLeader, logoutAction })(Servers);