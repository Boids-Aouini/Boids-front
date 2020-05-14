import React, { Component } from 'react'
import WorkSpaceNav from './workSpaceNav/workSpaceNav'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { referenceUrl } from '../../../utils/urlReference';
import { getChannels, extractReference } from '../../../actions/channelActions';
class WorkSpace extends Component {
    componentWillMount() {
        // this.getChannels(extractReference(window.location.pathname.split('/')[3]))
    }
    getServerId() {

    }
    render() {
        return (
            <div>
                <WorkSpaceNav />
                <div>
                    {this.props.channels.channels.map((channel, i) => (
                        <div>
                            <Link to={'/boidsServer/' + window.location.pathname.split('/')[2] + '/' + referenceUrl(channel.name)}>{channel.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
let mapPropsToState = state => ({
    channels: state.channels,
    servers: state.servers
})

export default connect(mapPropsToState, { getChannels })(WorkSpace);