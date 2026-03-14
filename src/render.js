import './styles/style.css';
import { contentHeader } from './templates/header';
import { contentFooter } from './templates/footer';
import { characters } from './components/characters';
import { episodes } from './components/episodes';

function renderTemplates() {
  document.querySelector('header').innerHTML = contentHeader();
  document.querySelector('footer').innerHTML = contentFooter();
}

window.addEventListener('DOMContentLoaded', () => {
  renderTemplates();
  document.getElementById('contentEpisodes').innerHTML = episodes();
  document.getElementById('contentCharacters').innerHTML = characters();
});
