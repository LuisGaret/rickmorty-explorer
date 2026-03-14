import '../styles/style.css';
import { contentMain } from '../components/contentMain';
import { spinLoader, loader } from '../utils/loaderSpin';

function insertContent() {
  document.querySelector('main').innerHTML = contentMain();
}

window.addEventListener('DOMContentLoaded', () => {
  loader();
  insertContent();
});

window.addEventListener('load', () => {
  spinLoader();
});
