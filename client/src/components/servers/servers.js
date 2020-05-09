import React, { Component } from 'react'
import './servers.css';
import { connect } from 'react-redux';
import { createServer } from '../../actions/serverActions';
import { retreiveServerAsLeader } from '../../actions/serverActions';

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
                <span onClick={this.onNewServer.bind(this)}>

                    <span class="iconify" data-icon="mdi:server-plus" data-inline="false"></span>
                </span>
            </div>
        )
    }
}

const mapPropsToState = state => ({
    servers: state.servers
})

export default connect(mapPropsToState, { createServer, retreiveServerAsLeader })(Servers);