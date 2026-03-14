import '../styles/style.css';
import { contentCharacters } from '../components/contentCharacters';
import { contentHeader } from '../components/contentHeader';
import { contentFooter } from '../components/contentFooter';
import { spinLoader, loader } from '../utils/loaderSpin';

function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
  document.querySelector('main').innerHTML = contentCharacters();
  document.querySelector('footer').innerHTML = contentFooter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  spinLoader();
});
