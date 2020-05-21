import axios from 'axios';
import { SEND_MESSAGE } from './type';

export const sendMessage = (newMessage) => dispatch => {
    axios.post('/api/message/send', newMessage, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {
            dispatch({
                type: SEND_MESSAGE
            })
        })
        .catch(err => console.log(err))
} 