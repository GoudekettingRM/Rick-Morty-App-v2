export async function api(endpoint) {
  const data = await fetch(`https://rickandmortyapi.com/api/${endpoint}/`);
  const parsedData = await data.json();

  return parsedData;
}

export async function searchApi(endpoint, searchQuery) {
  try {
    const data = await fetch(
      `https://rickandmortyapi.com/api/${endpoint}/?name=${searchQuery}`
    );
    const parsedData = await data.json();

    return parsedData;
  } catch (error) {
    console.error("error message", error);
  }
}
