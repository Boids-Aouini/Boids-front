import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendPost, getPosts, addPost } from '../../../../actions/channelActions';
import { extractReference } from '../../../utils/urlReference';
import { message, name } from './messageTemplates';
import socket from '../../../utils/socket';
import './messages.css';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSend(e) {
        e.preventDefault();
        if (this.state.message.length > 0) {
            let newMessage = this.state;
            newMessage.server_id = this.props.servers.currentServer;
            newMessage.channel_id = this.props.channel.currentChannel;
            newMessage.token = this.props.auth.openedAcc;
            let currentDate = new Date();
            newMessage.createdAt = currentDate.getFullYear() + "-" + currentDate.getDay() + "-" + currentDate.getMonth();
            socket.emit('sendPost', newMessage)
            // this.props.sendPost(newMessage)
            console.log('emit', newMessage)
        }
    }
    componentDidMount() {
        socket.on('sendPost', newPost => {
            if (newPost.server_id === this.props.servers.currentServer &&
                newPost.channel_id === this.props.channel.currentChannel) {
                this.props.addPost(newPost)

            }
        })
    }

    render() {
        return (
            <div id="messagesComp">
                <div id="allMessages">
                    {this.props.channel.posts.map((post, i) => (
                        <>
                            <hr></hr>
                            <div key={i}>
                                <b>{name(post)}</b >
                                <p>{message(post)}</p>
                            </div>
                        </>
                    ))}

                </div>
                <form className="sendMsgForm">
                    <input type="text" name="message" onChange={this.onChange.bind(this)}></input>
                    <button type="submit" onClick={this.onSend.bind(this)}>send</button>
                </form>
            </div>
        )
    }
}

let mapPropsToState = state => ({
    channel: state.channels,
    servers: state.servers,
    auth: state.auth
})
export default connect(mapPropsToState, { sendPost, getPosts, addPost })(Messages)