import { REGISTER, OPEN_ACC } from './type';
import axios from 'axios';

export const registerAction = (creds) => dispatch => {
    console.log("=>", creds);
    axios.post('http://localhost:4404/register', creds)
        .then(res => {
            let { token } = res.data;
            localStorage.setItem('_____auth_______________token', token);
            dispatch({
                type: REGISTER,
                openedAcc: true
            })
        })
        .catch(err => console.log(err));
}