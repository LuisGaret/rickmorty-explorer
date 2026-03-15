import { errorFetch } from '../components/messageFetch.js';
// funcion para limitar las peticiones del usuario en la API

export async function fetchWithRetry(url, retries = 6, delay = 4000) {
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
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      const messages = [
        `*BURP*... la API está colapsada, eso pasa cuando eres demasiado popular en el multiverso. Espera un momento mientras recalibro el portal...`,
        `Ay no, ay no, ay no... Rick dijo que esto no iba a pasar pero aquí estamos, el servidor está completamente caído. Por favor espera...`,
        `Los Ricks del Consejo han detectado una sobrecarga interdimensional en los servidores C-137. Estamos recalibrando los portales, esto tomará un momento...`,
        `El Consejo de Ricks ha bloqueado temporalmente tus peticiones por exceso de solicitudes. Típico de ellos, siempre controlando todo. Reintentando en un momento...`,
        `Morty, escucha, a veces la ciencia falla y los servidores también.bueno, técnicamente lo fue en la dimensión 35-C pero eso es otra historia. Reintentando...`,
        `*BURP* ...el Señor Meeseeks no puede arreglar un error 429 Morty, nadie puede. Tenemos que esperar como simples mortales mientras el servidor se recupera...`,
        `Interdimensional Cable está transmitiendo demasiados datos y colapsó el servidor. Bird Person lo predijo pero nadie le hizo caso. Reintentando la conexión...`,
        `Rick aquí, y escucha bien porque solo lo diré una vez: demasiadas peticiones al servidor. Estoy trabajando en ello desde mi laboratorio, dame un segundo...`,
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
