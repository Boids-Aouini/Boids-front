import { REGISTER, OPEN_ACC } from './type';
import { register } from '../services/authServices';
export const registerAcc = (creds) => dispatch => {

    axios.post('http://localhost:4404/register', creds)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));

}