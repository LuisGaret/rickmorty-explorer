import { contentPagination } from '../components/contentPagination';

export const contentEpisodes = () => {
  return /* html */ `
    ${contentPagination()}
    <div class="bg-gray-950 font-sans py-8">
      <div class="grid grid-cols-3 gap-4 px-8 lg:px-16 pb-16">

        <div
          class="group relative block overflow-hidden rounded-xl
          border border-white/4 transition-all duration-500
          hover:-translate-y-2" style="animation: cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; animation-delay:100ms">
          <div class="relative overflow-hidden" style="aspect-ratio: 16/9;">

            <img
              class="w-full h-full object-cover transition-all duration-700 ease-out"
              alt=""
              loading="lazy"
              src="/images/episodes/episode-1.jpg"
            />

            <div
              class="absolute inset-0 bg-linear-to-t
              from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent
              pointer-events-none"
            ></div>

            <div
              class="absolute inset-0 bg-linear-to-br
              from-white/3 to-transparent opacity-0
              group-hover:opacity-100 transition-opacity duration-500
              pointer-events-none"
            ></div>

            <div
              class="absolute -bottom-1 -right-1 font-black leading-none
              select-none pointer-events-none text-[4rem]
              text-white/30 group-hover:text-white/80
              transition-all duration-700 tracking-tighter"
              style="font-variant-numeric: tabular-nums"
            >
            02
            </div>
            <div
              class="absolute inset-0 pointer-events-none opacity-[0.02]"
              style="background-image: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.5) 2px,
                rgba(255,255,255,0.5) 3px
              )"
            ></div>
          </div>
          <div class="px-3 py-3">

            <div
              class="h-px w-full mb-2.5"
              style="background: linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.08) 40%,
                rgba(255,255,255,0.12) 50%,
                rgba(255,255,255,0.08) 60%,
                transparent
              )"
            ></div>

            <h3
              class="text-white/90 text-[12px] font-semibold leading-snug
              truncate mb-1.5 group-hover:text-white
              transition-colors duration-300 tracking-tight"
              style="font-feature-settings: 'ss01' 1"
            >name</h3>

            <div
              class="flex justify-between items-center gap-1.5
              text-[9px] text-white/25 group-hover:text-white/35
              transition-colors duration-300 tracking-wide
              uppercase font-medium"
            >

              <span class="flex items-center gap-1">
                <svg
                  class="w-2.5 h-2.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                22 min
              </span>
              <span>1</span>
            </div>
          </div>
          <div
            class="absolute inset-0 rounded-xl pointer-events-none
            overflow-hidden opacity-0 group-hover:opacity-100
            transition-opacity duration-500"
          >
            <div
              class="absolute -top-full left-0 right-0 h-full
              bg-linear-to-b from-transparent via-white/2.5
              to-transparent group-hover:translate-y-[200%]
              transition-transform duration-1000 ease-out"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `;
};
