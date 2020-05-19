import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Servers from '../../../../components/logedIn/servers/servers';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<Servers />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<Servers store={store} />);
        })
    })
})