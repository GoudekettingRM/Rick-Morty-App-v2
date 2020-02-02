export function search() {
  return (dispatch, getState) => {};
}

export function setSearchResults(searchResults) {
  return {
    type: "search/SET_SEARCH_RESULTS",
    payload: searchResults
  };
}
