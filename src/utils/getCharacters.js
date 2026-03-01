const API = "https://rickandmortyapi.com/api/character/";
const cache = new Map();

export const getCharacters = async (endpoint = "", retries = 3) => {

  if (cache.has(endpoint)) {
    return cache.get(endpoint);
  }

  try {
    const response = await fetch(`${API}${endpoint}`);

    if (response.status === 429) {
      if (retries <= 0) {
        throw new Error("Rate limit exceeded");
      }

      console.warn("Too many requests, waiting...");
      await new Promise(r => setTimeout(r, 2000));

      return getCharacters(endpoint, retries - 1);
    }

    if (!response.ok) {
      (await import("../components/buttonSpin")).buttonSpin("Solvin");
      throw new Error(response.status);
    }

    const data = await response.json();

    cache.set(endpoint, data);

    return data;

  } catch (error) {
    (await import("../components/buttonSpin")).buttonSpin("solvin");
    console.error("Error fetching data:", error);
    return null;
  }
};