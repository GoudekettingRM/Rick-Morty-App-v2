import { combineReducers } from "redux";
import searchReducer from "./search/searchReducer";
import paginationReducer from "./pagination/paginationReducer";

export default combineReducers({
  searchResults: searchReducer,
  pagination: paginationReducer
});
