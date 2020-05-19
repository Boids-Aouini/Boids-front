import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
let mockStore = configureStore();
let initialState = {}
let store = mockStore(initialState)
test('render without crashing', () => {
  shallow(<App store={store} />);

});
