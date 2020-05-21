import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendPost } from '../../../../actions/channelActions';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            channel_id: this.props.channel_id
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSend(e) {
        e.preventDefault();

        if (this.state.message.length > 0) {
            let newMessage = this.state;
            let currentDate = new Date();
            newMessage.createdAt = currentDate.getFullYear() + "-" + currentDate.getDay() + "-" + currentDate.getMonth();
            this.props.sendPost(newMessage)
            console.log(this.state)
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="message" onChange={this.onChange.bind(this)}></input>
                    <button type="submit" onSubmit={this.onSend.bind(this)}>send</button>
                </form>
            </div>
        )
    }
}

let mapPropsToState = state => ({
    channel: state.channels
})
export default connect(mapPropsToState, { sendPost })(Messages)