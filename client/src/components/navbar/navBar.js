import React, { Component } from 'react'
import { connect } from 'react-redux';
import NotLogedNav from './notLogedNav';
import LogedInNav from './logedInNav';

class NavBar extends Component {
    render() {
        return !this.props.auth.openedAcc ? (<NotLogedNav />) : (<LogedInNav />)
    }
}

let mapPropstoState = state => ({
    auth: state.auth
})

export default connect(mapPropstoState)(NavBar);
