import { getEpisodes } from "../utils/getEpisodes";
import { getHash } from "../utils/getHash";
import { getCharacters } from "../utils/getCharacters";
import { imgQuality } from "../utils/imgQuality";

export const Episode = async () => {

const imgQualityType = imgQuality();  
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
  <div class="max-w-6xl mx-auto mb-10 flex justify-between">
    <a href="#/characters/"
      class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-green-400 transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm w-50">
      <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
      Episodes
    </a>
  </div>
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-900 ">
      <div
        class=" lg:col-span-4 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-900 transition-all duration-1900 cursor-pointer"
        style="min-height: 280px;">
        <img src="/images/episodes/episode-${episode.id}.${imgQualityType}" alt="${episode.name}"
        loading="lazy"  
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
    style="max-height: 300px; scrollbar-color: #333 transparent; scrollbar-width: thin;">
    ${charactersEpisode.map((ep, i) => `
        <div class="flex items-center gap-3 px-4 py-3 hover:bg-green-500/15 transition-colors duration-150 border-b border-white/5 last:border-0"
        style="animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: ${i * 100}ms">
            <div class="relative shrink-0">
              <img src="/images/episodes/episode-default.${imgQualityType}" alt="${ep.name}" class="w-10 h-10 object-cover rounded-full ring-1 ring-white/10 "
              loading="lazy" />
              </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-white truncate leading-tight">${ep.name}</p>
              <p class="text-xs text-gray-500 truncate">${ep.species}</p>
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