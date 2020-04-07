import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

class SearchBar extends React.Component {
  state = {
    query: "",
  };

  onInputChange = (e) => {
    this.props.handleSearchChange(e);
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <div className="search">
        <InputGroup size="md" padding="20px" width="50%">
          <Input
            type="text"
            value={this.state.query}
            onChange={this.onInputChange}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText className="mb-2 mr-sm-2 mb-sm-0">
              Search
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
