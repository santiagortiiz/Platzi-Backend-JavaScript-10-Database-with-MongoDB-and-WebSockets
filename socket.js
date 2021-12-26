/* Inicializa el servidor de socket.io, crea una instancia
y permite compartirla
*/
const socketIO = require("socket.io")   // Exporta una funcion que recibe el servidor
const socket = {}                       // Los objetos actuan como apuntadores a memoria    
                                        // por lo que si algo cambia se mantendra actualizado
function connect(server){
    /* Se inicializa io dentro del objeto socket */
    socket.io = socketIO(server, {
        cors: {
             origin: '*',
        }
    })
}

module.exports = {
    connect,
    socket
}
