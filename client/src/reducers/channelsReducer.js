import { GET_CHANNELS_SERVER, MAKE_CHANNEL } from '../actions/type';

let initState = {
    channels: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_CHANNELS_SERVER:
            return {
                channels: action.channels // setup channels to channels state
            }
        case MAKE_CHANNEL:
            return {
                channels: [...state.channels, action.newChannel] // setup new channel with other channels to redux's state
            }
        default: return state;
    }
}