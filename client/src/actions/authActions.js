import { REGISTER, OPEN_ACC } from './type';
import axios from 'axios';

export const registerAction = (creds) => dispatch => {
    axios.post('http://localhost:4404/register', creds)
        .then(res => {
            let { token } = res.data.results;
            localStorage.setItem('_____auth_______________token', token);
            console.log(localStorage.getItem('_____auth_______________token'))
            dispatch({
                type: REGISTER,
                openedAcc: true
            })
        })
        .catch(err => console.log(err));
}