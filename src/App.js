import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import PitchersContainer from "./containers/PitchersContainer";
import BattersContainer from "./containers/BattersContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import batters from "./reducers/batters";
import pitchers from "./reducers/pitchers";
import search from "./reducers/search";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";

const reducer = combineReducers({
  batters,
  pitchers,
  search
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={myStore} className="App">
        <Router>
          <NavBar />
          {/* <BattersContainer /> */}
          {/* <PitchersContainer /> */}
          <Switch>
            <Route path="/batters" component={BattersContainer} />
            <Route path="/pitchers" component={PitchersContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
