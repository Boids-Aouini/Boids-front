import { CREATE_SERVER, RETREIVE_SERVER_AS_LEADER, RETREIVE_SERVER_AS_MEMBER, CHANGE_CURRENT_SERVER } from '../actions/type';

let initState = {
    serversAsLeader: [],
    serversAsMember: [],
    currentServer: null
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
        case RETREIVE_SERVER_AS_MEMBER:
            return {
                ...state,
                serversAsMember: action.serversAsMember
            }
        case CHANGE_CURRENT_SERVER:
            return {
                ...state,
                currentServer: action.currentServer
            }

        default: return state;
    }
}