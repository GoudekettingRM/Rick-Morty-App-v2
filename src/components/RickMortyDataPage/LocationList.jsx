import React, { Component } from "react";
import { api } from "../../api";
import { connect } from "react-redux";
import {
  setPageAndEntryCount,
  setNextPrevPage
} from "../../store/pagination/paginationActions";
import { setNewRickMortyData } from "../../store/rickMortyData/rickMortyDataActions";
import LocationCard from "../Cards/LocationCard";
import PageNavigation from "../PageNavigation/PageNavigation";

class LocationList extends Component {
  componentDidMount = async () => {
    const locations = await api("location");
    // console.log("locations test:", locations);
    this.props.dispatch(
      setPageAndEntryCount(locations.info.pages, locations.info.count)
    );
    this.props.dispatch(
      setNextPrevPage(locations.info.next, locations.info.prev)
    );
    this.props.dispatch(setNewRickMortyData(locations.results));
  };

  render() {
    // console.log("render of locations list", this.props);
    const { locations } = this.props;

    if (
      locations.length === 0 ||
      locations[0].hasOwnProperty("air_date") ||
      locations[0].hasOwnProperty("status")
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div className="flex">
        <PageNavigation />
        <div className="parentDiv">
          {locations.map((locations, i) => (
            <LocationCard key={i} data={locations} />
          ))}
        </div>
        <PageNavigation />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    locations: reduxState.rickMortyData
  };
}

export default connect(mapStateToProps)(LocationList);
