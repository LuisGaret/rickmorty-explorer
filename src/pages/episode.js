import { getEpisodes } from "../utils/getEpisodes";
import { getHash } from "../utils/getHash";

import { getCharacters } from "../utils/getCharacters";

export const Episode = async () => {
const hash = getHash();
const routeArray = hash.split('/');
const id = routeArray[2]
const episode = await getEpisodes(id);


const charactersEpisode = await Promise.all(episode.characters.map(async (characterUrl) => {
  const characterId = characterUrl.split('/').pop();
  const character = await getCharacters(characterId);
  return character;
}));


const view = `
<div class="min-h-screen bg-black px-4 font-mon py-5" id="div-character">
  <div class="max-w-6xl mx-auto mb-10">
    <a href="${location.hash.includes('episodes') ? '#/episodes/' : '#/episodes/'}"
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
        <img src="/images/episode-${episode.id}.png" alt="${episode.name}"
          class="absolute inset-0 w-full h-full object-cover contrast-125 opacity-80" />
        <div
          class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]">
        </div>
        <div class="absolute inset-0 bg-[linear-gradient(to_top,black_0%,transparent_50%)]"></div>
      </div>
      <div class="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-900 flex flex-col">
        <div class="p-6 border-b border-gray-900">
          <div class="space-y-5">
            <div class="flex flex-col gap-1">
              <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">NAME EPISODE</span>
              <div class="mb-2 overflow-hidden">
                <h1
                  class="text-[clamp(2rem,3vw,8rem)] font-black text-white leading-none tracking-tighter uppercase mix-blend-difference">
                  ${episode.name}
                </h1>
              </div>
            </div>
            </div>
            <div class="space-y-5 py-5">
            <div class="flex flex-col gap-1">
              <span class="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Air Date</span>
              <span class="text-3xs tracking-[0.4em] uppercase text-white">${episode.air_date}</span>
            </div>
            </div>
            <div class="space-y-5">
            <div class="flex flex-col gap-1">
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-[10px] text-gray-500 tracking-[0.3em] uppercase mb-1">EPISODE N°</p>
            <p class="text-7xl font-black text-white leading-none">${episode.id}</p>
          </div>
        </div>
        </div>
      </div>
      <div class="lg:col-span-3 bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden">
    <div class="px-4 py-3 border-b border-white/10 flex items-center justify-between">
    <span class="text-xs font-semibold uppercase tracking-widest text-gray-300">PARTICIPANTS</span>
    <span class="text-xs text-gray-300">${charactersEpisode.length}</span>
  </div>
  <div class="overflow-y-auto"
    style="max-height: 350px; scrollbar-color: #333 transparent; scrollbar-width: thin;">
    ${charactersEpisode.map((ep, i) => `
        <a href="#/character/${ep.id}" class="group flex items-center gap-1 text-gray-500 hover:text-green-400 transition-colors duration-200 font-semibold">
        <div class="flex items-center gap-3 px-4 py-3 hover:bg-green-500/15 transition-colors duration-150 border-b border-white/5 last:border-0">
            <div class="relative shrink-0">
              <img src="${ep.image}" alt="${ep.name}" class="w-10 h-10 object-cover rounded-full ring-1 ring-white/10 ">
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-white truncate leading-tight">${ep.name}</p>
              <p class="text-xs text-gray-500 truncate">${ep.species}</p>
            </div>
        <div class="ml-auto text-xs text-gray-600 font-mono tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>        
          </a>
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