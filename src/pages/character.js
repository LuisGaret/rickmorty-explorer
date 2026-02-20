import { getData } from "../utils/getData";
import { getHash } from "../utils/getHash";

export const Character = async () => {

  const hash = getHash();
  const routeArray = hash.split('/');
  const id = routeArray[2]
  const character = await getData(id);
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
              <div class=" lg:col-span-4 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-900 transition-all duration-1900 cursor-pointer"
                  style="min-height: 280px;">
                  <img src="${character.image}" alt="${character.name}"
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
                                  <span
                                      class="text-sm text-white font-bold leading-snug">${character.location.name}</span>
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
              <div class="lg:col-span-3 flex flex-col justify-center">
                  <div class="p-6 border-b border-gray-900 flex items-center justify-between gap-4">
                      <p class="text-xs text-gray-500 tracking-[0.3em] uppercase">EPISODES</p>
                      <span class="text-xs text-gray-500 font-mono">${character.episode.length} RECORDS</span>
                  </div>
                  <div class="overflow-y-auto flex-1"
                      style="max-height: 350px; scrollbar-color: #222 transparent; scrollbar-width: thin;">
                      <table class="w-full border-collapse">
                          <thead class="sticky top-0 bg-black z-10">
                              <tr>
                                  <th
                                      class="text-[10px] text-gray-500 tracking-[0.3em] uppercase px-4 py-3 border-b border-gray-900 font-normal">
                                      Ep.</th>
                                  <th
                                      class="text-[10px] text-gray-500 tracking-[0.3em] uppercase px-4 py-3 border-b border-gray-900 font-normal">
                                      Temp.</th>
                                  <th
                                      class="text-[10px] text-gray-500 tracking-[0.3em] uppercase px-4 py-3 border-b border-gray-900 font-normal">
                                      View.</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${character.episode.map((ep, index) => {
                              const epNumber = parseInt(ep.split('/').pop());
                              const season = Math.ceil(epNumber / 10);
                              const epInSeason = epNumber - (season - 1) * 10;
                              return `
                              <tr class="text-center group border-b border-gray-900 hover:bg-gray-900 transition-colors duration-100">
                                  <td class="px-4 py-3 text-xs text-gray-200 font-mono">${String(epInSeason).padStart(2,
                                      '0')}</td>
                                  <td class="px-4 py-3 text-xs text-gray-200 font-mono">${season}</td>
                                  <td class="px-4 py-3 text-xs text-gray-200 font-mono"><a href="#/episode/${epNumber}">
                                          <span
                                              class="inline-flex items-center gap-1 text-gray-200 group-hover:text-gray-200 transition-colors hover:bg-gray-700 bg-gray-800 px-2 py-1 rounded"
                                              title="View episode">
                                              Visit
                                              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                                  viewBox="0 0 24 24" stroke="currentColor">
                                                  <circle cx="12" cy="12" r="10" stroke-width="2" />
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                              </svg>
                                          </span>
                                      </a></td>
                              </tr>
                              `;
                              }).join('')}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
`;
  return view;
} 