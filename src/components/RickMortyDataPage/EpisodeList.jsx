import React, { Component } from "react";
import { api } from "../../api";
import { connect } from "react-redux";
import {
  setPageAndEntryCount,
  setNextPrevPage
} from "../../store/pagination/paginationActions";
import { setNewRickMortyData } from "../../store/rickMortyData/rickMortyDataActions";
import EpisodeCard from "../Cards/EpisodeCard";
import "./list.css";

class EpisodeList extends Component {
  componentDidMount = async () => {
    const episodes = await api("episode");
    // console.log("episodes test:", episodes);
    this.props.dispatch(
      setPageAndEntryCount(episodes.info.pages, episodes.info.count)
    );
    this.props.dispatch(
      setNextPrevPage(episodes.info.next, episodes.info.prev)
    );
    this.props.dispatch(setNewRickMortyData(episodes.results));
  };

  render() {
    // console.log("render of episode list", this.props);
    const { episodes } = this.props;
    if (
      episodes.length === 0 ||
      episodes[0].hasOwnProperty("status") ||
      episodes[0].hasOwnProperty("dimension")
    ) {
      return <div>Loading...</div>;
    }
    return (
      <div className="flex">
        <div className="parentDiv">
          {episodes.map((episode, i) => (
            <EpisodeCard key={i} data={episode} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    episodes: reduxState.rickMortyData
  };
}

export default connect(mapStateToProps)(EpisodeList);
