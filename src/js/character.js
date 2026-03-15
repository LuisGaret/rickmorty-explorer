import '../styles/style.css';
import { contentCharacter } from '../components/contentCharacter';
import { hideLoader, loader } from '../utils/loaderSpin';

function InsertContent() {
  document.querySelector('main').innerHTML = contentCharacter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  hideLoader();
});
