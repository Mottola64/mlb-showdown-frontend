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

class Pitchers extends React.Component {
  state = {
    pitchers: this.props.pitchers,
    query: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        pitchers: this.props.pitchers
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
    const filterPitchers = () => {
      if (this.state.query) {
        return this.state.pitchers.filter(pitch => {
          return pitch.attributes.full_name
            .toLowerCase()
            .includes(this.state.query.toLowerCase());
        });
      } else {
        return this.state.pitchers;
      }
    };

    return (
      <div>
        <SearchBar
          searchType="pitchers"
          handleSearchChange={this.handleSearchChange}
        />
        <CardColumns>
          {this.state.pitchers &&
            filterPitchers().map(({ id, attributes }) => (
              <Card key={attributes.id} className="list-group-item">
                {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
                <CardBody>
                  <CardHeader className="text-center" top width="100%">
                    <strong>{attributes.full_name}</strong>
                  </CardHeader>
                  <br></br>

                  <CardSubtitle>{attributes.team}</CardSubtitle>
                  <br></br>
                  <CardText>Year: {attributes.year_id}</CardText>
                  <CardText>Pts: {attributes.points}</CardText>
                  <CardText>Control: {attributes.control}</CardText>
                  <CardText>Position: {attributes.position}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            ))}
        </CardColumns>
      </div>
    );
  }
}
export default Pitchers;
