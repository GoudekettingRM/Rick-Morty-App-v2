const initialState = [];

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case "rickMortyData/SET_NEW":
      return action.payload;
    default:
      return state;
  }
}
