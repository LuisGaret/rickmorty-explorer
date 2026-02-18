import { getData } from "../utils/getData";

export const Characters = async () => {
     const characters = await getData();

    const view = `
        <div class="grid grid-cols-6 m-4 gap-3">
            ${characters.results.map(character => `
                <article class="">
                    <a href="${character.id}">
                    <img src="${character.image}" class="rounded-2xl shadow-2xl shadow-gray-700">
                    <h3 class="text-amber-50">${character.name}</h3>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
}


