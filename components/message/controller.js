const store = require("./store")
const socket = require("../../socket").socket

function addMessage(body, file){
    return new Promise((resolve, reject) => {
        if (!body.chat || !body.user || !body.message){
            reject("[messageControler] Parametros invalidos")
        } else {
            let fileUrl = ""
            if (file){
                /* Recordar que en /app se puede acceder a los archivos estaticos */
                fileUrl = "http://localhost:3000/app/files/" + file.filename
            }
            const fullMessage = {
                chat: body.chat,
                user: body.user,
                message: body.message,
                file: fileUrl,
                date: new Date() 
            }
            store.add(fullMessage)

            /* Enviemos el mensaje por socket a quien se conecte */
            socket.io.emit("message", fullMessage)

            resolve(fullMessage)
        }    
    })
}

function getMessages(filter){
    return new Promise((resolve, reject) => {
        store.getMessages(filter)
            .then(listOfMessages => resolve(listOfMessages))
    })
}

function updateMessage(id, newMessage){
    return new Promise(async (resolve, reject) => {
        if (!id || !newMessage){
            reject("Invalid Data")
        } else {
            const result = await store.updateMessage(id, newMessage)
            resolve(result)
        }
    })
}

function remove(id){
    return new Promise(async (resolve, reject) => {
        if (!id){
            reject("Invalid ID")
        } else {
            const result = await store.remove(id)
            resolve(result)
        }
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    remove
}

