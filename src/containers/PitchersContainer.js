import React from "react";
import { connect } from "react-redux";
import { fetchPitchers } from "../actions/fetchPitchers";
import Pitchers from "../components/Pitchers";
import addPlayerToDeck from "../actions/addPlayerToDeck";
import SelectedPlayers from "../components/SelectedPlayers";
import LoadingSpinner from "../components/LoadingSpinner";

class PitchersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPitchers();
  }

  render() {
    if (this.props.pitchers.length === 0) {
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
          {this.props.selectedPlayers.pitchers.length > 0 && (
            <SelectedPlayers selectedPlayers={this.props.selectedPlayers} />
          )}
          <Pitchers
            pitchers={this.props.pitchers}
            addPlayer={this.props.addPlayerToDeck}
          />
          {/* <Route path='/pitchers' render={() => <Pitchers pitchers={this.props.pitchers.data}/>}/>  */}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pitchers: state.pitchers,
    selectedPlayers: state.selectedPlayers,
  };
};

export default connect(mapStateToProps, { fetchPitchers, addPlayerToDeck })(
  PitchersContainer
);
