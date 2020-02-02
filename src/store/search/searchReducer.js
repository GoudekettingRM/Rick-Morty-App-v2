const initialState = {
  results: [],
  searchSubject: "",
  toSearchPage: false,
  onSearchPage: false
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "search/SET_SEARCH_RESULTS": {
      const search = state.onSearchPage ? false : true;
      return {
        ...state,
        results: action.payload.searchResults,
        searchSubject: action.payload.subject,
        toSearchPage: search
      };
    }
    case "search/TURN_OFF_REDIRECT": {
      return {
        ...state,
        toSearchPage: false,
        onSearchPage: true
      };
    }
    case "search/SET_ON_SEARCH_PAGE_TO_FALSE": {
      return {
        ...state,
        onSearchPage: false
      };
    }
    default:
      return state;
  }
}
