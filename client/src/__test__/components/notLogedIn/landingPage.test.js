import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import LandingPage from '../../../components/notLogedIn/landingPage';

let mockStore = configureStore();
let initState = {};
let store = mockStore(initState);