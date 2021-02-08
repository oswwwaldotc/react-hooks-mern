const saludo = function(nombre){
    return `Hola ${nombre}`;
}

// Funcion flecha (arrow)
const saludito = (nombre) => {
    return `Hello ${nombre}`;
}

// Simplificando una funcion
const saludote = () => `Esto es posible`;

console.log(saludo('Normal'));
console.log(saludito('Nuevo'));
console.log(saludote());

// Ejercicio con arrow function y objeto implicito
const getUsuarioActivo = (nombre) => ({
        uid: 'XYZ',
        username: nombre 
});

const usuarioActivo = getUsuarioActivo('Oswaldo');
console.log(usuarioActivo);
