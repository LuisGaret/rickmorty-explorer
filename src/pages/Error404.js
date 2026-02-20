export const Error404 = () => {
  const view = `
  <div class="min-h-screen bg-black px-4 font-mon py-5">  
  <div class="max-w-6xl mx-auto mb-10">
        <a href="#/"
            class="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-green-400 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm w-25">
            <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back
        </a>
    </div>
    <div class=" flex flex-col items-center justify-center px-6 gap-8">
    
        <div class="relative flex items-center justify-center">
            <div class="absolute w-48 h-48 rounded-full border border-red-500/10 animate-ping"
                style="animation-duration: 3s;"></div>
            <div class="absolute w-36 h-36 rounded-full border border-red-500/15"></div>
            <div class="absolute w-24 h-24 rounded-full border border-red-500/20"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                class="w-16 h-16 text-red-400/60" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M12 2 L10 7 L13 10 L9 14 L12 22" stroke="#f87171" stroke-width="1.2" stroke-dasharray="2 1" />
                <path d="M7 5 L10 9" stroke="#f87171" stroke-width="0.8" stroke-dasharray="1.5 1" />
                <path d="M17 7 L14 11" stroke="#f87171" stroke-width="0.8" stroke-dasharray="1.5 1" />
            </svg>
    
        </div>
        <div class="text-center space-y-2 max-w-sm">
            <p class="text-[10px] text-red-400/50 tracking-[0.4em] uppercase font-bold">Portal roto · Error 404</p>
            <h2 class="text-5xl font-black text-white tracking-tighter leading-tight">
                Dimensión<br />no encontrada
            </h2>
            <p class="text-2xs text-slate-600 leading-relaxed pt-1">
                Rick debe haber explotado el servidor otra vez.<br />Intenta regresar al universo correcto.
            </p>
        </div>
        <div class="flex items-center gap-3 w-full max-w-xs">
            <div class="flex-1 h-px bg-slate-800"></div>
            <span class="text-[10px] text-slate-700 tracking-widest uppercase">C-137</span>
            <div class="flex-1 h-px bg-slate-800"></div>
        </div>
    </div>
</div>
        `;
    return view;
}