import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="light" variant="light">
      <LinkContainer to="/">
        <Navbar.Brand>R . M . G .</Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto">
        <LinkContainer to="/">
          <Nav.Link className="mr-4">Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Browse Rick & Morty" id="basic-nav-dropdown">
          <LinkContainer to="/characters">
            <NavDropdown.Item>Characters</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/episodes">
            <NavDropdown.Item>Episodes</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/locations">
            <NavDropdown.Item>Locations</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/search">
          <Nav.Link className="ml-4">Search</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
