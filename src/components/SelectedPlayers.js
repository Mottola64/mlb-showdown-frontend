import React from "react";
import {connect} from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Table, InputGroupAddon, InputGroupText } from 'reactstrap';
import {addDeck} from '../actions/addDeck'

class SelectedPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({input: ''});
    this.formUpdate = this.formUpdate.bind(this);
  }

  formUpdate(event) {
    this.setState({input: event.target.value});
  }

  renderPlayer = (attributes) => (
    <tr key={attributes.id}>
    <td>{attributes.full_name}</td>
    <td>{attributes.team}</td>
    <td>{attributes.points}</td>
  </tr>
  )

  render() {
    return (
      <div>
       
        <Table hover>
          <thead>
            <tr>
              <strong>Selected Batters</strong>
            </tr>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.selectedPlayers &&
              this.props.selectedPlayers.batters.map(({ attributes}) => this.renderPlayer(attributes)
              )}
          </tbody>
          
        </Table>
        <Table hover>
          <thead>
            <tr>
              <strong>Selected Pitchers</strong>
            </tr>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.selectedPlayers &&
              this.props.selectedPlayers.pitchers.map(({ attributes }) => this.renderPlayer(attributes)
              )}
          </tbody>
          
        </Table>
        
      <Form inline className="search">
      <FormGroup >
        
         <InputGroupAddon addonType="prepend">
         <InputGroupText>Deck Name</InputGroupText>
        </InputGroupAddon>
        <Input type="text" name="name" placeholder="Deck Name" value={this.state.input} onChange={this.formUpdate} onSubmit={this.addDeck}/>
       
      </FormGroup>
      <Button type="submit">Save</Button>
    </Form><br></br>
        
        
      </div>
    );
  }
}

export default connect(null, {addDeck}) (SelectedPlayers);