import '../styles/style.css';
import { contentCharacter } from '../components/contentCharacter';
import { contentHeader } from '../components/contentHeader';
import { hideLoader, loader } from '../utils/loaderSpin';
import { search } from '../utils/search';

async function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
  document.querySelector('main').innerHTML = await contentCharacter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  search();

  hideLoader();
});
