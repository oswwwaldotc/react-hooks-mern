// Se ordena por alfabeto las propiedades
// es una caracteristica nueva en el navegador

// Dictionary en otros lenguajes
const persona_uno = {
    nombre: 'Oswaldo',
    apellido: 'TC',
    edad: 22,
    direccion: { 
        ciudad: 'Nuevo Leon',
        zip: 8526354,
        lat: 18.0201,
        long: 19.0506
    }
};

// Spread operator
// Copiamos el objeto con sus propiedades
const persona_dos = { ...persona_uno };
persona_dos.nombre = 'Waldo';
persona_dos.edad = 18;

console.table(persona_uno);
console.table(persona_dos);
