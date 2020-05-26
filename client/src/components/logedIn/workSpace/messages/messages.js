import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendPost, getPosts, addPost, deletePost } from '../../../../actions/channelActions';
import { extractReference } from '../../../utils/urlReference';
import { message, name } from './messageTemplates';
import socket from '../../../utils/socket';
import './messages.css';
import { Dropdown } from 'react-bootstrap';
import jwt from 'jsonwebtoken'
import { tokenSecret } from '../../../utils/token';

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
        }
    }
    componentDidMount() {
        socket.on('sendPost', newPost => {
            if (newPost.server_id === this.props.servers.currentServer &&
                newPost.channel_id === this.props.channel.currentChannel) {
                this.props.addPost(newPost)

            }
        })
        socket.on('deletePost', (deletedPost) => {
            console.log('deletePost')
            if (deletedPost.server_id === this.props.servers.currentServer &&
                deletedPost.channel_id === this.props.channel.currentChannel) {
                this.props.deletePost(deletedPost.post_id);
            }
        })
        this.triggerScroll();
    }
    triggerScroll() {
        this.cont.scrollTop = this.cont.scrollHeight
    }
    deleteMessage(post_id) {
        let msgData = {
            post_id,
            server_id: this.props.servers.currentServer,
            channel_id: this.props.channel.currentChannel
        }
        socket.emit('deletePost', msgData)
    }
    renderPosts() {
        let token = this.props.auth.openedAcc;
        let verifiedUser = jwt.verify(token, tokenSecret)
        return this.props.channel.posts.map((post, i) => (

            <div id="message" style={{ background: i % 2 === 0 ? '#e0e0e0' : '#f2f0f0' }}>
                <div key={i}>
                    <b>{name(post)}</b >
                    <p>{message(post)}</p>
                </div>

                {verifiedUser.id === post.user_id ? (<Dropdown id="options">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.updatePost(post.id, post.post)}>Update</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.deleteMessage(post.id)}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>) : <></>}
            </div>

        ))
    }
    updatePost(id, post) {
        let updatedPost = prompt('Update post', post);
        while (updatedPost === '') {
            updatedPost = prompt('Post is empty')
        }
        if (updatedPost !== null) {
            let post = {
                server_id: this.props.servers.currentServer,
                channel_id: this.props.channel.currentChannel,
                updatedPost,
                post_id: id
            }
            socket.emit('updatePost', post)
        }
    }

    render() {
        return (
            <div id="messagesComp">
                <div id="allMessages" ref={node => { this.cont = node }}>
                    {this.renderPosts()}

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
export default connect(mapPropsToState, { sendPost, getPosts, addPost, deletePost })(Messages)