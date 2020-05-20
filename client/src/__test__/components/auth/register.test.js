import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Register from '../../../components/auth/register';

const storeMock = configureStore();
let intialTestState = {
    auth: {
        openedAcc: null
    }
}
let store = storeMock(intialTestState)

describe('<Register />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<Register store={store} />)
        })
        test('renders component', () => {
            const wrapper = shallow(<Register store={store} />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })

    })
})