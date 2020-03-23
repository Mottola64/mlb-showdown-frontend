import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import PitchersContainer from './containers/PitchersContainer'
import BattersContainer from './containers/BattersContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import batterReducer from './reducers/batterReducer'
import pitcherReducer from './reducers/pitcherReducer'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';

const reducer = combineReducers({
    batterReducer,
    pitcherReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


class App extends React.Component {

    render() {

        return (
        <Provider store={myStore}>
            {/* <BattersContainer />   */}
            <Router> 
                <Switch>
                    <Route path='/batters' component={BattersContainer} />
                    <Route path='/pitchers' component={PitchersContainer} /> 
                </Switch>
            </Router> 
        </Provider>
    )
    }
}

export default App