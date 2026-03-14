import { getHash } from '../utils/getHash';
import { getCharacters } from '../utils/getCharacters';
import { resultPagination } from '../utils/pagination';

export const Characters = async () => {
  const hash = getHash();
  const routeArray = hash.split('/');
  const page = routeArray[2] || 15;
  const search = routeArray[1] === 'search' ? routeArray[2] : null;

  let characters;
  let pagination;

  if (search) {
    characters = await getCharacters(`?name=${search}`);
    pagination = false;
  } else {
    characters = await getCharacters(`?page=${page}`);
    pagination = true;
  }

  if (!characters?.results) {
    return (window.location.hash = '/');
  }

  const view = `
<div class="bg-[#0e0e0e] font-sans">
  ${resultPagination(pagination, characters, page, 'characters')}
  </div>
  <div class="mx-8 lg:mx-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-10"></div>
  <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4  lg:m-10 ">
    ${characters.results
      .map(
        (character, i) => `
    <a href="#/character/${character.id}" title="View: ${character.name}" style="animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay: ${i * 40}ms"
      class="group relative flex flex-col rounded-xl overflow-hidden border border-gray-800/80 bg-gray-900/60 backdrop-blur-sm hover:border-green-400/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
      <div
        class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
      </div>
      <div class="relative overflow-hidden aspect-square">
        <img
          loading="lazy"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 saturate-90"
          alt="${character.name}" src="${character.image || '/images/episodes/episode-default.jpg'}" />
        <div class="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/10 to-transparent"></div>
      </div>
      <div class="flex flex-col gap-1 px-4 pt-3 pb-4">
        <span
          class="font-bold text-white tracking-wide truncate text-sm group-hover:text-green-50 transition-colors duration-200">${character.name}</span>
        <span
          class="text-xs font-semibold text-green-400/80 tracking-widest uppercase group-hover:text-green-300 transition-colors duration-200">${character.species}</span>
      </div>
    </a>    
    `
      )
      .join('')}
    </div>
      ${resultPagination(pagination, characters, page, 'characters')}
    </div>
    <style>
      #charactersLink {
        color: #68D391 !important;
      }
      #charactersLink span{
        width: 100% !important;
      }
    </style>
  `;
  return view;
};
