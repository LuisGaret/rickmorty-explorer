import '../styles/style.css';
import { contentHeader } from '../components/contentHeader';
import { contentFooter } from '../components/contentFooter';
import { hideLoader, loader } from '../utils/loaderSpin';
import { loadCharacters } from '../components/contentCharacters';
import { search } from '../utils/search';

function InsertContent() {
  document.querySelector('header').innerHTML = contentHeader();
  document.querySelector('footer').innerHTML = contentFooter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  search();
  loadCharacters().then(() => {
    hideLoader();
  });
});
