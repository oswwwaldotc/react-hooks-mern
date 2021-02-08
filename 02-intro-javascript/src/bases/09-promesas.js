// Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
// Es de caracter asincrono que puede estar disponible ahora, futuro o nunca

import {getHeroeById} from "./bases/08-imp-exp"

/* const promesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
        const valor = getHeroeById(2);
        resolve(valor);
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const valor = getHeroeById(id);
            if(valor){
                resolve(valor);
            }
            reject('No encontrado');
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);
