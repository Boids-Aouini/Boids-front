import { CREATE_SERVER, RETREIVE_SERVER_AS_LEADER } from '../actions/type';

let initState = {
    serversAsLeader: [],
    serversAsMember: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case CREATE_SERVER: // if action type equals CREATE_SERVER setup created server with servesAsLeader state
            return {
                ...state,
                serversAsLeader: [...state.serversAsLeader, action.server]

            }
        case RETREIVE_SERVER_AS_LEADER: // if action type equal RETREIVE_SERVER_AS_LEADER setup  retreived servers to serversAsLeader state
            return {
                ...state,
                serversAsLeader: action.serversAsLeader
            }

        default: return state;
    }
}