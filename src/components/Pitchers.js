import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Pitchers = props => {
  // if (loading) {
  //     return <h2>Loading...</h2>;
  // }

  return (
    <CardColumns>
      {props.pitchers &&
        props.pitchers.map(({ attributes }) => (
          <Card key={attributes.id} className="list-group-item">
            {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
            <CardBody>
              <CardTitle>{attributes.full_name}</CardTitle>
              <CardSubtitle>{attributes.team}</CardSubtitle>
              <CardText>Pts: {attributes.points}</CardText>
              <CardText>Control: {attributes.control}</CardText>
              <CardText>Position: {attributes.position}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        ))}
    </CardColumns>
  );
};

export default Pitchers;
