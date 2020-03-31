import React from "react";
import { connect } from "react-redux";
import { fetchPitchers } from "../actions/fetchPitchers";
import Pitchers from "../components/Pitchers";
import addPlayerToDeck from "../actions/addPlayerToDeck";
import SelectedPlayers from '../components/SelectedPlayers'

class PitchersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPitchers();
  }

  render() {
    return (
      <div>
        <SelectedPlayers selectedPlayers={this.props.selectedPlayers} />
        <Pitchers
          pitchers={this.props.pitchers}
          addPlayer={this.props.addPlayerToDeck}
        />
        {/* <Route path='/pitchers' render={() => <Pitchers pitchers={this.props.pitchers.data}/>}/>  */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pitchers: state.pitchers,
    selectedPlayers: state.selectedPlayers
  };
};

export default connect(mapStateToProps, { fetchPitchers, addPlayerToDeck })(
  PitchersContainer
);
