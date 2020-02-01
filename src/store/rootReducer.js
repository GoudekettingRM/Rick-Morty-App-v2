import { combineReducers } from "redux";

export default combineReducers({
  startTestReducer: startReducer
});

function startReducer(state = null, action) {
  switch (action.type) {
    case "yes": {
      return "yes";
    }
    default:
      return null;
  }
}
