import '../styles/style.css';
import { contentMain } from '../components/contentMain';
import { hideLoader, loader } from '../utils/loaderSpin';
import { search } from '../utils/search';

function insertContent() {
  document.querySelector('main').innerHTML = contentMain();
}

window.addEventListener('DOMContentLoaded', () => {
  loader();
  insertContent();
  search();
});

window.addEventListener('load', () => {
  hideLoader();
});
