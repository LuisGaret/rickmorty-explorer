export const resultPagination = (pagination, result, page, i) => {
if (pagination) {
return `
<div class="flex justify-between items-center md:px-10 py-5">
  ${result.info.prev ? `
  <a href="#/${i}/${Number(page) - 1}"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
    Prev
  </a>
  ` : `
  <div
    class="px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-700 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
    ← Prev
  </div>
  `}
  ${result.info.next ? `
  <a href="#/${i}/${Number(page) + 1}"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    Next
    <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
  </a>
  ` : `
  <div
    class="px-5 py-2.5 rounded-lg border border-gray-800/40 bg-gray-900/20 text-gray-700 text-sm font-semibold tracking-widest uppercase cursor-not-allowed select-none">
    Next →
  </div>
  `}
</div>
`;
} else {
return ` 
<div class="flex justify-between items-center md:px-10 py-5">
  <a href="#/page/"
    class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:border-white transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
    <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
    All Characters
  </a>
</div>
`;
}
}

