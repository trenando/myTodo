import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducer';

const reducers = combineReducers({
    todoReducer
})//Чтоб понимать как делать когда больше 1 редусера

export const store = createStore(reducers)