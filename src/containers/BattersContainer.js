import React from "react";
import { connect } from "react-redux";
import { fetchBatters } from "../actions/fetchBatters";
import Batters from "../components/Batters";
import addPlayerToDeck from "../actions/addPlayerToDeck";
import SelectedPlayers from "../components/SelectedPlayers";
import LoadingSpinner from "../components/LoadingSpinner";

class BattersContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.fetchBatters();
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading ? (
      <LoadingSpinner />
    ) : (
      <div>
        <SelectedPlayers selectedPlayers={this.props.selectedPlayers} />
        <Batters
          batters={this.props.batters}
          addPlayer={this.props.addPlayerToDeck}
        />
        {/* <Route path='/batters' render={() => <Batters batters={this.props.batters.data}/>}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    batters: state.batters,
    selectedPlayers: state.selectedPlayers
  };
};

export default connect(mapStateToProps, { fetchBatters, addPlayerToDeck })(
  BattersContainer
);
