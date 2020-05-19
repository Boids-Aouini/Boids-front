import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'
let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<Servers />', () => {
    describe('render()', () => {
        test('render without crashing', () => {

        })
    })
})