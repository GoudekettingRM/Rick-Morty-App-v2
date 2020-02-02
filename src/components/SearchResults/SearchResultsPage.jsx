import React, { Component } from "react";
import { connect } from "react-redux";
import { turnOffRedirect } from "../../store/search/searchActions";
import CharacterCard from "../CharacterCard/CharacterCard";

class SearchResultsPage extends Component {
  componentDidMount = () => {
    this.props.dispatch(turnOffRedirect());
    console.log("props test in comp did mount", this.props);
  };

  render() {
    const loading = !this.props.searchResults;

    if (loading) {
      return <div> Loading search results...</div>;
    }
    if (this.props.searchSubject === "character") {
      return this.props.searchResults.map((character, i) => (
        <CharacterCard key={i} data={character} />
      ));
    }
    console.log("render of search results page:", this.props);

    return <div>Welcome to the search results page!</div>;
  }
}

// for characters, render a card for each result: image, name, id

function mapStateToProps(reduxState) {
  return {
    searchResults: reduxState.search.results,
    searchSubject: reduxState.search.searchSubject
  };
}

export default connect(mapStateToProps)(SearchResultsPage);
