export const errorFetch = (content, response = false) => {
  document.getElementById('alert')?.remove();

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <div id="alert"
     role="alert"
     aria-live="polite"
     class="toast toast-center toast-middle z-50 m-4
            transition-all duration-500
            opacity-90
          ">
  
  <div class="flex items-center justify-between gap-3
              bg-base-100 shadow-xl border border-base-300
              rounded-box px-5 py-3.5 
              hover:shadow-2xl transition-shadow">
    
    <span id="fetchAlert" 
          class="text-sm font-medium text-base-content">
    </span>
    <span class="loading loading-spinner loading-sm text-green-500"></span>
  </div>
</div>

    `
  );

  const padre = document.querySelector('#alert');
  const hijo = document.querySelector('#fetchAlert');
  if (!response) {
    if (padre) {
      padre.classList.remove('hidden');
    }
  } else {
    padre.classList.add('hidden');
  }
  if (hijo) {
    hijo.innerHTML = content;
  }
};

export const characterNotFound = () => {
  document.getElementById('alertNoFound')?.remove();

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <div id="alertNoFound"
     role="alert"
     aria-live="polite"
     class="toast toast-center toast-middle z-50 m-4">
  <div class="flex items-center justify-between gap-3
              bg-base-100 border border-base-300
              rounded-box px-5 py-3.5 
              ">
    
    <span 
          class="text-sm font-medium text-base-content">
          ❌
          No se encontró el personaje
    </span>
  </div>
</div>
`
  );

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
