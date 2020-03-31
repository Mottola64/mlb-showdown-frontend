import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import "../index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = () => {
  return (
    
      // <Container>
      //   <Navbar className="navbar">
      //     <Navbar.Brand>
      //       <Nav.Link href="/">MLB Showdown</Nav.Link>
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="mr-auto">
      //         <Link to="/batters">Batters</Link>
      //         <Link to="/pitchers">Pitchers</Link>
      //         <Link to="/decks">Decks</Link>
      //         <Link to="/rules">Rules</Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      // </Container>
    <Navbar className="navbar" light expand="lg">
        <NavbarBrand href="/">MLB Showdown</NavbarBrand>
 
          <Nav className="mr-auto " navbar>
            <NavItem>
            <NavLink tag={RRNavLink} to="/batters">Batters</NavLink>
            </NavItem>
            <NavLink tag={RRNavLink} to="/pitchers">Pitchers</NavLink>
            <NavItem>
            <NavLink tag={RRNavLink} to="/decks">Decks</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={RRNavLink} to="/rules">Rules</NavLink>
            </NavItem>
          </Nav>

      </Navbar>
  );
};

export default NavBar;


