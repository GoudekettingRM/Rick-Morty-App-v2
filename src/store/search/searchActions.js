export function search() {
  return (dispatch, getState) => {};
}

export function setPageAndEntryCount(pageCount, entryCount) {
  return {
    type: "search/SET_NEW_SEARCH_COUNT_INFO",
    payload: {
      pageCount,
      entryCount
    }
  };
}
