import { characterNotFound } from '../components/messageFetch';

export function search() {
  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');

  searchInput.addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;

    const name = searchInput.value.trim();
    if (!name) return;

    // verificar antes de redirigir
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );

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
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );

    if (response.status === 404) {
      characterNotFound(); // mosttarr alerta
      return; // no redirir
    }

    // si existe, navegar
    window.location.href = `/src/pages/characters/#?name=${name}`;
  });
}
