export const resolveRoutes = (route) => {

    const routeArray = route.split('/')
    
    if(route === '/') return '/';
    if(routeArray[1] === 'character') return '/character/:id';
    if(routeArray[1] === 'page') return '/page/:id';

    return `/`;
}

