import React from "react";
import { Table } from "reactstrap";

class Decks extends React.Component {
  render() {
    return (
      <div>
        {this.props.decks &&
          this.props.decks.map(({ attributes }) => (
            <Table key={attributes.id} hover>
              <thead>
                <tr>
                  <th>{attributes.name}</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Position</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{}</td>
                  <td>test</td>
                  <td>@mdo</td>
                </tr>
              </tbody><br></br>
            </Table>
          ))}
      </div>
    );
  }
}

export default Decks;
