export function setNewRickMortyData(newData) {
  return {
    type: "rickMortyData/SET_NEW",
    payload: newData
  };
}
