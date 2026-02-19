export const getHash = () => 
    location
    .hash
    .slice(1)
    .toLocaleLowerCase() || '/';

