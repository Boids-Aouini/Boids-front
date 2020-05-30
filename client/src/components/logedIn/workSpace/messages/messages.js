import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendPost, getPosts, addPost, deletePost, updatePost } from '../../../../actions/channelActions';
import { extractReference } from '../../../utils/urlReference';
import { message, name } from './messageTemplates';
import socket from '../../../utils/socket';
import './messages.css';
import { Dropdown } from 'react-bootstrap';
import jwt from 'jsonwebtoken'
import { tokenSecret } from '../../../utils/token';
import TextField from '@material-ui/core/TextField';
class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            max780: null
        }

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSend(e) {
        e.preventDefault();
        if (this.state.message.length > 0) {
            let newMessage = this.state;
            delete newMessage.max780
            newMessage.server_id = this.props.servers.currentServer;
            newMessage.channel_id = this.props.channel.currentChannel;
            newMessage.token = this.props.auth.openedAcc;
            let currentDate = new Date();
            newMessage.createdAt = currentDate.getFullYear() + "-" + currentDate.getDay() + "-" + currentDate.getMonth();
            socket.emit('sendPost', newMessage)
            // this.props.sendPost(newMessage)
        }
    }
    componentWillMount(){
        setTimeout(()=>{
            
            let mediaMatch = window.matchMedia('(max-width: 780px)');

            this.setState({max780: mediaMatch.matches})
        }, 0)
    }
    componentDidMount() {
        socket.on('sendPost', newPost => {
            if (newPost.server_id === this.props.servers.currentServer &&
                newPost.channel_id === this.props.channel.currentChannel) {
                this.props.addPost(newPost)

            }
        })
        socket.on('deletePost', (deletedPost) => {
            if (deletedPost.server_id === this.props.servers.currentServer &&
                deletedPost.channel_id === this.props.channel.currentChannel) {
                this.props.deletePost(deletedPost.post_id);
            }
        })
        socket.on('updatePost', post => {
            if (post.server_id === this.props.servers.currentServer &&
                post.channel_id === this.props.channel.currentChannel) {
                this.props.updatePost(post.post_id, post.updatedPost)
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
                <div id="message-content" key={i}>
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
    updatePost(post_id, post) {
        let updatedPost = prompt('Update post', post);
        while (updatedPost === '') {
            updatedPost = prompt('Post is empty')
        }
        if (updatedPost !== null) {
            let post = {
                server_id: this.props.servers.currentServer,
                channel_id: this.props.channel.currentChannel,
                updatedPost,
                post_id
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
                <div id="sendMsgForm">
                    <input style={{
                        marginLeft: this.state.max780 ? '28px' : '8%'
                    }} type="text" id="text-field" placeholder="Write Post" name="message" onChange={this.onChange.bind(this)}></input>
                    <button id="send-post-btn" type="submit" onClick={this.onSend.bind(this)}>send</button>
                </div>
            </div>
        )
    }
}

let mapPropsToState = state => ({
    channel: state.channels,
    servers: state.servers,
    auth: state.auth
})
export default connect(mapPropsToState, { sendPost, getPosts, addPost, deletePost, updatePost })(Messages)