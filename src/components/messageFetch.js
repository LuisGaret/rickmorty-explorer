export const errorFetch = (content, response = false) => {
  document.getElementById('alert')?.remove();

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <div id="alert"
     role="alert"
     aria-live="polite"
     class="toast toast-center toast-middle z-50 
            transition-all duration-500 
            opacity-90
          ">
  
  <div class="flex items-center justify-between gap-3
              bg-base-100 shadow-xl border border-success/80
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
<div
  id="alertNoFound"
  role="alert"
  aria-live="polite"
  class="toast toast-center toast-middle z-50
         pointer-events-none opacity-0
         transition-all duration-300 ease-out"
>
  <div class="flex items-center gap-3
              bg-base-100 border border-error/80
              shadow-lg rounded-xl px-4 py-3
              pointer-events-auto">

    <div class="shrink-0 w-8 h-8 rounded-full bg-error/10
                flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="w-4 h-4 text-error" viewBox="0 0 24 24"
           fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    </div>

    <span id="fetchAlert" class="text-sm font-medium text-base-content">
      Lo siento Morty, este personaje no existe
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
