import React from "react";
import Deck from "./Deck";

class Decks extends React.Component {
  render() {
    return (
      <div>
        {this.props.decks.map((deck) => (
          <Deck key={deck.id} deck={deck} deleteDeck={this.props.deleteDeck} />
        ))}
      </div>
    );
  }
}

export default Decks;
