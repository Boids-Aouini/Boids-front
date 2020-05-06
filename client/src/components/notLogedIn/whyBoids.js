import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class WhyBoids extends Component {
    render() {
        return (
            <div>
                <h2>So you can stay organized</h2>
                <h4>Keep in touch, be productive, Meet up</h4>
                <br></br><br></br>
                <h2>Stay secured</h2>
                <h5>We promise our costumers that we dont sell any of the conversations or any thing unlike other platforms</h5>
                <br></br>
                <Link to="/Register">Register</Link>
            </div>
        )
    }
}

const mapPropsToState = state => ({
    auth: state.auth
})

export default connect(mapPropsToState)(WhyBoids);
