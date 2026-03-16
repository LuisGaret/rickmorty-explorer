import { API } from '../utils/APIS';
import { fetchWithRetry } from '../utils/fetchWithRetry';
export const asideContente = () => {
  return `
    <div class="drawer drawer-end z-90">
        <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
            <label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu min-h-full w-60 md:w-80 p-4 rounded-xl
  border border-white/10 bg-white/3 backdrop-blur-sm
  hover:border-white/25 hover:bg-white/[0.07]
  transition-all duration-300">
                <!-- Sidebar content here -->
                <div id="charactersEpisodes" class="overflow-y-auto"
                    style="scrollbar-color: #333 transparent; scrollbar-width: thin;">

                </div>
            </ul>
        </div>
    </div>
`;
};

export const viewCharacters = async (ENDPOINT) => {
  const response2 = await fetchWithRetry(`${API.episodes}${ENDPOINT}`);
  const results = await response2.json();
  const charactersId = results.characters.map((url) => url.split('/').pop());
  const response = await fetchWithRetry(
    `${API.characters}${charactersId.join(',')}`
  );
  const characters = await response.json();
  const characterList = Array.isArray(characters) ? characters : [characters];

  const view = `
  ${characterList
    .map((character) => {
      return `
                        <a href="src/pages/character/#?id=${character.id}"
                        class="group flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors duration-200 font-semibold">
                        <div style="animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 100 * 100ms"
                            class="flex items-center gap-3 px-4 py-3  transition-colors duration-150 border-b border-white/5 last:border-0">
                            <div class="relative shrink-0">
                                <img loading="lazy" src="${character.image}" alt="${character.name}"
                                onerror="setTimeout(() => { if(!this.dataset.retried){ this.dataset.retried='1'; this.src=this.src; } else { this.src='${character.image}'; } },5000)"
                                    class="w-10 h-10 object-cover rounded-full ring-1 ring-white/10" />
                            </div>
                            <div class="min-w-0">
                                <p class="text-sm font-medium text-white truncate leading-tight">${character.name}</p>
                                <p class="text-xs text-gray-300 truncate">${character.species}</p>
                            </div>
                            <div class="ml-auto text-xs text-gray-600 font-mono tracking-wide">
                    </a>
                </div>
        </div>
    `;
    })
    .join('')}
  `;

  const charactersEpisodes = document.getElementById('charactersEpisodes');
  charactersEpisodes.innerHTML = view;
};
