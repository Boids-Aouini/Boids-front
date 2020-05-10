import { GET_SERVER_CHANNELS } from './type';
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
                type: GET_SERVER_CHANNELS
            })
        })
        .catch(err => console.log(err));
}