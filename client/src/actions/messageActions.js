import axios from 'axios';

export const sendMessage = (newMessage) => dispatch => {
    axios.post('/api/message/send', newMessage, {
        headers: {
            'auth_token': localStorage.getItem('_____auth_______________token')
        }
    })
        .then(res => {

        })
        .catch(err => console.log(err))
} 