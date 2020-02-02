import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../api";
import { setNextPrevPage } from "../../store/pagination/paginationActions";
import { setNewRickMortyData } from "../../store/rickMortyData/rickMortyDataActions";

class PageNavigation extends Component {
  handleNext = async () => {
    const newData = await api(this.props.nextPage.substring(32));

    this.props.dispatch(setNextPrevPage(newData.info.next, newData.info.prev));

    this.props.dispatch(setNewRickMortyData(newData.results));
  };

  handlePrevious = async () => {
    const newData = await api(this.props.previousPage.substring(32));

    this.props.dispatch(setNextPrevPage(newData.info.next, newData.info.prev));

    this.props.dispatch(setNewRickMortyData(newData.results));
  };

  render() {
    return (
      <div>
        {this.props.previousPage ? (
          <button className="pageBtn" onClick={this.handlePrevious}>
            Previous Page
          </button>
        ) : null}
        {this.props.nextPage ? (
          <button className="pageBtn" onClick={this.handleNext}>
            Next Page
          </button>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    previousPage: reduxState.pagination.prevPage,
    nextPage: reduxState.pagination.nextPage
  };
}

export default connect(mapStateToProps)(PageNavigation);
