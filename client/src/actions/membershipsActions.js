import axios from 'axios';
import { ADD_MEMBER, ADDED_MEMBER } from './type';

export const addMember = (newMember) => dispatch => {
    return axios.post('http://localhost:4404/api/memberships/createMembership', newMember,
        // make post request to create membership to the boids server
        {
            headers: {
                'auth_token': localStorage.getItem('_____auth_______________token') // add token as a header
            }
        })
        .then(res => {
            dispatch({ // run dispatch with type
                type: ADD_MEMBER
            })
        })
        .catch(err => console.log(err)); // console error in case there is one
}
export const addedMember = () => dispatch => {
    return dispatch({ // dispatch redux's state without new data
        type: ADDED_MEMBER
    })
}