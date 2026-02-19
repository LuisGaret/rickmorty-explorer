import '../style.css';
import { Header } from "../templates/header";
import { footer } from "../templates/footer";

import { Characters } from "../pages/characters.js";
import { Character } from "../pages/character.js";
import { Error404 } from "../pages/error404.js";

import { getHash } from "../utils/getHash.js";
import { resolveRoutes } from "../utils/resolveRoutes.js";


const rutas = {
    '/': Characters,
    '/:id' : Character,
};


export const router = async () => {   
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main');

    header.innerHTML = Header();    

    let hash = getHash();
    let route = await resolveRoutes(hash);    
    let render = rutas[route] ? rutas[route] : Error404;       
    
    main.innerHTML = await render();
}