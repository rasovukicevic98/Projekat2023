import { createStore, combineReducers } from 'redux';
import authentication from './AuthReducer.js'

const store = createStore(
    combineReducers({authentication : authentication})
);

export default store;