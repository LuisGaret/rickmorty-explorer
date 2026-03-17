import '../styles/style.css';
import { contentCharacter } from '../components/contentCharacter';
import { contentFooter } from '../components/contentFooter';
import { contentHeader } from '../components/contentHeader';
import { hideLoader, loader } from '../utils/loaderSpin';
import { search } from '../utils/search';

async function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
  document.querySelector('main').innerHTML = await contentCharacter();
  document.querySelector('footer').innerHTML = document.querySelector(
    'footer'
  ).innerHTML = contentFooter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();a
  InsertContent();
});

window.addEventListener('load', () => {
  search();

  hideLoader();
});
