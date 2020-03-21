import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import NavBar from './components/NavBar'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

class App extends React.Component {
    render () {
    
    return (
        <div className="App">
            <Provider store={myStore}>
                <NavBar /> 
            </Provider>
        </div>
    )
    }
}

export default App;