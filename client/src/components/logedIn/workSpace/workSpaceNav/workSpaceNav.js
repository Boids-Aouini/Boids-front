import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class WorkSpaceNav extends Component {
    render() {
        return (
            <nav>
                <Redirect to={`/options/boidsServer/${window.location.pathname.split('/')[2]}/addMember`}>add Member</Redirect>
            </nav>
        )
    }
}
