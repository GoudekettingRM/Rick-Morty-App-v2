const initialState = [];

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "search/SET_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
}
