import '../styles/style.css';
import { contentCharacter } from '../components/contentCharacter';
import { hideLoader, loader } from '../utils/loaderSpin';

async function InsertContent() {
  document.querySelector('main').innerHTML = await contentCharacter();
}

document.addEventListener('DOMContentLoaded', () => {
  loader();
  InsertContent();
});

window.addEventListener('load', () => {
  hideLoader();
});
