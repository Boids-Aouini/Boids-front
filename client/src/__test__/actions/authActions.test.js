import * as authActions from '../../actions/authActions';
import configureStore from 'redux-mock-store';
import { OPEN_ACC, REGISTER, LOG_OUT } from '../../actions/type';
import thunk from 'redux-thunk';
let middelwares = [thunk];
let mockStore = configureStore(middelwares);
let store = mockStore({});

describe('authActions', () => {
    beforeEach(() => {
        store.clearActions();
    })
    test('OPEN_ACC Action', () => {
        let account = {
            email: 'amine@gmail.com',
            password: '123456789'
        }
        return store.dispatch(authActions.loginAction(account))
            .then(() => {
                const [action] = store.getActions()
                expect(action['type']).toEqual(OPEN_ACC)
            })
    })
    test('REGISTER Action', () => {
        let newAcc = {
            firstname: 'register', lastname: 'test', email: 'registerr1Teesstee@email.com',
            password: '123456789', createdAt: '2020-05-05', birthDate: '2020-05-05'
        };

        return store.dispatch(authActions.registerAction(newAcc))
            .then(() => {
                const [action] = store.getActions()
                expect(action['type']).toEqual(REGISTER)
            })
    })
    test('LOG_OUT Action', () => {
        let expectedResult = {
            type: LOG_OUT,
            openedAcc: null
        }
        return store.dispatch(authActions.logoutAction())
            .then(() => {
                const [action] = store.getActions()
                expect(action).toEqual(expectedResult)
            })
    })

})
