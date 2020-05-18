import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Login from '../../../components/auth/login';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../../../store';
import { token } from '../../../components/utils/test/storageMock'
const storeMock = configureStore();
let intialTestState = {
    auth: {
        openedAcc: token
    }
}
describe('<Login />', () => {
    describe('render()', () => {
        test('renders without crashing', () => {
            shallow(<Provider store={store}><Login /></Provider>);
        });

        test('renders component', () => {
            const wrapper = shallow(<Provider store={store}><Login /></Provider>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    });
});