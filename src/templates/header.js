import rickymortyLogo from './../assets/img/Rick_and_Morty.webp';

export const Header = () => {    
    const view = `
    <nav class="flex m-4 w-100% justify-center items-center">
        <ul class=" text-center items-center">
            <li class="">
                <a href="" class="">
                    <img src="${rickymortyLogo}" class="w-80">
                </a>
            </li>
            <li class="fontRick text-amber-50">
                 <a href="/">
                    Home
                </a>
            </li>
            <li class="fontRick text-amber-50">
                 <a href="#/about/">
                    About
                </a>
            </li>
        </ul>
    </nav>
    `;
    return view;

}

