import { contentPagination } from './contentPagination';
import { fetchWithRetry } from '../utils/fetchWithRetry';
import imgRick from '../../public/images/home/home-bg.jpg';

function getPage() {
  const hash = window.location.hash;
  const url = hash.replace('#?page=', '');
  return Number(url) || 1;
}

// pagination
function pagination(info) {
  const next = info.next ? info.next.split('/') : null;
  const nextPage = next ? next[5] : null;

  const prev = info.prev ? info.prev.split('/') : null;
  const prevPage = prev ? prev[5] : null;

  document.querySelector('.pagination').innerHTML = contentPagination(
    'episodes',
    prevPage,
    nextPage,
    info.pages,
    getPage()
  );
}

// section del html
const section = document.querySelector('section');

function crearEpisodes(episode) {
  const card = document.createElement('article');
  card.style =
    'animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay:100ms';
  card.title = `View: ${episode.name}`;
  card.className = `group relative flex flex-col rounded-xl overflow-hidden border border-gray-800/80 bg-gray-900/60 backdrop-blur-sm hover:border-green-400/20 transition-all duration-300 hover:-translate-y-1.5`;

  // imagen
  const divImg = document.createElement('div');
  divImg.className = 'relative overflow-hidden aspect-video';
  divImg.innerHTML = `
    <img loading="lazy"
      class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 saturate-90"
      alt="${episode.name}"
      src="/images/episodes/episode-${episode.id}.jpg"
      onerror="setTimeout(() => { if(!this.dataset.retried){ this.dataset.retried='1'; this.src=this.src; } else { this.src='${imgRick}'; } },1000)" />
    <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/10 to-transparent"></div>

  `;

  // info
  const divInfo = document.createElement('div');
  divInfo.className = 'flex flex-col gap-2 px-4 pt-3 pb-4';
  divInfo.innerHTML = `
    <span class="font-bold text-white tracking-wide truncate text-sm group-hover:text-green-50 transition-colors duration-200">
      ${episode.name}
    </span>
    <div class="flex items-center justify-between mt-1">
      <span class="text-[10px] text-gray-500 tracking-widest uppercase">
       ESTRENO: ${episode.air_date}
      </span>
      <span class="text-[10px] font-semibold text-white tracking-widest uppercase">
        ${episode.episode}
      </span>
    </div>
  `;

  card.append(divImg, divInfo);
  return card;
}
function renderEpisodes(Episodes) {
  section.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (const episode of Episodes) {
    const card = crearEpisodes(episode);
    fragment.appendChild(card);
  }
  section.appendChild(fragment);
}

export async function loadEpisodes() {
  try {
    const page = getPage();
    const API_URL = `https://rickandmortyapi.com/api/episode/?page=${page}`;

    const response = await fetchWithRetry(API_URL);
    // si recibe null retorna
    if (!response) return;
    const { results, info } = await response.json();

    renderEpisodes(results);
    pagination(info);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('hashchange', () => {
  loadEpisodes();
});
