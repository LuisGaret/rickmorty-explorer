import '../style.css'
import { Header } from "../templates/header";
import { footer } from "../templates/footer";

import { Characters } from "../pages/characters";
import { Character } from "../pages/character.js";

import { getHash } from "../utils/getHash.js";

const rutas = {
    '/': Characters,
    '/:id' : Character,
};


export const route = async () => {   
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main');

    header.innerHTML = await Header();
    main.innerHTML = await Characters();


}