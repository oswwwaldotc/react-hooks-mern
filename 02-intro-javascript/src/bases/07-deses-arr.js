const frutas = ['fresa', 'platano', 'melon'];
// Tip: f2 en VS Code para cambiar el nombre de una variable
// Mostramos 3 elemento que es 'melon'
const [ , , frutaLista ] = frutas;
console.log( frutaLista );

// Ahora con arreglos
const retornaArreglo = () => {
    return ['ABCDEF', 41652];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const uStatex = (valor) => {
    return [ valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre ]= uStatex('Oswaldo');
console.log(nombre);
setNombre();
