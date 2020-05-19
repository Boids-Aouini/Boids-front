import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import WhyBoids from '../../../components/notLogedIn/whyBoids';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<WhyBoids />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<WhyBoids store={store} />)
        })
    })

})
