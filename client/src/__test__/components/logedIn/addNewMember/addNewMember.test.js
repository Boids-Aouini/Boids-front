import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import AddNewMember from '../../../../components/logedIn/addNewMember/addNewMember';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);

describe('<AddNewMember />', () => {
    describe('render()', () => {
        test('should render without crashing', () => {
            shallow(<AddNewMember store={store} />)
        })
        test('render component', () => {
            let wrapper = shallow(<AddNewMember store={store} />)
            let component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot()
        })

    })

})
