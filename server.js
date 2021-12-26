const config = require("./config")

/* Gestion de Servidor */
const express = require("express")  
const app = express()

/* Comunicacion en tiempo real con sockets */
const server = require("http").Server(app)
const socket = require("./socket")
socket.connect(server)

/* Gestion de base de datos */
const db = require("./dbConection")
db(config.dbUrl)

/* Se habilitan todas las cabeceras de las peticiones */
const cors = require("cors")
app.use(cors())

/* Añade manipulacion de la peticion */
app.use(express.json())            
app.use(express.urlencoded({ extended: false }))

/* 
Añade el servidor de estaticos de express.
Todas las peticiones hechas a /app (config.publicRoute) se buscan en la carpeta public 
*/
app.use(config.publicRoute, express.static("public"))   

/* 
Al final de la configuracin de express debe ir el enrutador .
Se añade el router a la app de express 
*/
const router = require("./network/routes")
router(app)

/* Puerto en el cual se ejecuta */
server.listen(config.port, function(){
    console.log(`La app está escuchando en ${config.host}:${config.port}`)
})





/*
Adicion de un WebSockets para comunicacion en tiempo real
*/
// io.on("connection", function(socket){
//     console.log("Nuevo cliente")
//     socket.emit("mensaje", "Bienvenido!")
// })

// setInterval(function(){
//     io.emit("mensaje", "Hola este es una cadena de difusion para todos")
// }, 3000)




