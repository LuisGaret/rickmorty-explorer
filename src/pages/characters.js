import { getHash } from "../utils/getHash";
import { getData } from "../utils/getData";
import { NumRandom } from "../utils/numRandom";
import { Error404 } from "./Error404";

export const Characters = async () => {

  const hash = getHash();
  const routeArray = hash.split('/');
  const page = routeArray[2] || NumRandom();
  const search = routeArray[1] === "search" ? routeArray[2] : null;

  let characters;
  let pagination;

  if (search) {
    characters = await getData(`?name=${search}`);
    pagination = false;
  } else {
    characters = await getData(`?page=${page}`);
    pagination = true;
  }

  if (!characters?.results) {
    return Error404();
  }

  const resultPagination = () => {
    if (pagination) {
return `
 <div class="flex justify-between items-center md:px-10 py-5">
    ${characters.info.prev ? `
    <a href="#/page/${Number(page) - 1}"
        class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-green-400 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
        <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
        Prev
    </a>
    ` : `
    <div
        class="px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-700 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
        ← Prev
    </div>
    `}
    ${characters.info.next ? `
    <a href="#/page/${Number(page) + 1}"
        class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-green-400 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
        Next
        <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
    </a>
    ` : `
    <div
        class="px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-700 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
        Next →
    </div>
    `}

</div>
`;
    } else {
      return ``;
    }
  }
  const view = `
  <div class="min-h-screen bg-black  font-mono">
    ${resultPagination()}
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4  lg:m-10 min-h-screen">
        ${characters.results.map(character => `
        <a href="#/character/${character.id}"
            class="group relative flex flex-col rounded-xl overflow-hidden border border-gray-800/80 bg-gray-900/60 backdrop-blur-sm hover:border-green-400/40 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1.5">
            <div
                class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>
            <div class="relative overflow-hidden aspect-square">
                <img class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 saturate-90"
                    alt="${character.name}" src="${character.image}" />
                <div class="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/10 to-transparent"></div>
                <div
                    class="absolute top-2 right-2 w-7 h-7 rounded-full border border-green-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-green-400/70">
                    <div class="w-2 h-2 rounded-full bg-green-400/60 group-hover:animate-ping"></div>
                </div>
            </div>
            <div class="flex flex-col gap-1 px-4 pt-3 pb-4">
                <span
                    class="font-bold text-white tracking-wide truncate text-sm group-hover:text-green-50 transition-colors duration-200">${character.name}</span>
                <span
                    class="text-xs font-semibold text-green-400/80 tracking-widest uppercase group-hover:text-green-300 transition-colors duration-200">${character.species}</span>
                <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-800/80">
                    <span class="text-xs text-gray-600 font-mono tracking-wider">#${character.id.toString().padStart(3,
                        '0')}</span>
                    <span
                        class="text-xs text-gray-500 group-hover:text-green-400 flex items-center gap-1 transition-all duration-300">
                        <span class="group-hover:translate-x-0.5 transition-transform duration-300">View</span>
                        <span class="group-hover:translate-x-1 transition-transform duration-300 delay-75">→</span>
                    </span>
                </div>
            </div>
            <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-[linear-gradient(to_right,transparent,rgba(16,185,129,0.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
        </a>
  `).join('')}
</div>
    `;
  return view;
}


