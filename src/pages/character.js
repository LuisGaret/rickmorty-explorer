import { getData } from "../utils/getData";
import { getHash } from "../utils/getHash";

export const Character = async () => {

    const hash = getHash();
    const routeArray = hash.split('/');
    const id = routeArray[2]
    const character = await getData(id);

    const view = `
            <article class="character-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
    `;

    return view;
}