import '../style.css'
import { Header } from "../templates/header";
import { main } from "../templates/main";
import { footer } from "../templates/footer";


export const route = async () => {   
    
    const header = null || document.querySelector('header');

    header.innerHTML = await Header();
}