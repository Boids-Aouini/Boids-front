import React, { Component } from 'react'
import { connect } from 'react-redux';
import NotLogedNav from './notLogedNav';
import LogedInNav from './logedInNav';

class NavBar extends Component {
    render() {
        return !this.props.auth.openedAcc ? (<NotLogedNav />) : (<LogedInNav />)
    }
}

let mapPropstoState = state => ({ // retreive redux's auth state
    auth: state.auth // set this.props.auth to redux's auth state
})

export default connect(mapPropstoState)(NavBar); // add state to props component
