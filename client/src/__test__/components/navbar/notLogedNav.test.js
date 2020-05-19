import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);