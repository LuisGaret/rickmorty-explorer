import { router } from "../routes";

export const homeSearch = (route, header, footerElement) => {
     if (route === '/') {
        header.classList.add('hidden');
        footerElement.classList.add('hidden');

        requestAnimationFrame(() => {
            const homeSearchInput = document.querySelector('#homeSearchInput');
            const homeSearchButton = document.querySelector('#homeSearchButton');

            homeSearchInput?.addEventListener('keyup', (e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                    location.hash = `#/search/${e.target.value.trim()}`;
                }
            });

            homeSearchButton?.addEventListener('click', () => {
                const value = homeSearchInput?.value.trim();
                if (value) location.hash = `#/search/${value}`;
            });
            spanFocusSearch(homeSearchInput);
        });
     }
}

function spanFocusSearch(homeSearchInput) {
    const spanFocusSearch = document.querySelector('#spanFocusSearch');
    if (spanFocusSearch) {
        spanFocusSearch.addEventListener('click', () => {
            homeSearchInput?.focus();
        });
    }
}

