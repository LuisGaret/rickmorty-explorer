import { contentPagination } from './contentPagination';
import { fetchWithRetry } from '../utils/fetchWithRetry';
import imgRick from '../../public/images/home/home-bg.jpg';
import { API } from '../utils/APIS';

function getPage() {
  const hash = window.location.hash;
  const name = hash.split('=');
  if (name[0] === '#?name') {
    const url = hash.replace('#?name=', '');
    return url || 1;
  } else {
    const url = hash.replace('#?page=', '');
    return Number(url) || 1;
  }
}

// pagination
function pagination(info) {
  const next = info.next ? info.next.split('/') : null;
  const nextPage = next ? next[5] : null;

  const prev = info.prev ? info.prev.split('/') : null;
  const prevPage = prev ? prev[5] : null;

  document.querySelector('.pagination').innerHTML = contentPagination(
    'characters',
    prevPage,
    nextPage,
    info.pages,
    getPage()
  );
}

// section del html
const section = document.querySelector('section');

// funcion para crear la card de cada personaje
function crearCharacters(character) {
  // card
  const card = document.createElement('article');
  card.addEventListener('click', () => {
    window.location.href = `/src/pages/character/#?id=${character.id}`;
  });
  card.style =
    'animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay:100ms';
  card.title = `View: ${character.name}`;
  card.className = `group relative flex flex-col rounded-xl overflow-hidden border border-gray-800/80 bg-gray-900/60 backdrop-blur-sm hover:border-green-400/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer`;
  // divs imagen
  const divImg = document.createElement('div');
  divImg.className = 'relative overflow-hidden aspect-square';
  divImg.innerHTML = `
        <img
          loading="lazy"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 saturate-90"
          alt="${character.name}" 
          src="${character.image || imgRick}" 
          onerror="setTimeout(() => { if(!this.dataset.retried){ this.dataset.retried='1'; this.src=this.src; } else { this.src='${imgRick}'; } },1000)"          />
        <div class="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/10 to-transparent"></div>
  `;

  // div
  const divSpans = document.createElement('div');
  divSpans.className = 'flex flex-col gap-1 px-4 pt-3 pb-4';
  divSpans.innerHTML = `
   <span class="font-bold text-white tracking-wide truncate text-sm group-hover:text-green-50 transition-colors duration-200">
    ${character.name}
   </span>
   <span class="text-xs font-semibold text-green-400/80 tracking-widest uppercase group-hover:text-green-300 transition-colors duration-200">
    ${character.species}
   </span> 
  `;

  // inyectar
  card.append(divImg, divSpans);

  return card;
}

function renderCharacters(characters) {
  section.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (const character of characters) {
    const card = crearCharacters(character);
    fragment.appendChild(card);
  }
  section.appendChild(fragment);
}

export async function loadCharacters() {
  try {
    const page = getPage();
    const API_URL =
      typeof page === 'number'
        ? `${API.characters}?page=${page}`
        : `${API.characters}?name=${page}`;

    const response = await fetchWithRetry(API_URL);
    // si recibe null retorna
    if (!response) return;
    const { results, info } = await response.json();

    renderCharacters(results);
    pagination(info);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('hashchange', () => {
  loadCharacters();
});
