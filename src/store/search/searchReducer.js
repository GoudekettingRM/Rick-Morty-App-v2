const initialState = {
  results: [],
  toSearchPage: false
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "search/SET_SEARCH_RESULTS":
      return {
        results: action.payload,
        toSearchPage: true
      };
    default:
      return state;
  }
}
