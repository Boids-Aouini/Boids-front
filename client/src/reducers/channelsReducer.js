import { GET_CHANNELS_SERVER, MAKE_CHANNEL } from '../actions/type';

let initState = {
    channels: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_CHANNELS_SERVER:
            return {
                channels: action.newhannels
            }
        case MAKE_CHANNEL:
            return {
                channels: [...state.channels, action.newChannel]
            }
        default: return state;
    }
}