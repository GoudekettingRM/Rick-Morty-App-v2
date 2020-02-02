import React, { Component } from "react";
import { api } from "../../api";
import { connect } from "react-redux";
import {
  setPageAndEntryCount,
  setNextPrevPage
} from "../../store/pagination/paginationActions";
import { setNewRickMortyData } from "../../store/rickMortyData/rickMortyDataActions";

class CharactersList extends Component {
  componentDidMount = async () => {
    const characters = await api("character");
    console.log("characters test:", characters);
    this.props.dispatch(
      setPageAndEntryCount(characters.info.pages, characters.info.count)
    );
    this.props.dispatch(
      setNextPrevPage(characters.info.next, characters.info.prev)
    );
    this.props.dispatch(setNewRickMortyData(characters.results));
  };

  render() {
    return (
      <div>
        <p>list of characters here</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(CharactersList);
