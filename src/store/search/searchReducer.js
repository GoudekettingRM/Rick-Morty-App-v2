const initialState = {
  pageCount: 0,
  entryCount: 0,
  nextPage: "",
  previousPage: "",
  searchResults: []
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "search/SET_NEW_SEARCH_COUNT_INFO":
      return {
        ...state,
        pageCount: action.payload.pageCount,
        entryCount: action.payload.entryCount
      };
    case "search/SET_NEXT_PREV_PAGE":
      return {
        ...state,
        nextPage: action.payload.next,
        previousPage: action.payload.prev
      };
    default:
      return state;
  }
}
