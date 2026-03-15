export const contentPagination = (prev, next, total) => {
  return `
  <a href="src/pages/characters/#${prev === null ? '?page=42' : prev}" id="prev"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
    Anterior
  </a>
  <button class=" px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-600 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-error">
      TOTAL DE PÁGINAS ${total}
  </button>
    <a href="src/pages/characters/#${next === null ? '?page=1' : next}" id="next"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    Siguiente
    <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
  </a>
  `;
};
