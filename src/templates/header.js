import rickymortyLogo from '../../public/icon.png';

export const Header = () => {
const view = `
<nav class="">
  <ul class="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 py-4 m-6">
    <li>
      <a href="/" class="flex items-center gap-3 no-underline">
        <img src="${rickymortyLogo}" alt="Logo" class="w-10 h-10 object-contain">
        <div class="flex flex-col leading-tight">
          <span class="text-xl font-black text-white tracking-tighter">RICK & MORTY</span>
          <span class="text-sm font-bold text-green-400 tracking-[0.3em] uppercase">Explorer</span>
        </div>

      </a>
    </li>
    <li>
      <a href="/"
        class="group py-1 lg:text-lg text-sm-link md:text-md relative px-1 font-semibold text-gray-400 hover:text-green-400 transition-colors duration-200 tracking-widest uppercase">
        Characters
        <span
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href="/"
        class="group py-1 lg:text-lg text-sm-link md:text-md relative px-1 font-semibold text-gray-400 hover:text-green-400 transition-colors duration-200 tracking-widest uppercase">
        Seasons
        <span
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href="/"
        class="group py-1 lg:text-lg text-sm-link md:text-md relative px-1 font-semibold text-gray-400 hover:text-green-400 transition-colors duration-200 tracking-widest uppercase">
        Episodes
        <span
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
      </a>
    </li>
    <li>
      <div class="max-w-6xl mx-auto">
        <div
          class="flex items-center border border-gray-700 bg-gray-900/60 rounded-xl overflow-hidden focus-within:border-green-400/60 focus-within:shadow-lg focus-within:shadow-green-500/10 transition-all duration-300">
          <span class="pl-4 text-gray-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          
          <input id="searchInput" type="text" placeholder="Search character..."
            class="flex-1 md:w-20 lg:w-40 sm:w-40 bg-transparent text-gray-200 placeholder-gray-500 px-3 py-3 text-sm outline-none" />
          <div class="w-px h-6 bg-gray-700 shrink-0"></div>
          
          <button id="searchButton"
            class="shrink-0 flex items-center gap-2 px-5 py-3 text-gray-400 hover:text-green-400 hover:bg-green-400/5 transition-all duration-200 text-sm font-semibold tracking-widest uppercase cursor-pointer">
            Search
          </button>
        
          </div>
      </div>
    </li>
  </ul>
</nav>
`;
return view;

}