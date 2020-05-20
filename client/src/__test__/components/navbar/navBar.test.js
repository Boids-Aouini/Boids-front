import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import NavBar from '../../../components/navbar/navBar';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<NavBar />', () => {
    describe('render()', () => {
        test('should render without crashing', () => {
            shallow(<NavBar store={store} />)
        })
        test('should render component', () => {
            let wrapper = shallow(<NavBar store={store} />)
            let component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })


    })

})