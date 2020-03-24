import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchBatters } from "../actions/fetchBatters";
import Batters from "../components/Batters";

class BattersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBatters();
  }

  render() {
    return (
      <div>
        <Batters batters={this.props.batters} />
        {/* <Route path='/batters' render={() => <Batters batters={this.props.batters.data}/>}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    batters: state.batters
  };
};

export default connect(mapStateToProps, { fetchBatters })(BattersContainer);
