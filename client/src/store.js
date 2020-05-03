import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

let initState = {};

const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk)
)

export default store;