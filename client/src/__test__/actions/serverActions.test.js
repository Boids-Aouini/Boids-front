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
    test('RETREIVE_SERVER_AS_LEADER Action', () => {
        return store.dispatch(serverActions.retreiveServerAsLeader())
            .then(() => {
                let [action] = store.getActions();
                expect(action['type']).toEqual(RETREIVE_SERVER_AS_LEADER)
            })

    })
    test('CREATE_SERVER Action', () => {

    })
})

