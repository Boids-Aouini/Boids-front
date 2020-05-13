import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WorkSpaceNav extends Component {
    render() {
        return (
            <nav>
                <Link to={`/options/boidsServer/${window.location.pathname.split('/')[2]}/addMember`}>Add Member</Link>
            </nav>
        )
    }
}
