import { OPEN_ACC, REGISTER } from '../actions/type';

let initialState = {
    openedAcc: localStorage.getItem('_____auth_______________token')
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
        default:
            return state;

    }
}
