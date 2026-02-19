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
    '/character/:id' : Character,
    '/page/:id': Characters
};

// evitar doble render
let isRender = false;

export const router = async () => {

    if (isRender) return;
    isRender = true;

    const header = document.querySelector('header');
    const main = document.querySelector('main');

    header.innerHTML = Header();

    let hash = getHash();
    let route = resolveRoutes(hash);
    let render = rutas[route] || Error404;

    main.innerHTML = await render();

    isRender = false;
}