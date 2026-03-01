const API = "https://rickandmortyapi.com/api/episode/";
const cache = new Map();

export const getEpisodes = async (endpoint = "", retries = 3) => {

  // evita reques duplicados
  if (cache.has(endpoint)) {
    return cache.get(endpoint);
  }

  const request = (async () => {
    try {
      const response = await fetch(`${API}${endpoint}`);

      if (response.status === 429) {
        if (retries <= 0) {
          throw new Error("Rate limit exceeded");
        }

        await new Promise(r => setTimeout(r, 2000));
        return getEpisodes(endpoint, retries - 1);
      }

      if (!response.ok) {
      (await import("../components/solvinCheck")).solvinSpin("solvin");
        throw new Error(response.status);
      }

      return await response.json();

    } catch (error) {
      // evita cache roto
      cache.delete(endpoint); 
      console.error("Error fetching data:", error);
      (await import("../components/solvinCheck")).solvinSpin("solvin");
      return null;
    }
  })();

  // save prmise
  cache.set(endpoint, request);

  return request;
};