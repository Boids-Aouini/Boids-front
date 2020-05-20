import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ChannelsNav from '../../../../../components/logedIn/workSpace/channelsNav/channelsNav';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<ChannelsNav />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<ChannelsNav store={store} />);
        })
        test('render component', () => {
            let wrapper = shallow(<ChannelsNav store={store} />);
            let component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })
    })
})