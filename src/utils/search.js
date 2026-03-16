import { characterNotFound } from '../components/messageFetch';
import { API } from './APIS';

export function search() {
  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');

  searchInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const name = searchInput.value.trim();
    if (!name) return;

    // verificar antes de redirigir
    const response = await fetch(`${API.characters}?name=${name}`);

    if (response.status === 404) {
      characterNotFound(); // mosttarr alerta
      return; // no redirir
    }

    // si existe, navegar
    window.location.href = `/src/pages/characters/#?name=${name}`;
  });

  //   click al bton
  searchButton.addEventListener('click', async () => {
    const name = searchInput.value.trim();
    if (!name) return;

    // verificar antes de redirigir
    const response = await fetch(`${API.characters}/?name=${name}`);

    if (response.status === 404) {
      characterNotFound(); // mosttarr alerta
      return; // no redirir
    }

    // si existe, navegar
    window.location.href = `/src/pages/characters/#?name=${name}`;
  });
}

// analityc en vercel
// se importó en este proyecto para evitar
// que se ejecute en otras páginas donde no es necesario
import { inject } from '@vercel/analytics';
inject();
