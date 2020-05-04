import { OPEN_ACC, REGISTER } from '../actions/type';

let initialState = {
    openedAcc: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return {
                openedAcc: action.openedAcc // set openedAcc to true once dispatch excuted in register action
            }
        case OPEN_ACC:
            return {
                openedAcc: action.openedAcc // set openedAcc to true once dispatch excuted in login action
            }
        default:
            return state;

    }
}
