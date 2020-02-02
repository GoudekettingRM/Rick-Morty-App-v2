import React, { Component } from "react";
import { connect } from "react-redux";
import { turnOffRedirect } from "../../store/search/searchActions";
import CharacterCard from "../CharacterCard/CharacterCard";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

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
    if (this.props.searchSubject === "location") {
      return this.props.searchResults.map((location, i) => (
        <EpisodeCard key={i} data={location} />
      ));
    }
    if (this.props.searchSubject === "episode") {
      return this.props.searchResults.map((episode, i) => (
        <EpisodeCard key={i} data={episode} />
      ));
    }
    console.log("render of search results page:", this.props);

    return <div>Welcome to the search results page!</div>;
  }
}

function mapStateToProps(reduxState) {
  return {
    searchResults: reduxState.search.results,
    searchSubject: reduxState.search.searchSubject
  };
}

export default connect(mapStateToProps)(SearchResultsPage);
