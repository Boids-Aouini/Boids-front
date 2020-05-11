import { combineReducers } from "redux";
import authReducer from './authReducer';
import serverReducer from './serversReducer';
import memberShipReducer from './memebershipReducer';

export default combineReducers({
    auth: authReducer,
    servers: serverReducer,
    memberShip: memberShipReducer
})