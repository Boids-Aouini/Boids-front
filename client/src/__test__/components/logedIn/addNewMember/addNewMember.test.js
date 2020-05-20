import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import AddNewMember from '../../../../components/logedIn/addNewMember/addNewMember';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);