import '../styles/style.css';
import { contentHeader } from '../components/contentHeader';
import { contentFooter } from '../components/contentFooter';
import { hideLoader, loader } from '../utils/loaderSpin';
import { loadEpisodes } from '../components/contentEpisodes';
import { search } from '../utils/search';

function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  search();
  loadEpisodes().then(() => {
    hideLoader();
    document.querySelector('footer').innerHTML = contentFooter();
  });
});
