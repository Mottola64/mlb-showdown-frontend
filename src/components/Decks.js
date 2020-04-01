import React from "react";
import { Table, Button } from "reactstrap";


class Decks extends React.Component {
  renderBatter = batter => (
    <tr key={batter.id}>
      <td></td>
      <td>{batter.full_name}</td>
      <td>{batter.team}</td>
      <td>{batter.starting_position}</td>
      <td>{batter.points}</td>
    </tr>
  );

  renderPitcher = pitcher => (
    <tr key={pitcher.id}>
      <td></td>
      <td>{pitcher.full_name}</td>
      <td>{pitcher.team}</td>
      <td>{pitcher.position}</td>
      <td>{pitcher.points}</td>
    </tr>
  );
  
  render() {
    return (
      <div>
        {this.props.decks.map(deck => (
          <Table key={deck.id} hover>
            <thead>
              <tr>
                <th>{deck.name}</th>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {deck.batters.map(batter => this.renderBatter(batter))}
              {deck.pitchers.map(pitcher => this.renderPitcher(pitcher))}
            </tbody>
            <Button onClick={() => this.props.deleteDeck(deck.id)}>Delete Deck</Button>
            <br></br><br></br>
          </Table>
        ))}
      </div>
    );
  }
}

export default Decks;
