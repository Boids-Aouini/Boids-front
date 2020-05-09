import { CREATE_SERVER, RETREIVE_SERVER_AS_LEADER } from '../actions/type';

let initState = {
    serversAsLeader: [],
    serversAsMember: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case CREATE_SERVER:
            return {
                ...state,
                serversAsLeader: [...state.serversAsLeader, action.server]

            }
        case RETREIVE_SERVER_AS_LEADER:
            return {
                ...state,
                serversAsLeader: action.serversAsLeader
            }

        default: return state;
    }
}