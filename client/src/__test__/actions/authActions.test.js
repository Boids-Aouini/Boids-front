import * as authActions from '../../actions/authActions';
import configureStore from 'redux-mock-store';
import { OPEN_ACC, REGISTER } from '../../actions/type';
import thunk from 'redux-thunk';
let middelwares = [thunk];
let mockStore = configureStore(middelwares);

describe('authActions', () => {
    beforeEach(() => {
        store.clearActions();
    })
    test('OPEN_ACC Action', () => {
        let store = mockStore({});
        let account = {
            email: 'aminaouini565@gmail.com',
            password: '123456789'
        }
        return store.dispatch(authActions.loginAction(account))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]['type']).toEqual(OPEN_ACC)
            })
    })
})
