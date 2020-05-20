import { REGISTER, OPEN_ACC, LOG_OUT } from './type';
import axios from 'axios';

export const registerAction = (creds) => dispatch => { // makes post http request to register new account
    axios.post('http://localhost:4404/api/auth/register', creds)
        .then(res => {
            let { token } = res.data.results; // retrive token 
            localStorage.setItem('_____auth_______________token', token); // set token in local storage
            dispatch({
                type: REGISTER,
                openedAcc: localStorage.getItem('_____auth_______________token')
            }) // excute dispatch set openedAcc state to token that we set in local storage and add type REGISTER to action
        })
        .catch(err => console.log(err)); // console error in case there is one
}

export const loginAction = creds => dispatch => { // makes post http request to login
    return axios.post('http://localhost:4404/api/auth/login', creds)
        .then(res => {
            let { token } = res.data.results; // retreive token
            localStorage.setItem('_____auth_______________token', token); // set token in local storage
            return dispatch({
                type: OPEN_ACC,
                openedAcc: localStorage.getItem('_____auth_______________token')
            }) // excute dispatch set openedAcc state to token that we set in local storage and add type OPEN_ACC to acion
        })
        .catch(err => console.log(err)); // console error in case there is one

}

export const logoutAction = () => dispatch => {
    localStorage.removeItem('_____auth_______________token'); // remove token from local storage on the browser
    dispatch({
        type: LOG_OUT,
        openedAcc: null
    })
}

