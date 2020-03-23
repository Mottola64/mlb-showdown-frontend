import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import thunk from 'redux-thunk';
import batterReducer from './reducers/batterReducer'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// const reducer = combineReducers({
//     batterReducer
// })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(batterReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={myStore}>
        <Router>
            <App />
        </Router>
    </Provider>
,
document.getElementById('root'));