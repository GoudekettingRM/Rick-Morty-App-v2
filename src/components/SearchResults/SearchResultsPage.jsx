import React, { Component } from "react";
import { connect } from "react-redux";
import {
  turnOffRedirect,
  setOnSearchPageToFalse
} from "../../store/search/searchActions";
import CharacterCard from "../CharacterCard/CharacterCard";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import LocationCard from "../LocationCard/LocationCard";
import Search from "../Search/Search";

class SearchResultsPage extends Component {
  componentDidMount = () => {
    this.props.dispatch(turnOffRedirect());
    console.log("props test in comp did mount", this.props);
  };

  componentWillUnmount = () => {
    this.props.dispatch(setOnSearchPageToFalse());
  };

  render() {
    // const loading = this.props.searchResults.length === 0;

    // if (loading) {
    //   return <div> Loading search results...</div>;
    // }
    console.log("render of search results page:", this.props);

    return (
      <div>
        <Search />
        {this.props.searchSubject === "character"
          ? this.props.searchResults.map((character, i) => (
              <CharacterCard key={i} data={character} />
            ))
          : null}
        {this.props.searchSubject === "location"
          ? this.props.searchResults.map((location, i) => (
              <LocationCard key={i} data={location} />
            ))
          : null}
        {this.props.searchSubject === "episode"
          ? this.props.searchResults.map((episode, i) => (
              <EpisodeCard key={i} data={episode} />
            ))
          : null}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    searchResults: reduxState.search.results,
    searchSubject: reduxState.search.searchSubject
  };
}

export default connect(mapStateToProps)(SearchResultsPage);
