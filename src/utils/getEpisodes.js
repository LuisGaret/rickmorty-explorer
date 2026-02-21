import { Error404 } from "../pages/Error404";

const API = "https://rickandmortyapi.com/api/episode/";
const cache = {};

export const getEpisodes = async (endpoint = "") => {

    if (cache[endpoint]) return cache[endpoint];

    try {
        const response = await fetch(`${API}${endpoint}`);
        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();

        cache[endpoint] = data;

        return data;

    } catch (error) {
        Error404();
        console.error("Error fetching data:", error);
    }
};
