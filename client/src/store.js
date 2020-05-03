import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers/index';
let initState = {}

export const store = createStore(
    combinedReducers,
    initState,
    applyMiddleware(thunk)
)