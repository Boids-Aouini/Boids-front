import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)