import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Search extends Component {
  state = {
    subject: "char",
    searchQuery: ""
  };

  handleChange = event => {
    console.log("input test", event.target.name, event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit test!");
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Label>What are you looking for?</Form.Label>
        <Row>
          <Col></Col>
          <Col>
            <Form.Group>
              <Form.Control
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                as="select">
                <option value="char">Characters</option>
                <option value="ep">Episodes</option>
                <option value="loc">Locations</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.searchQuery}
              name="searchQuery"
              className="search"
              onChange={this.handleChange}
            />
          </Col>
          <Col></Col>
        </Row>
        <Button type="submit">Search!</Button>
      </Form>
    );
  }
}
