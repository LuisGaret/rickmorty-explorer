const API = "https://rickandmortyapi.com/api/character/";
const cache = new Map();

export const getCharacters = async (endpoint = "") => {

  if (cache.has(endpoint)) {
    return cache.get(endpoint);
  }

  try {
    const response = await fetch(`${API}${endpoint}`);

    if (response.status === 429) {
      console.warn("Too many requests, retrying...");
      await new Promise(r => setTimeout(r, 1000));
      return getCharacters(endpoint);
    }

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    cache.set(endpoint, data);

    return data;

  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};