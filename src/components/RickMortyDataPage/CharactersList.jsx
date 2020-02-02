import React, { Component } from "react";
import { api } from "../../api";
import { connect } from "react-redux";
import {
  setPageAndEntryCount,
  setNextPrevPage
} from "../../store/pagination/paginationActions";
import { setNewRickMortyData } from "../../store/rickMortyData/rickMortyDataActions";
import CharacterCard from "../Cards/CharacterCard";
import "./list.css";
import PageNavigation from "../PageNavigation/PageNavigation";

class CharactersList extends Component {
  componentDidMount = async () => {
    const characters = await api("character");
    // console.log("characters test:", characters);
    this.props.dispatch(
      setPageAndEntryCount(characters.info.pages, characters.info.count)
    );
    this.props.dispatch(
      setNextPrevPage(characters.info.next, characters.info.prev)
    );
    this.props.dispatch(setNewRickMortyData(characters.results));
  };

  render() {
    // console.log("render of character list", this.props);
    const { characters } = this.props;

    if (
      characters.length === 0 ||
      characters[0].hasOwnProperty("air_date") ||
      characters[0].hasOwnProperty("dimension")
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div className="flex">
        <PageNavigation />
        <div className="parentDiv">
          {characters.map((character, i) => (
            <CharacterCard key={i} data={character} />
          ))}
        </div>
        <PageNavigation />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    characters: reduxState.rickMortyData
  };
}

export default connect(mapStateToProps)(CharactersList);
