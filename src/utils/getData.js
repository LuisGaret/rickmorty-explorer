const API = "https://rickandmortyapi.com/api/character/";

export const getData = async (id) => {
    
    const apiURL = id ? `${API}${id}`: API;
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("fetch error: ", error);       
    }
}