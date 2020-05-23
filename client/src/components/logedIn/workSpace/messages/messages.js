import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendPost, getPosts } from '../../../../actions/channelActions';
import { extractReference } from '../../../utils/urlReference';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            channel_id: this.props.channel_id,
            server_id: this.props.server_id
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
        }
    }
    componentWillMount() {
        this.props.getPosts(this.state.server_id, this.state.channel_id)
    }
    checkChange(channelName) {


        return true
    }
    componentDidUpdate() {
        let channelName = extractReference(window.location.pathname.split('/')[3])
        let prev_channel = sessionStorage.getItem('sshhhhhxc_prev_channel')
        if (prev_channel !== channelName) {

            for (let channel of this.props.channels.channels) {
                if (channel.name === channelName) {
                    this.props.getPosts(this.state.server_id, channel.id)

                }
            }
        }
    }

    render() {
        return (
            <div>

                <form>
                    <input type="text" name="message" onChange={this.onChange.bind(this)}></input>
                    <button type="submit" onClick={this.onSend.bind(this)}>send</button>
                </form>
            </div>
        )
    }
}

let mapPropsToState = state => ({
    channel: state.channels
})
export default connect(mapPropsToState, { sendPost, getPosts })(Messages)