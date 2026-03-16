import { API } from '../utils/APIS';
import { fetchWithRetry } from '../utils/fetchWithRetry';

export const contentCharacter = async () => {
  const hash = window.location.hash.replace('#?id=', '');
  const ENDPOINT = `${API.characters}${hash}`;

  const response = await fetchWithRetry(ENDPOINT);
  const results = await response.json();

  // Una sola petición con todos los IDs
  const episodeIds = results.episode.map((url) => url.split('/').pop());
  //   episodeIds = [1,2,3,4,] : episode/1,2,3,4,5,...
  const response2 = await fetchWithRetry(
    `${API.episodes}${episodeIds.join(',')}`
  );
  const episodes = await response2.json();
  // si es un solo episodio devuelve objeto, si son varios devuelve array
  const episodeList = Array.isArray(episodes) ? episodes : [episodes];

  const view = `
<div class="min-h-screen bg-black px-4 font-mon py-5" id="div-character">
    <div class="max-w-6xl mx-auto mb-10 flex justify-between">
        <a href="src/pages/characters/" class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/60 bg-white/13 backdrop-blur-sm
  hover:border-white/25
  transition-all duration-300" transition-all duration-200 text-sm backdrop-blur-sm ">
                        <span class=" group-hover:-translate-x-1 transition-transform duration-200 ">←</span>
Personajes
                        </a>
                </div>
                <div class=" max-w-6xl mx-auto ">
                    <div class=" grid grid-cols-1 lg:grid-cols-12 gap-0 ">
                        <div class=" lg:col-span-4 relative overflow-hidden border-b lg:border-b-0 lg:border-r
            border-gray-900 transition-all duration-1900 cursor-pointer" style="min-height: 280px;">
            <img src="${results.image}" alt=""
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
                    <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">NOMBRE</span>
                    <div class="mb-2 overflow-hidden">
                        <h1
                            class="text-[clamp(2rem,3vw,8rem)] font-black text-white leading-none tracking-tighter uppercase mix-blend-difference">
                            ${results.name}
                        </h1>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">Status</span>

                        <div class="flex items-center gap-2">
                            <span class="relative flex w-1.5 h-1.5">
                                ${results.status}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">Species</span>
                        <span class="text-sm text-white font-bold">
                            ${results.species}
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">
                            GÉNERO
                        </span>
                        <span class="text-sm text-white font-bold">
                            ${results.gender}
                        </span>
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">TIPO</span>
                        <span class="text-sm text-white font-bold">
                            ${results.type || 'Desconocido'}
                        </span>
                    </div>

                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">ORIGEN</span>
                        <span class="text-sm text-white font-bold leading-snug">
                            ${results.origin.name}
                        </span>
                    </div>

                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] text-gray-300 tracking-[0.3em] uppercase">UBICACIÓN</span>
                        <span class="text-sm text-white font-bold leading-snug">
                            ${results.location.name}
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="">
                        <p class="text-[10px] text-gray-300 tracking-[0.3em] uppercase mb-1">
                            APARICIONES
                        </p>
                        <p class="text-7xl font-black text-white leading-none">
                            ${results.episode.length}</p>
                        <p class="text-[10px] text-gray-300 tracking-[0.2em] uppercase mt-1">
                            EPISODIOS
                        </p>
                    </div>
                    <div class="lg:hidden">
                        <p class="text-[10px] text-gray-300 tracking-[0.3em] uppercase mb-1">FOTO
                        </p>
                        <img src="${results.image}" alt="" class="w-20 h-auto object-cover rounded-lg" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:col-span-4 bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden">
        <div class="px-7 py-3 border-b border-white/10 flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-widest text-gray-300">APARICIONES
                -
                EPISODIOS</span>
            <span class="text-xs text-gray-300">

            </span>
        </div>
        <div id="res" class="overflow-y-auto"
            style="max-height: 350px; scrollbar-color: #333 transparent; scrollbar-width: thin;">

            ${episodeList
              .map((ep) => {
                return `
            <a
                class="group flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors duration-200 font-semibold">
                <div style="animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 100 * 100ms"
                    class="flex items-center gap-3 px-4 py-3  transition-colors duration-150 border-b border-white/5 last:border-0">
                    <div class="relative shrink-0">
                        <img loading="lazy" src="/images/episodes/episode-${ep.id}.jpg" alt="" alt=""
                            class="w-10 h-10 object-cover rounded-full ring-1 ring-white/10" />
                    </div>
                    <div class="min-w-0">
                        <p class="text-sm font-medium text-white truncate leading-tight">${ep.name}</p>
                        <p class="text-xs text-gray-300 truncate">${ep.episode} </p>
                    </div>
                    <div class="ml-auto text-xs text-gray-600 font-mono tracking-wide">
            </a>
        </div>
    </div>
    `;
              })
              .join('')}


</div>
</div>
</div>
</div>
</div>
`;
  return view;
};
