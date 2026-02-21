import { getCharacters } from "../utils/getCharacters";
import { getHash } from "../utils/getHash";
import { getEpisodes } from "../utils/getEpisodes";

export const Character = async () => {

const hash = getHash();
const routeArray = hash.split('/');
const id = routeArray[2]
const character = await getCharacters(id);


const episodes = await Promise.all(character.episode.map(async (episodeUrl) => {
const episodeId = episodeUrl.split('/').pop();
const episode = await getEpisodes(episodeId);
return episode;
}));

const view = `
<div class="min-h-screen bg-black px-4 font-mon py-5" id="div-character">
  <div class="max-w-6xl mx-auto mb-10">
    <a href="#/"
      class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-green-400 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm w-25">
      <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
      Back
    </a>
  </div>
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-900 ">
      <div
        class=" lg:col-span-4 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-900 transition-all duration-1900 cursor-pointer"
        style="min-height: 280px;">
        <img src="${character.image}" alt="${character.name}"
          class="absolute inset-0 w-full h-full object-cover contrast-125 opacity-80" />
        <div
          class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]">
        </div>
        <div class="absolute inset-0 bg-[linear-gradient(to_top,black_0%,transparent_50%)]"></div>
      </div>
      <div class="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-900 flex flex-col">
        <div class="p-6 border-b border-gray-900">
          <div class="space-y-5">
            <div class="flex flex-col gap-1">
              <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">NAME</span>
              <div class="mb-2 overflow-hidden">
                <h1
                  class="text-[clamp(2rem,3vw,8rem)] font-black text-white leading-none tracking-tighter uppercase mix-blend-difference">
                  ${character.name}
                </h1>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Status</span>

                <div class="flex items-center gap-2">
                  <span class="relative flex w-1.5 h-1.5">
                    ${character.status === 'Alive' ? `
                    <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    ` : `
                    <span
                      class="relative inline-flex w-1.5 h-1.5 rounded-full ${character.status === 'Dead' ? 'bg-red-600' : 'bg-gray-600'}"></span>
                    `}
                  </span>
                  <span
                    class="text-xs tracking-[0.4em] uppercase ${character.status === 'Alive' ? 'text-green-400' : character.status === 'Dead' ? 'text-red-500' : 'text-gray-200'}">${character.status}</span>
                </div>
              </div>

              <div class="flex flex-col gap-1">
                <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Species</span>
                <span class="text-sm text-white font-bold">${character.species || '—'}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Gender</span>
                <span class="text-sm text-white font-bold">${character.gender || '—'}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Type</span>
                <span class="text-sm text-white font-bold">${character.type || '—'}</span>
              </div>

            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Origin</span>
                <span class="text-sm text-white font-bold leading-snug">${character.origin.name}</span>
              </div>

              <div class="flex flex-col gap-1">
                <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Location</span>
                <span class="text-sm text-white font-bold leading-snug">${character.location.name}</span>
              </div>
            </div>
            <div class="">
              <p class="text-[10px] text-gray-500 tracking-[0.3em] uppercase mb-1">APPEARANCES</p>
              <p class="text-7xl font-black text-white leading-none">${character.episode.length}</p>
              <p class="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">EPISODES</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden">
        <div class="px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-widest text-gray-300">EPISODES</span>
          <span class="text-xs text-gray-300">${character.episode.length}</span>
        </div>
        <div class="overflow-y-auto"
          style="max-height: 350px; scrollbar-color: #333 transparent; scrollbar-width: thin;">
          ${episodes.map((ep, i) => `
          <div
            class="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-0">
            <div class="relative shrink-0">
              <img src="src/assets/img/episodes/episode-${ep.id}.png" alt="${ep.name}"
                class="w-10 h-10 object-cover rounded-full ring-1 ring-white/10 ">

            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-white truncate leading-tight">${ep.name}</p>
              <p class="text-xs text-gray-500 truncate">${ep.episode}</p>
            </div>
            <div class="ml-auto text-xs text-gray-600 font-mono tracking-wide">
              <a href="#/episode/${ep.id}"
                class="group flex items-center gap-1 text-gray-500 hover:text-green-400 transition-colors duration-200 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
                </svg>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
</div>
`;
return view;
}