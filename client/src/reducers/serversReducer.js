import { CREATE_SERVER } from '../actions/type';

let initState = {
    serversAsLeader: [],
    serversAsMember: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case CREATE_SERVER:
            return {
                ...state,
                serversAsLeader: [...state.serversAsLeader, action.id]

            }


        default: return state;
    }
}