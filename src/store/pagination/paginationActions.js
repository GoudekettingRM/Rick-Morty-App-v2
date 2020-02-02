export function setPageAndEntryCount(pageCount, entryCount) {
  return {
    type: "pagination/SET_NEW_SEARCH_COUNT_INFO",
    payload: {
      pageCount,
      entryCount
    }
  };
}

export function setNextPrevPage(nextPage, prevPage) {
  return {
    type: "pagination/SET_NEXT_PREV_PAGE",
    payload: {
      nextPage,
      prevPage
    }
  };
}
