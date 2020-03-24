import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchPitchers } from "../actions/fetchPitchers";
import Pitchers from "../components/Pitchers";

class PitchersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPitchers();
  }

  render() {
    return (
      <div>
        <Pitchers pitchers={this.props.pitchers} />
        {/* <Route path='/pitchers' render={() => <Pitchers pitchers={this.props.pitchers.data}/>}/>  */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pitchers: state.pitchers
  };
};

export default connect(mapStateToProps, { fetchPitchers })(PitchersContainer);
