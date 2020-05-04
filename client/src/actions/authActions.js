import { REGISTER, OPEN_ACC } from './type';
import axios from 'axios';

export const registerAction = (creds) => dispatch => {
    axios.post('http://localhost:4404/register', creds)
        .then(res => {
            let { token } = res.data.results;
            localStorage.setItem('_____auth_______________token', token);
            dispatch({
                type: REGISTER,
                openedAcc: true
            })
        })
        .catch(err => console.log(err));
}

export const loginAcion = creds => dispatch => {
    axios.post('http://localhost:4404/login', creds)
        .then(res => {
            let { token } = res.data.results;
            localStorage.setItem('_____auth_______________token', token);
            dispatch({
                type: OPEN_ACC,
                openedAcc: true
            })
        })
        .catch(err => console.log(err));

}