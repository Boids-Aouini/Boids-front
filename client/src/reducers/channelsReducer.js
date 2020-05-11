import { GET_CHANNELS_SERVER } from '../actions/type';

let initState = {
    channels: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_CHANNELS_SERVER:
            return {
                channels: action.channels
            }
        default: return state;
    }
}