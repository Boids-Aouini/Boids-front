import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeChannel } from '../../../../actions/channelActions';

class WorkSpaceNav extends Component {
    render() {
        return (
            <nav>
                <Link to={`/options/boidsServer/${window.location.pathname.split('/')[2]}/addMember`}>Add Member</Link>
            </nav>
        )
    }
}

export default connect(() => { }, { makeChannel })(WorkSpaceNav);