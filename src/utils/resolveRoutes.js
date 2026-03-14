export const resolveRoutes = (route) => {

    const routeArray = route.split('/')
    
    if(route === '/') return '/';
    if(routeArray[1] === 'character') return '/character/:id';
    if(routeArray[1] === 'characters') return '/characters/';
    if(routeArray[1] === 'page') return '/page/:id';
    if(routeArray[1] === 'episodes') return '/episodes/';
    if(routeArray[1] === 'search') return '/search/:name';
    if(routeArray[1] === 'home') return '/';
    return `/`;
}

