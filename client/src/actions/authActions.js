import { REGISTER, OPEN_ACC } from './type';
import axios from 'axios';

export const registerAction = (creds) => dispatch => { // makes post http request to register new account
    axios.post('http://localhost:4404/register', creds)
        .then(res => {
            let { token } = res.data.results; // retrive token 
            localStorage.setItem('_____auth_______________token', token); // set token in local storage
            dispatch({
                type: REGISTER,
                openedAcc: true
            }) // excute dispatch set openedAcc state to true and add type REGISTER
        })
        .catch(err => console.log(err)); // console error in case there is one
}

export const loginAction = creds => dispatch => { // makes post http request to login
    axios.post('http://localhost:4404/login', creds)
        .then(res => {
            let { token } = res.data.results; // retreive token
            localStorage.setItem('_____auth_______________token', token); // set token in local storage
            dispatch({
                type: OPEN_ACC,
                openedAcc: localStorage.getItem('_____auth_______________token')
            }) // excute dispatch set openedAcc state to true and add type OPEN_ACC
        })
        .catch(err => console.log(err)); // console error in case there is one

}