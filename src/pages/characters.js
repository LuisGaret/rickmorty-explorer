import { getData } from "../utils/API";

export const Main = async () => {
     const characters = await getData();

    const view = `
        <div class="grid grid-cols-6 m-4 gap-3">
            ${characters.results.map(character => `
                
                <article>
                    <img src="${character.image}" class="rounded-2xl shadow-2xl shadow-gray-700">
                    <h3 class="text-amber-50">${character.name}</h3>
                </article>
            `).join('')}
        </div>
    
    `;
    return view;
}


