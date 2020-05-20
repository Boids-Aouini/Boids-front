import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import WorkSpaceNav from '../../../../../components/logedIn/workSpace/workSpaceNav/workSpaceNav';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<WorkSpaceNav />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<WorkSpaceNav store={store} />);
        })
        test('render component', () => {
            let wrapper = shallow(<WorkSpaceNav store={store} />);
            let component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })
    })
})