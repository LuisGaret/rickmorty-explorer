import '../style.css'
import { Header } from "../templates/header";
import { Main } from "../templates/main";
import { footer } from "../templates/footer";

export const route = async () => {   
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main');

    
    header.innerHTML = await Header();
    main.innerHTML = await Main();

}