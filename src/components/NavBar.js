import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import PitchersContainer from "../containers/PitchersContainer";
import BattersContainer from "../containers/BattersContainer";

const NavBar = props => {
  return (
    <Router>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">MLB Showdown</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#batters">Batters</Nav.Link>
              <Nav.Link href="/pitchers">Pitchers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Route exact path='/pitchers' component={PitchersContainer} />
                    <Route exact path='/batters' component={BattersContainer} />
 */}
      </Container>
    </Router>
  );
};

export default NavBar;
