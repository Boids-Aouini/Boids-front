import axios from 'axios';
import { ADD_MEMBER } from './type';

export const addMember = newMember => dispatch => {
    axios.post('/api/memberships/createMembership', newMember,
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token')
            }
        })
        .then(res => {
            dispatch({
                type: ADD_MEMBER
            })
        })
        .catch(err => console.log(err));
} 