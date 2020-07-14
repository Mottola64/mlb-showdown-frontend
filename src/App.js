import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import PitchersContainer from "./containers/PitchersContainer";
import BattersContainer from "./containers/BattersContainer";
import Rules from "./components/Rules";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import batters from "./reducers/batters";
import pitchers from "./reducers/pitchers";
import decks from "./reducers/decks";
import selectedPlayers from "./reducers/selectedPlayers";
import removeSelectedPlayers from "./reducers/removeSelectedPlayers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import Home from "./components/Home";
import "./index.css";
import DecksContainer from "./containers/DecksContainer";

const reducer = combineReducers({
  batters,
  pitchers,
  selectedPlayers,
  decks,
  removeSelectedPlayers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  render() {
    return (
      <div className="mlb">
        <Provider store={myStore} className="App">
          <Router>
            <NavBar />

            {/* <BattersContainer /> */}
            {/* <PitchersContainer /> */}
            <Switch>
              <Route path="/batters" component={BattersContainer} />
              <Route path="/pitchers" component={PitchersContainer} />
              <Route path="/decks" component={DecksContainer} />
              <Route path="/rules" component={Rules} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
