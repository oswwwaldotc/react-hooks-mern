// Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
//Desestruturacion o Asignacion desestructurante
const persona = {
    nombre: 'Oswaldo',
    edad: 22,
    clave: 'W'
};

// Elemento clave
const { nombre, edad, clave } = persona;

const uContextt = ({ clave, nombre, edad, rango = 'Dev', }) => {
    // console.log( nombre, edad, rango );
    return{
        nombreClave : clave,
        anios: edad,
        latlong: {
            lat: 17.1596,
            long: 18.1346
        }
    }
};

// En latlong buscamos solomante 2 propiedades
const {nombreClave, anios, latlong: { lat, long }} = uContextt(persona);
console.log(nombreClave, anios);
// Variable latlong no existe
console.log(lat, long);
