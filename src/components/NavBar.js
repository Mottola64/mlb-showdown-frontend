import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';
import PitchersContainer from '../containers/PitchersContainer';
import BattersContainer from '../containers/BattersContainer'

class NavBar extends React.Component {

    render() {
        return (
            <Router>
                <Container >
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">MLB Showdown
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">LogIn</Nav.Link>
                                <Nav.Link href="#link">Create Account</Nav.Link>
                                    <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Create Account</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Navbar>
                    <Route exact path='/pitchers' component={PitchersContainer} />
                    <Route exact path='/batters' component={BattersContainer} />
                </Container>
            </Router>
        )
    }
}

export default NavBar;