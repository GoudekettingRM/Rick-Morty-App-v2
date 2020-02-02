import React, { Component } from "react";
import { connect } from "react-redux";
import { turnOffRedirect } from "../../store/search/searchActions";

class SearchResultsPage extends Component {
  componentDidMount = () => {
    this.props.dispatch(turnOffRedirect());
  };

  render() {
    console.log("render of search results page:", this.props);

    return <div>Welcome to the search results page!</div>;
  }
}
function mapStateToProps(reduxState) {
  return {
    searchResults: reduxState.search.results
  };
}

export default connect(mapStateToProps)(SearchResultsPage);
