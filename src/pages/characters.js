import { getHash } from "../utils/getHash";
import { getData } from "../utils/getData";
import { NumRandom } from "../utils/numRandom";

export const Characters = async () => {

    const hash = getHash();
    const routeArray = hash.split('/');
    const page = routeArray[2] || NumRandom();
    const search = routeArray[1] === "search" ? routeArray[2] : null;

    let characters;
    let pagination;

    if (search) {
        characters = await getData(`?name=${search}`);
        pagination = false;
    } else {
        characters = await getData(`?page=${page}`);
        pagination = true;
    }

    if (!characters?.results) {
        return `<h2 class="text-white">Error loading characters</h2>`;
    }

    const resultPagination = () => {
        if (pagination) {
            return `<div class="flex gap-4 justify-center mt-6">
            ${characters.info.prev ? `<a href="#/page/${Number(page) - 1}">⬅ Prev</a>` : ""}
            <span>Page ${page}</span>
            ${characters.info.next ? `<a href="#/page/${Number(page) + 1}">Next ➡</a>` : ""}
            </div>`;
        } else{
            return ``;
        }
    }

    const view = `
        <div class="grid grid-cols-6 m-4 gap-3">
            ${characters.results.map(character => `
                <article class="">
                    <a href="#/character/${character.id}">
                    <img src="${character.image}" class="rounded-2xl shadow-2xl shadow-gray-700">
                    <h3 class="text-amber-50">${character.name}</h3>
                    </a>
                </article>
            `).join('')}
        </div>
        ${resultPagination()}
    `;
    return view;
}


