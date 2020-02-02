export function setSearchResults(searchResults, subject) {
  return {
    type: "search/SET_SEARCH_RESULTS",
    payload: { searchResults, subject }
  };
}

export function turnOffRedirect() {
  return {
    type: "search/TURN_OFF_REDIRECT"
  };
}

export function setOnSearchPageToFalse() {
  return {
    type: "search/SET_ON_SEARCH_PAGE_TO_FALSE"
  };
}
