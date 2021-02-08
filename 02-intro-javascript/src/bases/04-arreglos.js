// Un arreglo tambien es considerado un onjeto en JS
const arreglo_x = [1,2,3,4];
let arreglo_y = [...arreglo_x, 5];

// Callback se llama desde una misma funcion
const arreglo_z = arreglo_y.map( function(numero){
    return numero * 2;
});

console.log( arreglo_x );
console.log( arreglo_y );
console.log( arreglo_z );
