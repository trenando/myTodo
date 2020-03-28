import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/redux-store';
import './index.scss';
import App from './App';

const rerenderTree = (state) => {
    ReactDOM.render(
    <App state={state} 
    dispatch={store.dispatch.bind(store)}
    store={store} />, document.getElementById('root'));
}

rerenderTree(store.getState())

store.subscribe(() => {
    const state = store.getState();
    rerenderTree(state);
});//перерисовка дерева
