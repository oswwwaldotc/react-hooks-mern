// Link: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
// Sin credenciales de un API publica
const peticion = fetch('https://jsonplaceholder.typicode.com/photos');

// Promesas en cadena
peticion
    .then( resp => resp.json())
    .then( data => {
        const {url} = data[1].url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)
