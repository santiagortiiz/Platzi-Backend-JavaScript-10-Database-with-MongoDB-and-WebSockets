/* Modelo basado en el esquema de mensajes */
const Model = require("./model")

function addChat(chat){
    const myChat = new Model(chat)
    return myChat.save()
}

function getChats(filter){
    return new Promise((resolve, reject) => {
        if (filter.userId !== undefined){
            chatsFilter = {
                user: filter.userId
            }
            Model.find(chatsFilter)
                .populate("users")
                    .exec((error, populated) => {
                        if (error){
                            reject(error)
                        } else {
                            resolve(populated)
                        }   
                    })
        } else {
            Model.find()
                .populate("users")
                    .exec((error, populated) => {
                        if (error){
                            reject(error)
                        } else {
                            resolve(populated)
                        }   
                    })
        }
    })
}

module.exports = {
    getChats,
    addChat
}