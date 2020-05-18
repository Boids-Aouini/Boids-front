import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Login from '../../../components/auth/login';
import ReactDOM from 'react-dom';

const storeMock = configureStore();
let intialTestState = {
    auth: {
        openedAcc: null
    }
}
let store = storeMock(intialTestState)
describe('<Login />', () => {
    describe('render()', () => {
        test('renders without crashing', () => {
            shallow(<Login store={store} />);
        });

        test('renders component', () => {
            const wrapper = shallow(<Login store={store} />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    });
});