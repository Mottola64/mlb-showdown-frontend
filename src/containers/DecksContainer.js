import React from "react";
import { connect } from "react-redux";
import { fetchDecks } from "../actions/fetchDecks";
import Decks from "../components/Decks";
import { deleteDeck } from "../actions/deleteDeck";


class DecksContainer extends React.Component {

  componentDidMount() {
    this.props.fetchDecks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.decks !== this.props.decks) {
      this.setState({
        reload: true,
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.decks.decks.length > 0 && (
          <Decks
            decks={this.props.decks.decks}
            deleteDeck={this.props.deleteDeck}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks,
  };
};

export default connect(mapStateToProps, { fetchDecks, deleteDeck })(
  DecksContainer
);
