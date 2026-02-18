import '../style.css'
import { Header } from "../templates/header";


export const route = async () => {   
    
    const header = null || document.querySelector('header');

    header.innerHTML = await Header();
}