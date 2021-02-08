import heroes from '../data/heroes';
// console.log(heroes);

/* Version sin optimizar
    const getHeroeById = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id){
            return true;
        }
    });
} */

// Version optimizada
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) =>  heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroeByOwner('DC'));
