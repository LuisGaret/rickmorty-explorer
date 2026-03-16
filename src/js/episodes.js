import '../styles/style.css';
import { contentHeader } from '../components/contentHeader';
import { contentFooter } from '../components/contentFooter';
import { hideLoader, loader } from '../utils/loaderSpin';
import { loadEpisodes } from '../components/contentEpisodes';
import { search } from '../utils/search';
import { asideContent } from '../components/asideContent';

function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  search();
  document.body.insertAdjacentHTML('afterbegin', asideContent());

  loadEpisodes().then(() => {
    hideLoader();
    document.querySelector('footer').innerHTML = contentFooter();
  });
});
