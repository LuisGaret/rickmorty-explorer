export const contentFooter = () => {
  return `
        <div class="max-w-5xl mx-auto px-6 py-5 flex flex-col items-center gap-6">
            <div class="w-full h-px bg-[linear-gradient(to_right,transparent,#4ade8020,transparent)] md:hidden"></div>

            <div class="w-full h-px bg-[linear-gradient(to_right,transparent,#4ade8020,transparent)] md:hidden"></div>
            <a href="/" class="flex items-center gap-3 no-underline">
                <img src="images/icons/logo60x60.png" alt="Logo" class="w-10 h-10 object-contain">
                <div class="flex flex-col leading-tight">
                    <span class="text-xl font-black text-white tracking-tighter">RICK & MORTY</span>
                    <span class="text-sm font-bold text-green-400 tracking-[0.3em] uppercase">Explorer</span>
                </div>
            </a>
            <p class="text-[10px] text-gray-500 tracking-widest uppercase">
                @2026 - Created by
                <a href="https://github.com/MarkoEv" target="_blank"
                    class="text-green-400 hover:text-gray-500 transition-colors">
                    @MarkoEv</a>
                - All rights reserved. <br>
            </p>
        </div>
        </div>
    `;
};
