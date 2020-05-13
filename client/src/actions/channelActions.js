import { GET_CHANNELS_SERVER } from './type';
import axios from 'axios';

export const getChannels = (serverName) => dispatch => {
    axios.get('http://localhost:4404/api/channels/getChannels' + serverName, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {
            let { channels } = res.data.results;

            dispatch({
                channels,
                type: GET_CHANNELS_SERVER
            })
        })
        .catch(err => console.log(err));
}

export const makeChannel = (newChannel) => dispatch => {
    axios.post('http://localhost:4404/api/channels/makeChannel', newChannel, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {
            let { channel } = res.data.results;
            dispatch({
                channel
            })
        })
        .catch(err => console.log(err))
}