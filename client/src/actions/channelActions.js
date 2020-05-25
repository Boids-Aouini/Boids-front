import { GET_CHANNELS_SERVER, MAKE_CHANNEL, SEND_POST, GET_POSTS, CHANGE_CURRENT_CHANNEL, ADD_POST, DELETE_POST } from './type';
import axios from 'axios';

export const getChannels = (server_id) => dispatch => {
    return axios.get('http://localhost:4404/api/channels/getChannels/' + server_id, {
        // make get request to reteive channels and added server_id as a param
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token') // setup token as a header
        }
    })
        .then(res => {
            let { channels, server_id } = res.data.results;
            dispatch({ // dispatch new channels to redux's state
                channels,
                server_id,
                type: GET_CHANNELS_SERVER
            })
            return channels[0].id
        })
        .then((channel_id) => {
            return {
                type: GET_CHANNELS_SERVER,
                channel_id,
                server_id
            }
        })
        .catch(err => console.log(err)); // console error in case there is one
}

export const makeChannel = (newChannel) => dispatch => {
    return axios.post('http://localhost:4404/api/channels/makeChannel', newChannel, {
        // made post request to make new channel in a server
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token') // added token as a header
        }
    })
        .then(res => {
            let { newChannel } = res.data.results;
            return dispatch({ // dispatch new channel to redux's state
                newChannel,
                type: MAKE_CHANNEL
            })
        })
        .catch(err => console.log(err)) // console error in case there is one
}

export const sendPost = (newPost) => dispatch => {
    axios.post('http://localhost:4404/api/channels/send', newPost, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {
            dispatch({
                type: SEND_POST
            })
        })
        .catch(err => console.log(err))
}

export const getPosts = (server_id, channel_id) => dispatch => {
    axios.get('http://localhost:4404/api/channels/getPosts/' + server_id + '/' + channel_id, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {
            let { posts } = res.data.results;
            dispatch({
                channel_id,
                posts,
                type: GET_POSTS
            })
        })
        .catch(err => console.log(err))
}

export const currentChannel = channel_id => dispatch => {
    dispatch({
        type: CHANGE_CURRENT_CHANNEL,
        channel_id
    })
}

export const addPost = post => dispatch => {
    dispatch({
        type: ADD_POST,
        post
    })
}

export const deletePost = post_id => dispatch => {
    dispatch({
        post_id,
        type: DELETE_POST
    })
}