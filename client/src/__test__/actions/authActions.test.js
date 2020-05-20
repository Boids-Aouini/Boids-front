import { registerAction } from '../../actions/authActions';
import configureStore from 'redux-mock-store';
import { OPEN_ACC, REGISTER } from '../../actions/type';

let mockStore = configureStore();
let store = mockStore();

describe('authActions', () => {
    beforeEach(() => {
        store.clearActions();
    })
    test('OPEN_ACC Action', () => {
        let account = {
            email: 'aminaouini565@gmail.com',
            password: '123456789'
        }
        store.dispatch(registerAction(account))
        expect(store.getActions()[0]['type']).toEqual(OPEN_ACC)
    })
})
