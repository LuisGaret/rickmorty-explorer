# Rick & Morty Explorer 

Una aplicación web interactiva para explorar personajes, episodios y ubicaciones del universo de Rick y Morty, construida con tecnologías modernas.

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

##  Stack Tecnológico

- **Frontend Framework**: Vanilla JavaScript (SPA)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)

##  Instalación

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

##  Estructura del Proyecto

```
public
├── images/                 # Imágenes estáticas 
│   ├── episodes
src/
├── main.js                 # Punto de entrada
├── pages/                  # Vistas principales
│   ├── home.js
│   ├── characters.js
│   ├── character.js
│   ├── episodes.js
│   ├── episode.js
│   └── Error404.js
├── routes/
│   └── index.js           # Router SPA
├── templates/             # Componentes reutilizables
│   ├── header.js
│   └── footer.js
├── utils/                 # Funciones auxiliares
│   ├── getCharacters.js   # Fetch de personajes
│   ├── getEpisodes.js     # Fetch de episodios
│   ├── getHash.js         # Manejo de rutas
│   ├── resolveRoutes.js   # Resolución de rutas
│   ├── pagination.js      # Componente de paginación
│   ├── homeSearch.js      # Búsqueda en home
│   ├── scroll.js          # Desplazamiento suave
│   └── numRandom.js       # Utilidad de números aleatorios
└── styles/
    └── style.css          # Estilos globales
```

##  Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/characters/` | Lista de personajes (paginada) |
| `/character/:id` | Detalle de un personaje |
| `/episodes/` | Lista de episodios |
| `/episode/:id` | Detalle de un episodio |
| `/search/:name` | Búsqueda de personajes |
| `/page/:id` | Paginación de personajes |

##  Características Principales

### Sistema de Rutas
El router SPA utiliza hash navigation para navegación sin recarga de página. Ver [`resolveRoutes`](src/utils/resolveRoutes.js).

### Caché Inteligente
Las funciones [`getCharacters`](src/utils/getCharacters.js) y [`getEpisodes`](src/utils/getEpisodes.js) implementan caché con manejo de rate limiting.

### Animaciones
- Animaciones de aparición de tarjetas con retraso escalonado
- Transiciones suaves al navegar
- Efectos hover interactivos

### Búsqueda
La [`homeSearch`](src/utils/homeSearch.js) permite buscar personajes desde la página de inicio.

##  Diseño Visual

- **Tema**: Oscuro con acentos verde neón (#4ade80)
- **Tipografía**: Fuentes personalizadas con tracking mejorado
- **Glass Morfismo**: Efectos de vidrio translúcido
- **Grid Responsive**: Columnas adaptables según el tamaño de pantalla

## 📱 Responsividad

La aplicación es completamente responsiva:
- **Mobile**: Grid de 2 columnas
- **Tablet**: Grid de 3 columnas
- **Desktop**: Grid de 5 columnas (personajes) / 4 columnas (episodios)

##  Componentes Clave

| Componente | Descripción |
|------------|------------|
| [Header](src/templates/header.js) | Navegación principal con búsqueda |
| [Footer](src/templates/footer.js) | Pie de página con créditos |
| [Pagination](src/utils/pagination.js) | Controles de paginación |
| [scroll](src/utils/scroll.js) | Desplazamiento suave a detalles |

##  Configuración Vite

Ver [`vite.config.js`](vite.config.js) para la configuración de plugins y build.

##  Dependencias

```json
{
  "devDependencies": {
    "vite": "^7.3.1",
    "prettier": "^3.8.1"
  },
  "dependencies": {
    "tailwindcss": "^4.1.18",
    "@tailwindcss/vite": "^4.1.18",
    "nprogress": "^0.2.0"
  }
}
```

##  Autor

**Marco Antonio Evangelista Armenta**  
[@MarkoEv](https://github.com/MarkoEv)

##  Licencia

Todos los derechos reservados © 2026

## 🔗 Enlaces Útiles

- [Rick and Morty API](https://rickandmortyapi.com/)
- [Documentación de Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

