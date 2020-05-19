import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import NotLogedNav from '../../../components/navbar/notLogedNav';

describe('<NotLogedNav />', () => {
    describe('render()', () => {
        test('should render without crashing', () => {
            shallow(<NotLogedNav />)
        })
        test('should render component', () => {
            let wrapper = shallow(<NotLogedNav />);
            let component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })


    })

})
