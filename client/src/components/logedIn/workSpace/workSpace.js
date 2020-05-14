import React, { Component } from 'react'
import WorkSpaceNav from './workSpaceNav/workSpaceNav'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { extractReference } from '../../../utils/urlReference'
class WorkSpace extends Component {
    render() {
        return (
            <div>
                <WorkSpaceNav />
                <div>
                    {this.props.channels.channels.map((channel, i) => (
                        <div>
                            <Link to={'/boidsServer/' + window.location.pathname.split('/')[2] + '/' + extractReference(channel.name)}>{channel.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
let mapPropsToState = state => ({
    channels: state.channels
})

export default connect(mapPropsToState)(WorkSpace);