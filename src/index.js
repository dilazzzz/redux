import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState = {
    cash: 0,
    dandom: 0
}

// action = {type:'', payload:''}
const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}

        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}

        case 'CHANGE_DANDOM':
            return {...state, dandom: Math.floor(Math.random() * 100)}

        default:
            return state

    }
}

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);

