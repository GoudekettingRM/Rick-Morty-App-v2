export function setNewRickMortyData(newData) {
  return {
    type: "rickMortyData/SET_NEW",
    payload: newData
  };
}

export function clearOldRickMortyData() {
  return {
    type: "rickMortyData/CLEAR"
  };
}
