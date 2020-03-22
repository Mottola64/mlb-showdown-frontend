import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={myStore}>
        <Router>
            <App />
        </Router>
    </Provider>

, document.getElementById('root'));