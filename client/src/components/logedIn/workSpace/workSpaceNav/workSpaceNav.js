import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeChannel } from '../../../../actions/channelActions';

class WorkSpaceNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            createdAt: '',
            server_id: null
        }
    }
    render() {
        return (
            <nav>
                <Link to={`/options/boidsServer/${window.location.pathname.split('/')[2]}/addMember`}>Add Member</Link>
            </nav>
        )
    }
}

let mapPropsToState = state => ({
    servers: state.servers
})

export default connect(mapPropsToState, { makeChannel })(WorkSpaceNav);