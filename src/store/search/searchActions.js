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
