import { GET_CHANNELS_SERVER, MAKE_CHANNEL, SEND_POST, GET_POSTS, CHANGE_CURRENT_CHANNEL, ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/type';

let initState = {
    channels: [],
    posts: [],
    currentChannel: null
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
                posts: action.posts // setup retreived posts to redux's state
            }

        case SEND_POST: return state
        case CHANGE_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.channel_id // setup current channel id to redux's state
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case DELETE_POST: { // find post by it's id and remove from posts array
            let posts = state.posts;
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id === action.post_id) {
                    posts.splice(i, 1);
                    break;
                }
            }
            return {
                ...state,
                posts
            }

        }
        case UPDATE_POST: { // find post by it's id and update it
            let posts = state.posts;
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id === action.post_id) {
                    posts[i].post = action.post;
                    break;
                }
            }
            return {
                ...state,
                posts
            }

        }
        default: return state;
    }
}