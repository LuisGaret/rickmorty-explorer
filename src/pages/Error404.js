export const Error404 = () => {

  let seconds = 12

  const countTime = setInterval(() => {
    seconds--;
    document.getElementById("cont").innerHTML = seconds;
    if (seconds <= 0) {
        clearInterval(countTime);
    }
  }, 1000);

  const view = `
  <div class="animate-fadeUp  bg-black px-4 font-mon py-5">  
  <div class="max-w-6xl mx-auto mb-10">
        <button onClick="window.location.href='/'" 
            class="cursor-pointer group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-green-400 transition-all duration-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm w-50">
            <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back
        </button>
    </div>
    <div class=" flex flex-col items-center justify-center px-6 gap-8">
        <div class="text-center space-y-2 max-w-sm">
            <p class="text-[10px] text-red-400/80 tracking-[0.4em] uppercase font-bold">Portal roto · Error 404</p>
            <h2 class="text-5xl font-black text-white tracking-tighter leading-tight">
                Dimensión<br />no encontrada
            </h2>

            <p class="text-2xs text-green-500 leading-relaxed pt-1">
                Se te redigirá en <span id="cont">12</span> segundos <br>
            </p>
        </div>
    </div>
</div>
    <style>
      #charactersLink {
        color: red !important;
      }
      #charactersLink span{
        width: 100% !important;
        background-color: red !important;
      }
    </style>
        `;

    setTimeout(() => {
        window.location.href="#/characters/"
    }, 12000);

    return view;
}