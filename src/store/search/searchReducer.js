const initialState = {
  results: [],
  searchSubject: "",
  toSearchPage: false
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "search/SET_SEARCH_RESULTS": {
      return {
        results: action.payload.searchResults,
        searchSubject: action.payload.subject,
        toSearchPage: true
      };
    }
    case "search/TURN_OFF_REDIRECT": {
      return {
        ...state,
        toSearchPage: false
      };
    }
    default:
      return state;
  }
}
