export const loader = () => {
  const loaderEl = document.createElement('div');
  loaderEl.classList.add(
    'loader',
    'flex',
    'items-center',
    'justify-center',
    'min-h-screen',
    'absolute',
    'z-20',
    'w-full',
    'bg-black/50'
  );
  const spinner = document.createElement('span');
  spinner.classList.add(
    'loading',
    'loading-spinner',
    'loading-xl',
    'text-green-400'
  );

  loaderEl.appendChild(spinner);
  document.body.prepend(loaderEl);
};

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  loader.classList.add('hidden');
}
