const initialState = {
  pageCount: 0,
  entryCount: 0,
  nextPage: "",
  previousPage: ""
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case "pagination/SET_NEW_SEARCH_COUNT_INFO":
      return {
        ...state,
        pageCount: action.payload.pageCount,
        entryCount: action.payload.entryCount
      };
    case "pagination/SET_NEXT_PREV_PAGE":
      return {
        ...state,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage
      };
    default:
      return state;
  }
}
