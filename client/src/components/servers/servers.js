import React, { Component } from 'react'
import './servers.css';
import { connect } from 'react-redux';
import { createServer } from '../../actions/serverActions';
class Servers extends Component {

    render() {
        return (
            <div id="servers">
                <span class="iconify" data-icon="mdi:server-plus" data-inline="false"></span>
            </div>
        )
    }
}

const mapPropsToState = state => ({
    servers: state.servers
})

export default connect(mapPropsToState, { createServer })(Servers);