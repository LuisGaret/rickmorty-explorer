import { getHash } from "../utils/getHash";
import { getEpisodes } from "../utils/getEpisodes";
import { resultPagination } from "../utils/pagination";
import { imgQuality } from "../utils/imgQuality";
export const Episodes = async () => {


const imgQualityType = imgQuality();
const hash = getHash();
const routeArray = hash.split('/');
const page = routeArray[2] || 1;
const episodes = await getEpisodes(`?page=${page}`);

const view = `
<div class="min-h-screen bg-[#0e0e0e] font-sans">
${resultPagination(true, episodes, page, "episodes")} 
<div class="mx-8 lg:mx-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-8 lg:px-16 pb-16">
${episodes.results.map((episode, i) => `

    <a href="#/episode/${episode.id}" class="group relative block overflow-hidden rounded-xl bg-[#0e0e0e]
             border border-white/4 transition-all duration-500
              hover:-translate-y-2"
      style="animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: ${i * 40}ms">
      <div class="relative overflow-hidden" style="aspect-ratio: 16/9;">
        <img 
        class="w-full h-full object-cover transition-all duration-700 ease-out" 
        alt="${episode.name}"
        loading="lazy" 
        src="/images/episodes/episode-${episode.id}.${imgQualityType}"/>

        <div class="absolute inset-0 bg-linear-to-t
          from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent
          pointer-events-none"></div>

        <div class="absolute inset-0 bg-linear-to-br from-white/3 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div class="absolute -bottom-2 -right-1 font-black leading-none select-none pointer-events-none
          text-[2rem] text-white/30 group-hover:text-white/80
          transition-all duration-700 tracking-tighter" style="font-variant-numeric: tabular-nums">
          ${episode.id.toString().padStart(2, '0')}
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative flex items-center justify-center
            w-11 h-11 rounded-full
            bg-white/8 backdrop-blur-md border border-white/15
            scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100
            transition-all duration-350 ease-out
            ,inset_0_1px_0_rgba(255,255,255,0.15)]">
            <div class="absolute inset-0 rounded-full border border-white/10
              scale-100 group-hover:scale-[1.5] group-hover:opacity-0
              transition-all duration-700 ease-out"></div>
            <svg class="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background-image: repeating-linear-gradient(
            0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px
          )"></div>
      </div>
      <div class="px-3 py-3">
        <div class="h-px w-full mb-2.5"
          style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 60%, transparent)">
        </div>
        <h3 class="text-white/90 text-[12px] font-semibold leading-snug truncate mb-1.5
          group-hover:text-white transition-colors duration-300 tracking-tight"
          style="font-feature-settings: 'ss01' 1">
          ${episode.name}
        </h3>
        <div class="flex justify-between items-center gap-1.5 text-[9px] text-white/25 group-hover:text-white/35
        transition-colors duration-300 tracking-wide uppercase font-medium">
          <span class="flex items-center gap-1">
            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            22 min</span>
          <span>${episode.episode}</span>
        </div>
      </div>
      <div
        class="absolute inset-0 rounded-xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div class="absolute -top-full left-0 right-0 h-full
          bg-linear-to-b from-transparent via-white/2.5 to-transparent
          group-hover:translate-y-[200%] transition-transform duration-1000 ease-out"></div>
      </div>
    </a>
    `).join('')}
  </div>
</div>
    ${resultPagination(true, episodes, page, "episodes")} 
</div>
    <style>
      #episodesLink {
        color: #68D391 !important;
      }
      #episodesLink span{
        width: 100% !important;
      }
    </style>
`;
return view;


}