import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Login from '../../../components/auth/login';
import ReactDOM from 'react-dom';

describe('<Login />', () => {
    describe('render()', () => {
        test('renders without crashing', () => {
            const wrapper = shallow(<Login />);
            // const component = wrapper.dive();

            // expect(toJson(component)).toMatchSnapshot();
        });
    });
});