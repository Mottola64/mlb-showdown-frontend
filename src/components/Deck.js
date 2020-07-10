import React from "react";
import { Table, Button } from "reactstrap";

const Deck = (props) => {
  const renderBatter = (batter) => (
    <tr key={batter.id}>
      <td></td>
      <td>{batter.full_name}</td>
      <td>{batter.team}</td>
      <td>{batter.starting_position}</td>
      <td>{batter.points}</td>
    </tr>
  );

  const renderPitcher = (pitcher) => (
    <tr key={pitcher.id}>
      <td></td>
      <td>{pitcher.full_name}</td>
      <td>{pitcher.team}</td>
      <td>{pitcher.position}</td>
      <td>{pitcher.points}</td>
    </tr>
  );

  const deck = props.deck;

  return (
    <div>
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
          {deck.batters.map((batter) => renderBatter(batter))}
          {deck.pitchers.map((pitcher) => renderPitcher(pitcher))}
        </tbody>
      </Table>
      <Button onClick={() => props.deleteDeck(deck.id)}>Delete Deck</Button>
    </div>
  );
};

export default Deck;
