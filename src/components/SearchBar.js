import React from "react";
import { connect } from "react-redux";
import { fetchSearchedPlayers } from "../actions/fetchSearchedPlayers";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
class SearchBar extends React.Component {
  state = {
    query: ""
  };

  onInputChange = e => {
    this.props.handleSearchChange(e);
    this.setState({
      query: e.target.value
    });
  };

  searchPlayers = e => {
    e.preventDefault();
    this.props.fetchSearchedPlayers(this.props.searchType, this.state.query);
    // mapDispatchToProps for batterSearchAction
    // pass props.searchType and this.state.query to that action
    // in side the action/fetch request `/api/v1/${searchType}`
    //body: {query}
  };

  render() {
    return (
      <div className="search">
        <InputGroup size="lg" padding="20px">
          <Input
            type="text"
            value={this.state.query}
            onChange={this.onInputChange}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>Search</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default connect(null, { fetchSearchedPlayers })(SearchBar);
