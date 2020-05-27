import { ADD_MEMBER, ADDED_MEMBER } from '../actions/type';

let initState = {
    addedMember: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_MEMBER: return state; // return state
        case ADDED_MEMBER:
            return {
                addedMember: !state.addedMember
            }
        default: return state;
    }
}