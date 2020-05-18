import { combineReducers } from "redux";
import authReducer from './authReducer';
import serverReducer from './serversReducer';
import memberShipReducer from './memebershipReducer';
import channelReducer from './channelsReducer';

export default combineReducers({
    auth: authReducer,
    servers: serverReducer,
    memberShip: memberShipReducer,
    channels: channelReducer
})