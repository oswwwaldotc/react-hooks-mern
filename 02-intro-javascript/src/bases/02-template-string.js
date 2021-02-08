const Nombre = 'Oswaldo';
const Apellido = 'TC TC TC';
const NombreCompleto = `${Nombre} ${Apellido}`;

function getSaludo(NombreCompleto){
    return 'Hola ' + NombreCompleto;
}

console.log(`Saludo por ${getSaludo(NombreCompleto)}`);
