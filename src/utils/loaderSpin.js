export const loader = () => {
  const loader = document.createElement('div');
  loader.classList.add(
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

  loader.appendChild(spinner);
  document.body.prepend(loader);
};

export function spinLoader() {
  const loader = document.querySelector('.loader');
  const spinner = document.querySelector('.loading');

  loader.classList.add('hidden');
  spinner.classList.add('hidden');
}
