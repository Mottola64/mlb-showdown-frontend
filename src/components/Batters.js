import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const Batters = ({ batters, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <CardColumns>
            {batters.map(batter => (                 
                <Card key={batter.id} className='list-group-item'>
                  {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
                  <CardBody>
                    <CardTitle className='text-primary'>{batter.full_name}</CardTitle>
                    <CardSubtitle>{batter.team}</CardSubtitle>
                    <CardText>Pts: {batter.points}</CardText>
                    <CardText>Onbase: {batter.onbase}</CardText>
            <CardText>Position: {batter.starting_position}+{batter.fielding_one}</CardText>
            {/* <CardText>{batter.starting_position_two} ? {batter.starting_position_two} : null</CardText>
            {/* <CardText>Position: {batter.starting_position_three}-{batter.fielding_three}</CardText>
            <CardText>Position: {batter.starting_position_four}-{batter.fielding_four}</CardText> */}
                    <Button>Button</Button>
                  </CardBody>
                </Card>))}
        </CardColumns>
    );
}

export default Batters