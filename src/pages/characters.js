import { getHash } from "../utils/getHash";
import { getData } from "../utils/getData";

export const Characters = async () => {
    
    const hash = getHash();
    const routeArray = hash.split('/');
    const page = routeArray[2] || 41;
    
    const characters = await getData(`?page=${page}`);
    
    if (!characters?.results) {
        return `<h2 class="text-white">Error loading characters</h2>`;
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
         <div class="flex gap-4 justify-center mt-6">
            ${characters.info.prev ? `
                <a href="#/page/${Number(page)-1}">⬅ Prev</a>
            ` : ""}

            <span>Page ${page}</span>

            ${characters.info.next ? `
                <a href="#/page/${Number(page)+1}">Next ➡</a>
            ` : ""}
        </div>
    `;
    return view;
}


