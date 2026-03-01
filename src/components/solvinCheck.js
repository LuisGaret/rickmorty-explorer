import { getHash } from "../utils/getHash";
import { resolveRoutes } from "../utils/resolveRoutes";

function okRuta() {
    let hash = getHash();
    let route = resolveRoutes(hash)
    
    if (route === "/characters/") return window.location.href="#/characters";
    if (route === "/episodes/") return window.location.href="#/episodes";
    if (route === "/episodes/:id") return window.location.reload();
    if (route === "/character/:id") return window.location.reload();
    if (route === "/search/:name") return window.location.href="#/characters";
}

export const solvinSpin = () => {
  const tagLi = document.getElementById("li-time");

  const view = `
          <div class="flex items-center justify-center"><button type="button"
          class="inline-flex cursor-not-allowed items-center rounded-md px-2 py-2 text-sm leading-6 font-semibold text-white transition duration-150"
          disabled="">
          <svg class="mr-2 size-5 animate-spin text-white" icon icon-tabler icons-tabler-outline icon-tabler-refresh" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
          </div>
      </div>
    `;

  tagLi.innerHTML = view
  document.querySelector("main").classList.add("animate-pulse");
  const setTime = setInterval(() => {
    okRuta()
    tagLi.innerHTML = "";
    document.querySelector("main").classList.remove("animate-pulse");
    window.location.reload()
    
    if (setTime) {
      clearInterval(setTime)
    }
  }, 12000);  
   
      
}