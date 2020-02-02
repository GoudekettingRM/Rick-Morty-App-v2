import { combineReducers } from "redux";
import searchReducer from "./search/searchReducer";
import paginationReducer from "./pagination/paginationReducer";
import rickMortyDataReducer from "./rickMortyData/rickMortyDataReducer";

export default combineReducers({
  search: searchReducer,
  pagination: paginationReducer,
  rickMortyData: rickMortyDataReducer
});
