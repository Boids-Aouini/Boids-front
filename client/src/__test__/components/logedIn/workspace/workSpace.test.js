import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import WorkSpace from '../../../../components/logedIn/workSpace/workSpace';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<WorkSpace />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<WorkSpace store={store} />);
        })
        test('render component', () => {
            let wrapper = shallow(<WorkSpace store={store} />);
            let component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })
    })
})