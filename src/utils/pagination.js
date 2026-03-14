export const resultPagination = (pagination, result, page, i) => {
  if (pagination) {
    return `
<div class="flex justify-between items-center px-8 md:px-10  lg:px-16 py-2">
  ${
    result.info.prev
      ? `
  <a href="#/${i}/${Number(page) - 1}"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
    Anterior
  </a>
  `
      : `
  <div
    class="px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-700 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
    ← Anterior
  </div>
  `
  }
    <button class="hidden md:block lg:block px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-600 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
    PAG ${page} DE ${result.info.pages}
  </button>
  ${
    result.info.next
      ? `
  <a href="#/${i}/${Number(page) + 1}"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    Siguiente
    <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
  </a>
  `
      : `
  <div
    class="px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-700 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
    Siguiente →
  </div>
  `
  }
</div>
`;
  } else {
    return ` 
<div class="flex justify-between items-center md:px-10 py-5">
  <a href="#/page/"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
    Todos Los Personajes
  </a>
</div>
`;
  }
};
