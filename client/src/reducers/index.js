import { combineReducers } from "redux";
import authReducer from './authReducer';
import serverReducer from './serversReducer';
export default combineReducers({
    auth: authReducer,
    servers: serverReducer
})