import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardHeader,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
import SearchBar from "../components/SearchBar";
import images from "../assets/images/braves.svg";

class Batters extends React.Component {
  state = {
    batters: this.props.batters,
    query: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        batters: this.props.batters
      });
    }
  }

  formatTeamClassname = name => name.toLowerCase().replace(" ", "-");

  handleSearchChange = e => {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    });
  };

  render() {
    const filterBatters = () => {
      if (this.state.query) {
        return this.state.batters.filter(bat => {
          return bat.attributes.full_name
            .toLowerCase()
            .includes(this.state.query.toLowerCase());
        });
      } else {
        return this.state.batters;
      }
    };

    return (
      <div>
        <SearchBar
          searchType="batters"
          handleSearchChange={this.handleSearchChange}
        />
        <CardColumns>
          {this.state.batters &&
            filterBatters().map(({ id, attributes }) => (
              <Card
                key={attributes.id}
                className={`${this.formatTeamClassname(
                  attributes.team
                )} list-group-item `}
              >
                <CardImg
                  top
                  width="100%"
                  src={`/assets/images/${this.formatTeamClassname(
                    attributes.team
                  )}.svg`}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardHeader className="text-center" width="100%">
                    <strong>{attributes.full_name}</strong>
                  </CardHeader>
                  <br></br>
                  <CardSubtitle>{attributes.team}</CardSubtitle>
                  <br></br>
                  <CardText>Year: {attributes.year_id}</CardText>
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
                  <Button onClick={() => this.props.addBatterToDeck(id)}>
                    Add Batter To Deck
                  </Button>
                </CardBody>
              </Card>
            ))}
        </CardColumns>
      </div>
    );
  }
}
export default Batters;
