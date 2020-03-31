import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">MLB Showdown</h1>
          <p className="lead text-center">
            Welcome To MLB Showdown! Check out the cards from the 2000 and 2001
            MLB Showdown sets, and build your own deck for the next time you
            face your friends!
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
