import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";

import "../index.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar" light expand="lg">
      <NavbarBrand href="/">MLB Showdown</NavbarBrand>

      <Nav className="mr-auto " navbar>
        <NavItem>
          <NavLink tag={RRNavLink} to="/batters">
            Batters
          </NavLink>
        </NavItem>
        <NavLink tag={RRNavLink} to="/pitchers">
          Pitchers
        </NavLink>
        <NavItem>
          <NavLink tag={RRNavLink} to="/decks">
            Decks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/rules">
            Rules
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
