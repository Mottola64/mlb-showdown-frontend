import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const Pitchers = ({ pitchers, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <CardColumns>
            {pitchers.map(pitcher => (                 
                <Card key={pitcher.id} className='list-group-item'>
                  {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
                  <CardBody>
                    <CardTitle>{pitcher.full_name}</CardTitle>
                    <CardSubtitle>{pitcher.team}</CardSubtitle>
                    <CardText>Pts: {pitcher.points}</CardText>
                    <CardText>Control: {pitcher.control}</CardText>
                    <CardText>Position: {pitcher.position}</CardText>         
                    <Button>Button</Button>
                  </CardBody>
                </Card>))}
        </CardColumns>
    );
}

export default Pitchers