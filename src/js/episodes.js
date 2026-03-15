import '../styles/style.css';
import { contentEpisodes } from '../components/contentEpisodes';
import { contentHeader } from '../components/contentHeader';
import { contentFooter } from '../components/contentFooter';
import { hideLoader, loader } from '../utils/loaderSpin';

function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
  document.querySelector('main').innerHTML = contentEpisodes();
  document.querySelector('footer').innerHTML = contentFooter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  hideLoader();
});
