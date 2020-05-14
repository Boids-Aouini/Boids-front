import React, { Component } from 'react'
import WorkSpaceNav from './workSpaceNav/workSpaceNav'
import { connect } from 'react-redux';

class WorkSpace extends Component {
    render() {
        return (
            <div>
                <WorkSpaceNav />
                <div>

                </div>
            </div>
        )
    }
}
let mapPropsToState = state => ({
    channels: state.channels
})

export default connect(mapPropsToState)(WorkSpace);