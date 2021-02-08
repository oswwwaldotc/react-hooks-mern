// Cambiamos a sincronia de los datos
const getImagen = async () => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await resp.json();
        const { url } = data[1].url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.error(error);
        
    }
}

getImagen();
