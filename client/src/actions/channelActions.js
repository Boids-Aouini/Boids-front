import { GET_CHANNELS_SERVER, MAKE_CHANNEL, SEND_POST } from './type';
import axios from 'axios';

export const getChannels = (server_id) => dispatch => {
    return axios.get('http://localhost:4404/api/channels/getChannels/' + server_id, {
        // make get request to reteive channels and added server_id as a param
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token') // setup token as a header
        }
    })
        .then(res => {
            let { channels } = res.data.results;
            return dispatch({ // dispatch new channels to redux's state
                channels,
                type: GET_CHANNELS_SERVER
            })
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
    console.log(newPost.message)
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

export const getPosts = (channel_id) => dispatch => {
    axios.get('/api/channels/getPosts/' + channel_id, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {
            let { posts } = res.data.results;
            dispatch({
                posts
            })
        })
        .catch(err => console.log(err))
}