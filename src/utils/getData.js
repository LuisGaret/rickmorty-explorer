const API = "https://rickandmortyapi.com/api/character/";

export const getData = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("fetch error: ", error);       
    }
}