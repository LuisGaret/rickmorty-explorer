export const errorFetch = (content, response = false) => {
  const padre = document.querySelector('#alert');
  const hijo = document.querySelector('#fetchAlert');
  if (!response) {
    if (padre) {
      padre.classList.remove('hidden');
      document.querySelector('.pagination').classList.add('hidden');
    }
  } else {
    padre.classList.add('hidden');
    document.querySelector('.pagination').classList.remove('hidden');
  }
  if (hijo) {
    hijo.innerHTML = content;
  }
};

export const characterNotFound = () => {
  const toast = document.getElementById('alertNoFound');
  toast.classList.remove('hidden');
  toast.style.animation = 'cardReveal 0.3s cubic-bezier(0.22,1,0.36,1) both';

  const hide = () => {
    toast.style.animation = 'cardHide 0.3s cubic-bezier(0.22,1,0.36,1) both';
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  };

  toast.addEventListener('click', hide, { once: true });
  setTimeout(hide, 1800);
};
