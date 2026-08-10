console.log('El cocinero llega a la cocina...');

setTimeout(() => {
    console.log('El agua hirvio, agrego la pasta.');
}, 1000);

console.log('Mientras espero, corto cebolla...');
console.log('Preparo tomate...');
console.log('Caliento Sarten...');

console.log('Listo todo preparado, esperando el agua...');

// setTimeout siempre se va a ejecutar despues de todo el codigo asincrono

console.log('Hola, quiero un sandwich');

function hacerSandwich() {
    console.log('Empiezo a hacer el sandwich');
    cortarPan();
    console.log('Termine el sandwich');
 }

 function cortarPan() {
    console.log('Cortando pan');
    untarMayonesa()
        console.log('Untando mayonesa');
    }

    function untarMayonesa() {
    console.log('Untando mayonesa');
    }

    hacerSandwich();

    console.log('El sandwich esta listo');

    // Call Stack = Pila de funciones
    // LIFO = Last In, First out

    console.log('Ejemplo de Fetch API y Peticiones HTTP')

    //Haciedo una petición GET a JSONPlaceholder API

    fetch('https://jsonplaceholder.typicode.com/')
    //Cuando llegue la respuesta del servidor
    .then(response => {
        console.log(`Status Code: ${response.status}`);
        console.log(`Conteido: ${response.headers.get('content-type')}`);

        // Converir la respuesta a JSON
        return response.json();
    })
    .then(data => {
        console.log('EL JSON esta listo para usarse');
        console.log(`POST #${data.id}`)
        console.log(`Titulo #${data.title}`)
        console.log(`Body #${data.body.substring(0, 50)}...`)
    })
    // Si algo sale mal
    .catch(error => {
        console.error('Error en la petición:', error);
    });

/* fetch() hace la peticion
.then espera la respuesta
response = lo que devuelve el servidor
response.status y headers son la INFO sobre la respuesta
.json() convierte
*/
