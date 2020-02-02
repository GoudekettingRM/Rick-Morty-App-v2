import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResultsPage extends Component {
  render() {
    return <div>Welcome to the search results page!</div>;
  }
}

export default connect()(SearchResultsPage);
