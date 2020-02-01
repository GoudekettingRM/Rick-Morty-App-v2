export default async function api(endpoint) {
  const data = await fetch(`https://rickandmortyapi.com/api/${endpoint}/`);
  const parsedData = await data.json();

  return parsedData;
}
