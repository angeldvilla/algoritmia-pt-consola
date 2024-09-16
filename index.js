const readline = require('readline');

// Crear la interfaz para la entrada de datos en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para procesar las consultas
function procesarConsultas(tamanoLista, listaBase, numeroConsultas, listaConsultas) {

    //validar el tamaño de la lista base con tamanoLista
    if (listaBase.length != Number(tamanoLista)) {
        console.log("El tamano de la lista base debe ser igual al tamano de la lista base");
        return;
    }

    //validar el tamaño de la lista de consultas con numeroConsultas
    if (listaConsultas.length != Number(numeroConsultas)) {
        console.log("El tamano de la lista de consultas debe ser igual al tamano de la lista de consultas");
        return;
    }


    listaBase = listaBase.map(Number);  // Convertir a números la lista base
    listaConsultas = listaConsultas.map(Number);  // Convertir a números la lista de consultas

    // Procesar las consultas
    listaConsultas.forEach(consulta => {
        let menor = "X"; // Almacena el número más grande que es más pequeño que el número consultado. 

        //Se asinga X en caso de no encontrar un numero mas pequeño o mayor que la consulta

        let mayor = "X"; // Almacena el número más pequeño que es más grande que el número consultado.

        // Buscar el número más grande menor que la consulta
        for (let i = 0; i < listaBase.length; i++) {
            if (listaBase[i] < consulta) {
                menor = listaBase[i];
            }
        }

        // Buscar el número más pequeño mayor que la consulta
        for (let i = 0; i < listaBase.length; i++) {
            if (listaBase[i] > consulta) {
                mayor = listaBase[i];
                break;
            }
        }

        console.log(`${menor} ${mayor}`);
    });
}

// Preguntar al usuario por los datos en la consola
rl.question('Ingrese el tamaño de la lista: ', (tamanoLista) => {

    rl.question('Ingrese la lista de números separados por espacios (de menor a mayor): ', (listaBase) => {

        rl.question('Ingrese el número de consultas: ', (numeroConsultas) => {

            rl.question('Ingrese la lista de consultas separados por espacios: ', (listaConsultas) => {

                // Llamar a la función para procesar las consultas
                procesarConsultas(Number(tamanoLista), listaBase.split(' '), Number(numeroConsultas), listaConsultas.split(' '));

                // Cerrar la interfaz de readline
                rl.close();
            });
        });
    });
});
