import React from "react";
import { connect } from "react-redux";
import { fetchBatters } from "../actions/fetchBatters";
import Batters from "../components/Batters";
import addPlayerToDeck from "../actions/addPlayerToDeck";
import SelectedPlayers from "../components/SelectedPlayers";
import LoadingSpinner from "../components/LoadingSpinner";
import removePlayer from '../actions/removePlayer'

class BattersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBatters();
  }

  render() {
    if (this.props.batters.length === 0) {
      return (
        <div
          className="justify-content-center d-flex"
          style={{ backgroundColor: "white" }}
        >
          <LoadingSpinner />
        </div>
      );
    } else {
      return (
        <div>
          {this.props.selectedPlayers.batters.length > 0 && (
            <SelectedPlayers selectedPlayers={this.props.selectedPlayers} removePlayer={this.props.selectedPlayers.batters.removePlayer}/>
          )}
          <Batters
            batters={this.props.batters}
            addPlayer={this.props.addPlayerToDeck}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    batters: state.batters,
    selectedPlayers: state.selectedPlayers,
  };
};

export default connect(mapStateToProps, { fetchBatters, addPlayerToDeck, removePlayer })(
  BattersContainer
);
