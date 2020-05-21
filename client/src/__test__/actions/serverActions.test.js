import * as serverActions from '../../actions/serverActions';
import configureStore from 'redux-mock-store';
import { RETREIVE_SERVER_AS_LEADER, CREATE_SERVER } from '../../actions/type';
import thunk from 'redux-thunk';

let middlewares = [thunk];
let mockStore = configureStore(middlewares);
let store = mockStore({})