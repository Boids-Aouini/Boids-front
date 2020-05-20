import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotLogedNav from '../../../components/navbar/notLogedNav';

describe('<NotLogedNav />', () => {
    describe('render()', () => {
        test('render without crashing', () => {
            shallow(<NotLogedNav />)
        })
        test('render component', () => {
            let wrapper = shallow(<NotLogedNav />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })

})
