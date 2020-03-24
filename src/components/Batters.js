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

const Batters = props => {
  const formatTeamClassname = name => name.toLowerCase().replace(" ", "-");

  return (
    <div>
      <CardColumns>
        {props.batters &&
          props.batters.map(({ id, attributes }) => (
            <Card
              key={attributes.id}
              className={`list-group-item ${formatTeamClassname(
                attributes.team
              )}`}
            >
              {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle>{attributes.full_name}</CardTitle>
                <CardSubtitle>{attributes.team}</CardSubtitle>
                <CardText>Pts: {attributes.points}</CardText>
                <CardText>Onbase: {attributes.onbase}</CardText>
                <CardText>
                  Position: {attributes.starting_position}+
                  {attributes.fielding_one}
                </CardText>
                <CardText>
                  Position:{" "}
                  {attributes.starting_position_two !== "NULL" &&
                    attributes.starting_position_two}
                </CardText>
                {/* <CardText>Position: {batter.starting_position_three}-{batter.fielding_three}</CardText>
<CardText>Position: {batter.starting_position_four}-{batter.fielding_four}</CardText> */}
                <Button onClick={() => props.addBatterToDeck(id)}>
                  Button
                </Button>
              </CardBody>
            </Card>
          ))}
      </CardColumns>
    </div>
  );
};

export default Batters;
