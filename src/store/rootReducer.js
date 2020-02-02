import { combineReducers } from "redux";
import searchReducer from "./search/searchReducer";

export default combineReducers({
  searchResults: searchReducer
});
