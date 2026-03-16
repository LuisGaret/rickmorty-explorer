# Rick & Morty Explorer V.2

Una aplicación web MPA construida con JavaScript vanilla, HTML, Tailwind CSS, DaysiUI y Vite, que consume la Rick and Morty API para explorar personajes y episodios.

# Demo en vivo

[rickmorty-explorer-iota.vercel.app](https://rickmorty-explorer-iota.vercel.app/)

## Características

- **Exploración de Personajes**: Navega por todos los personajes de la serie con información detallada
- **Catálogo de Episodios**: Descubre todos los episodios con descripciones y participantes
- **Búsqueda Avanzada**: Busca personajes por nombre en tiempo real
- **Paginación**: Navega fácilmente a través de los resultados
- **Diseño Responsivo**: Interfaz moderna y adaptable a todos los dispositivos
- **Animaciones Fluidas**: Transiciones elegantes con Tailwind CSS
- **Caché Inteligente**: Optimización de solicitudes API para mejor rendimiento

## Stack Tecnológico

- **Frontend Framework**: Vanilla JavaScript (SPA)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)
- **Templates**: [DaisyUI](https://daisyui.com/)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MarkoEv/rickmorty-explorer.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview de la build
npm run preview
```

## Estructura del Proyecto

```
rickmorty-explorer/
├── index.html      #Página Principal
├── public/
│   └── images/
│       ├── episodes/
│       ├── home/
│       └── icons/
└── src/
    ├── components/
    │   ├── asideContente.js
    │   ├── contentCharacter.js
    │   ├── contentCharacters.js
    │   ├── contentEpisodes.js
    │   ├── contentFooter.js
    │   ├── contentHeader.js
    │   ├── contentMain.js
    │   ├── contentPagination.js
    │   └── messageFetch.js
    ├── js/
    │   ├── character.js
    │   ├── characters.js
    │   ├── episodes.js
    │   └── main.js
    ├── pages/
    │   ├── character/
    │   │   └── index.html
    │   ├── characters/
    │   │   └── index.html
    │   └── episodes/
    │       └── index.html
    ├── styles/
    │   └── style.css
    └── utils/
        ├── APIS.js
        ├── fetchWithRetry.js
        ├── loaderSpin.js
        └── search.js
```

## Rutas Disponibles

| Ruta                | Descripción                    |
| ------------------- | ------------------------------ |
| `/`                 | Página de inicio               |
| `/characters/`      | Lista de personajes (paginada) |
| `/character/#?id=`  | Detalle de un personaje        |
| `/episodes/#?page=` | Lista de episodios             |
| `/search/#?name=`   | Búsqueda de personajes         |
| `/page/#?page=`     | Paginación de personajes       |

## Características Principales

### Animaciones

- Animaciones de aparición de tarjetas con retraso escalonado
- Transiciones suaves al navegar
- Efectos hover interactivos
- Loader inteligente para detectar retrasos

### Búsqueda

La función [`search`](src/utils/search.js) permite buscar personajes desde la página de inicio.

## Diseño Visual

- **Tema**: Oscuro con acentos verde neón (#4ade80)
- **Tipografía**: Fuentes personalizadas con tracking mejorado
- **Glass Morfismo**: Efectos de vidrio translúcido
- **Grid Responsive**: Columnas adaptables según el tamaño de pantalla

## 📱 Responsividad

La aplicación es completamente responsiva:

- **Mobile**: Grid de 2 columnas
- **Tablet**: Grid de 3 columnas
- **Desktop**: Grid de 5 columnas (personajes) / 4 columnas (episodios)

## Componentes Clave

| Componente                            | Descripción                       |
| ------------------------------------- | --------------------------------- |
| [Header](src/templates/header.js)     | Navegación principal con búsqueda |
| [Footer](src/templates/footer.js)     | Pie de página con créditos        |
| [Pagination](src/utils/pagination.js) | Controles de paginación           |
| [scroll](src/utils/scroll.js)         | Desplazamiento suave a detalles   |

## Configuración Vite

Ver [`vite.config.js`](vite.config.js) para la configuración de plugins y build.

## Dependencias

```json
"devDependencies": {
    "prettier": "^3.8.1",
    "vite": "^7.3.1"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "daisyui": "^5.5.19",
    "sharp": "^0.34.5",
    "tailwindcss": "^4.1.18"
  }
```

## Licencia

MIT Licence

## Autor

**Marco Antonio Evangelista Armenta**  
[@MarkoEv](https://github.com/MarkoEv)
