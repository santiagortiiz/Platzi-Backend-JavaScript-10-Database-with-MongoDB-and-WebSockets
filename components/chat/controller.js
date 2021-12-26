const store = require("./store")

function getChats(query){
    return store.getChats(query)
}

function addChat(users){
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)){
            reject("[Controler Chat Error] Revisar el formato de usuarios enviado")
        } else {
            const chat = {
                users: users
            }
            resolve(store.addChat(chat))
        }
    })
}

module.exports = {
    addChat,
    getChats
}


