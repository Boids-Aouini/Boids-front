import { OPEN_ACC, REGISTER, LOG_OUT } from '../actions/type';

let initialState = {
    openedAcc: localStorage.getItem('_____auth_______________token') // initialise openedAcc redux's state to user token
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return {
                openedAcc: action.openedAcc // set openedAcc to true that is set in dispatch in register action
            }
        case OPEN_ACC:
            return {
                openedAcc: action.openedAcc // set openedAcc to true that is set in dispatch in login action
            }
        case LOG_OUT:
            return {
                openedAcc: action.openedAcc
            }
        default:
            return state;

    }
}
