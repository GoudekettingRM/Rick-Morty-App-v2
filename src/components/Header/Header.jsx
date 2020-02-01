import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="light" variant="light">
      <LinkContainer to="/">
        <Navbar.Brand>R . M . G .</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/characters">
          <Nav.Link>Characters</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/episodes">
          <Nav.Link>Episodes</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/locations">
          <Nav.Link>Locations</Nav.Link>
        </LinkContainer>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
