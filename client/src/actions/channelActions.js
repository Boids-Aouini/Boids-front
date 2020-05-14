import { GET_CHANNELS_SERVER, MAKE_CHANNEL } from './type';
import axios from 'axios';

export const getChannels = (server_id) => dispatch => {
    axios.get('http://localhost:4404/api/channels/getChannels/' + server_id, {
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
            let { newChannel } = res.data.results;
            dispatch({
                newChannel,
                type: MAKE_CHANNEL
            })
        })
        .catch(err => console.log(err))
}