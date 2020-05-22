import { GET_CHANNELS_SERVER, MAKE_CHANNEL, SEND_POST, GET_POSTS } from '../actions/type';

let initState = {
    channels: [],
    posts: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_CHANNELS_SERVER:
            return {
                ...state,
                channels: action.channels // setup channels to channels state
            }
        case MAKE_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, action.newChannel] // setup new channel with other channels to redux's state
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case SEND_POST: return state
        default: return state;
    }
}