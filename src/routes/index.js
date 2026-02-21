import '../styles/style.css';
import { Header } from "../templates/header";
import { footer } from "../templates/footer";

import { Characters } from "../pages/characters.js";
import { Character } from "../pages/character.js";
import { Error404 } from "../pages/Error404.js";
import { Episodes } from "../pages/episodes.js";
import { Episode } from "../pages/episode.js";

import { getHash } from "../utils/getHash.js";
import { resolveRoutes } from "../utils/resolveRoutes.js";
import scroll from "../utils/scroll.js";

const rutas = {
    '/': Characters,
    '/character/:id': Character,
    '/page/:id': Characters,
    '/search/:name': Characters,
    '/episodes/': Episodes,
    '/episode/:id': Episode,
};

// evitar doble render
let isRender = false;

export const router = async () => {

    if (isRender) return;
    isRender = true;

    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footerElement = document.querySelector('footer');

    footerElement.innerHTML = footer();
    header.innerHTML = Header();

    const searchInput = document.querySelector('#searchInput')
    const searchButton = document.querySelector('#searchButton');

    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                location.hash = `#/search/${e.target.value}`;
            }
        });
    }
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            // alert(searchInput.value);
            location.hash = `#/search/${searchInput.value}`;

        });
    }

    let hash = getHash();
    let route = resolveRoutes(hash);
    let render = rutas[route] || Error404;

    main.innerHTML = await render();
    scroll();

    isRender = false;
}