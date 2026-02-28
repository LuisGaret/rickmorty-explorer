import '../styles/style.css';
import scroll from "../utils/scroll.js";
import { Header } from "../templates/header";
import { footer } from "../templates/footer";
import { getHash } from "../utils/getHash.js";
import { resolveRoutes } from "../utils/resolveRoutes.js";
import { searchInput } from "../utils/searchInput";
import { homeSearch } from "../utils/homeSearch.js";
// evitar doble render
let isRender = false;

export const router = async () => {

    // obtener la ruta hasheada
    let hash = getHash();
    let route = resolveRoutes(hash);
    // console.log(route);

    if (isRender) return;
    isRender = true;

    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footerElement = document.querySelector('footer');


    let render;
    let showLayouts = true;

    switch (route) {
        case "/":
        case "/home/":
            render = (await import("../pages/home.js")).Home;
            showLayouts = false;
            break;

        case "/characters/":
        case "/page/:id":
        case "/search/:name":
            render = (await import("../pages/characters.js")).Characters;
            break;

        case "/character/:id":
            render = (await import("../pages/character.js")).Character;
            break;

        case "/episodes/":
            render = (await import("../pages/episodes.js")).Episodes;
            break;

        case "/episode/:id":
            render = (await import("../pages/episode.js")).Episode;
            break;

        default:
            showLayouts = false;
            render = (await import("../pages/Error404.js")).Error404;
    }


    if (showLayouts) {
        header.classList.remove('hidden');
        footerElement.classList.remove('hidden');
        header.innerHTML = Header();
        footerElement.innerHTML = footer();
        searchInput();
    } else {
        homeSearch(route, header, footerElement);
    }

    main.innerHTML = await render();
    scroll();
    isRender = false;
}