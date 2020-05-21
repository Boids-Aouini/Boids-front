import { SEND_MESSAGE } from '../actions/type';

let initState = {
    messages: []
}

export default function (state = initState, actions) {
    switch (actions.type) {
        default: return state;
    }
}