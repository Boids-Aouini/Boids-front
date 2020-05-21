import * as serverActions from '../../actions/serverActions';
import configureStore from 'redux-mock-store';
import { RETREIVE_SERVER_AS_LEADER, CREATE_SERVER } from '../../actions/type';
import thunk from 'redux-thunk';
import { LocalStorageMock, token } from '../../components/utils/test/storageMock';
let middlewares = [thunk];
let mockStore = configureStore(middlewares);
let store = mockStore({})
window.localStorage = new LocalStorageMock;
localStorage.setItem('_____auth_______________token', token);

describe('serverActions', () => {
    beforeEach(() => {
        store.clearActions();
    })
})

