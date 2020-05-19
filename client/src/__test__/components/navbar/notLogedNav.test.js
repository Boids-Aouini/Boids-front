import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import NotLogedNav from '../../../components/navbar/notLogedNav';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<NotLogedNav />', () => {
    describe('render()', () => {
        test('should render without crashing', () => {
            shallow(<NotLogedNav store={store} />)
        })

    })

})
