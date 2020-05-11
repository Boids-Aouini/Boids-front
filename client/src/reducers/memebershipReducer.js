import { ADD_MEMBER } from '../actions/type';

let initState = {

}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_MEMBER: return state;
        default: return state;
    }
}