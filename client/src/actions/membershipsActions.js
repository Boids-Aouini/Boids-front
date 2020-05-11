import axios from 'axios';
import { ADD_MEMBER } from './type';

export const addMember = newMember => dispatch => {
    axios.post('/api/memberships/createMembership', newMember)
        .then(res => {
            dispatch({
                type: ADD_MEMBER
            })
        })
        .catch(err => console.log(err));
} 