import React, { Component } from "react";
import { connect } from "react-redux";
import { searchApi } from "../../api";
import { setPageAndEntryCount } from "../../store/search/searchActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Search extends Component {
  state = {
    subject: "character",
    searchQuery: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const searchResults = await searchApi(
      this.state.subject,
      this.state.searchQuery
    );
    this.props.dispatch(
      setPageAndEntryCount(searchResults.info.pages, searchResults.info.count)
    );
    console.log("search results test", searchResults);
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
                <option value="character">Characters</option>
                <option value="episode">Episodes</option>
                <option value="location">Locations</option>
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

export default connect()(Search);
