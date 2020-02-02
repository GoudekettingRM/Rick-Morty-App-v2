import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../api";
import { setNextPrevPage } from "../../store/pagination/paginationActions";
import { setNewRickMortyData } from "../../store/rickMortyData/rickMortyDataActions";
import { Button } from "react-bootstrap";

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
          <Button
            className="previousPageBtn"
            variant="outline-secondary"
            onClick={this.handlePrevious}>
            Previous Page
          </Button>
        ) : null}
        {this.props.nextPage ? (
          <Button
            className="nextPageBtn"
            variant="outline-secondary"
            onClick={this.handleNext}>
            Next Page
          </Button>
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
