import rickymortyLogo from '/images/icons/logo60x60.png';
import { imgQuality } from '../utils/imgQuality';

export const Home = () => {
  const view = `
<section class="py-6 relative min-h-screen overflow-hidden flex items-center" style="
  background-image:url('images/home/home-bg.jpg');
  background-size:cover;
  background-position:center;">
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]"></div>
  <div class="absolute inset-0 bg-black/75"></div>
  <div class="relative z-10 w-full px-6 lg:px-20">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
  <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 animate-fadeUp">
    <a href="#/home/" class="inline-flex items-center gap-3 group mb-8">
      <img src="${rickymortyLogo}"
       alt="logo "
       class="w-15 h-15 object-contain group-hover:scale-110 transition duration-300" />
      <div>
    <p class="text-xl font-black text-white">
      RICK & MORTY
    </p>
    <span class="text-[20px] tracking-[0.15em] uppercase font-bold text-green-400">
      Explorer
    </span>
      </div>
    </a>
    <h1 class="font-black leading-[0.9] text-white tracking-tight" style="font-size: clamp(1.7rem, 1vw, 1rem);">
      Viaja por el multiverso
    </h1>
    <p class="text-white/60 mt-6 text-sm leading-relaxed max-w-md">
      Explora personajes, episodios y realidades alternativas
      dentro del universo más impredecible de la televisión.
    </p>
    <div class="flex gap-3 mt-8">
      <!-- Card Personajes -->
      <a href="#/characters" class="group flex-1 flex flex-col gap-3 p-4 rounded-xl
  border border-white/10 bg-white/3 backdrop-blur-sm
  hover:border-white/25 hover:bg-white/[0.07]
  transition-all duration-300">
    <!-- Imagen preview -->
    <div class="w-full aspect-video rounded-lg overflow-hidden bg-black/40">
      <img src="/images/episodes/episode-default.${imgQuality()}" alt="Personajes" class="w-full h-full object-cover grayscale group-hover:grayscale-0
      scale-105 group-hover:scale-110 transition-all duration-500" />
      <div
        class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]">
      </div>
    </div>
    <!-- Info -->
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-0.5">
        <span
      class="text-sm font-black text-white/70 group-hover:text-white tracking-tight transition-colors duration-300">
      Personajes
        </span>
      </div>
      <span class="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5
    transition-all duration-300 text-lg leading-none">→</span>
    </div>
      </a>

      <!-- Card Episodios -->
      <a href="#/episodes" class="group flex-1 flex flex-col gap-3 p-4 rounded-xl
  border border-white/10 bg-white/3 backdrop-blur-sm
  hover:border-white/25 hover:bg-white/[0.07]
  transition-all duration-300">
    <!-- Imagen preview -->
    <div class="w-full aspect-video rounded-lg overflow-hidden bg-black/40">
      <img src="/images/episodes/episode-1.${imgQuality()}" alt="Episodios" 
      class="w-full h-full object-cover grayscale group-hover:grayscale-0
      scale-105 group-hover:scale-110 transition-all duration-500" />
      <div
        class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]">
      </div>
    </div>
    <!-- Info -->
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-0.5">
        <span
      class="text-sm font-black text-white/70 group-hover:text-white tracking-tight transition-colors duration-300">
      Episodios
        </span>
      </div>
      <span class="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-300 text-lg leading-none">→</span>
    </div>
      </a>
    </div>
  </div>
  <div class="flex flex-col gap-6 animate-fadeUp delay-100">
    <h2 class="text-white/80 text-sm uppercase tracking-[0.3em] font-bold text-center">
      Buscar personajes
    </h2>
    <div class="flex items-center gap-3
    bg-black/40 border border-white rounded-xl px-4">
      <svg class="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input id="homeSearchInput" type="text" placeholder="Escribe un nombre ..." class="flex-1 bg-transparent py-4 text-white
      placeholder-white/40 outline-none text-sm" />
      <button id="homeSearchButton"
    class="text-white hover:text-green-400 cursor-pointer font-bold text-lg transition">
    Buscar
      </button>
    </div>
    <div class="bg-black/40 border border-white/10 rounded-xl p-5">
      <p class="text-white/50 text-sm leading-relaxed">
    Usa la <span class="text-green-400 cursor-pointer" id="spanFocusSearch">barra de búsqueda</span> para encontrar cualquier personaje del universo de Rick & Morty
    y navega entre dimensiones.
      </p>
    </div>
  
    <div class="bg-black/40 border border-white/10 rounded-xl p-5">
      <p class="text-white/50 text-sm leading-relaxed">
    Creado por <a href="https://github.com/MarkoEv" target="_blank" class="text-green-400 hover:underline">
    @MarkoEv.</a> un proyecto para explorar la API de Rick & Morty.
      </p>
     </div>
      </p>
    </div>
  </div>
    </div>
  </div>
</section>
`;

  return view;
};
