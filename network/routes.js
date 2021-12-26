/* Import the router of the message */
const message = require("../components/message/network")
const user = require("../components/user/network")
const chat = require("../components/chat/network")

/* Llama al componente message cuando la ruta lo solicite */
const routes = function(server){
    server.use("/message", message)
    server.use("/user", user)
    server.use("/chat", chat)
}

module.exports = routes