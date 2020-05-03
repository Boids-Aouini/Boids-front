import { OPEN_ACC, REGISTER } from '../actions/type';

let initState = {
    openedAcc: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case REGISTER: {
            return {
                openedAcc: action.openedAcc
            }
        }
    }
}
