export const errorFetch = (content, response = false) => {
  const padre = document.querySelector('#alert');
  const hijo = document.querySelector('#fetchAlert');
  if (!response) {
    padre.classList.remove('hidden');
    document.querySelector('.pagination').classList.add('hidden');
  } else {
    padre.classList.add('hidden');
    document.querySelector('.pagination').classList.remove('hidden');
  }
  hijo.innerHTML = content;
};
