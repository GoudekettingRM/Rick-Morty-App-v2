import React, { Component } from "react";
import { connect } from "react-redux";

class PageNavigation extends Component {
  handleNext = () => {
    console.log("hi from next");
  };
  handlePrevious = () => {
    console.log("hi from previous");
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
