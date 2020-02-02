import React, { Component } from "react";
import { connect } from "react-redux";
import { searchApi } from "../../api";
import {
  setPageAndEntryCount,
  setNextPrevPage
} from "../../store/pagination/paginationActions";
import { setSearchResults } from "../../store/search/searchActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router";

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

    console.log("search results test", searchResults);
    if (searchResults.error) {
      alert("There were no results for your search. Try something else.");
      this.setState({
        ...this.state,
        searchQuery: ""
      });
      return;
    }
    this.props.dispatch(
      setPageAndEntryCount(searchResults.info.pages, searchResults.info.count)
    );
    this.props.dispatch(
      setNextPrevPage(searchResults.info.next, searchResults.info.prev)
    );
    this.props.dispatch(
      setSearchResults(searchResults.results, this.state.subject)
    );
  };

  render() {
    if (this.props.toSearchPage) {
      return <Redirect to="/searchresults" />;
    }
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

function mapStateToProps(reduxState) {
  return {
    toSearchPage: reduxState.search.toSearchPage
  };
}

export default connect(mapStateToProps)(Search);
