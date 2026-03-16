import { errorFetch, characterNotFound } from '../components/messageFetch.js';
// funcion para limitar las peticiones del usuario en la API

export async function fetchWithRetry(url, retries = 6, delay = 2000) {
  //   intenta 3 veces el lopp (retries)
  for (let i = 0; i < retries; i++) {
    // atrapar el error y reintenta en caso de status 429
    try {
      const response = await fetch(url);
      // si esta todo bien retornar
      if (response.ok) {
        errorFetch('success', true);
        return response;
      }

      //   si cae 429 esperar y reintentar
      if (response.status === 429) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        // multiplicar delay por cada loop
        delay *= 2;
      } else if (response.status === 404) {
        // borrar el hash de la ruta
        history.replaceState(null, '', window.location.pathname);
        characterNotFound();
        return null;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      const messages = [
        `*BURP*... la API colapsó, típico del multiverso. Recalibrando portal...`,
        `Servidor C-137 caído, Rick lo predijo pero nadie escuchó. Espera...`,
        `Sobrecarga interdimensional detectada por el Consejo. Reintentando...`,
        `El Consejo de Ricks bloqueó tus peticiones, siempre controlando todo. Reintentando...`,
        `Morty, a veces la ciencia falla y los servidores también. Reintentando...`,
        `*BURP*... ni el Señor Meeseeks puede arreglar un error 429. Esperando...`,
        `Interdimensional Cable saturó el servidor. Bird Person lo predijo. Reintentando...`,
        `Rick aquí, demasiadas peticiones al servidor. Trabajando en ello...`,
      ];
      console.warn(error);
      const message = messages[Math.floor(Math.random() * messages.length)];
      errorFetch(message);
      await new Promise((resolve) => setTimeout(resolve, delay));
      // multiplicar delay por cada loop
      delay *= 2;
    }
  }
  throw new Error('Demasiados Intentos');
}
