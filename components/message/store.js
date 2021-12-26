/* Modelo basado en el esquema de mensajes */
const Model = require("./model")

function addMessage(message){
    // list.push(message)
    const myMesssage = new Model(message)
    myMesssage.save() // Metodo de mongoose
}

async function getMessages(filter){
    let messagesFilter = {}
    
    return new Promise((resolve, reject) => {
        if (filter.user !== undefined){
            messagesFilter = {
                user: new RegExp(filter.user, "i") 
            }
            Model.find(messagesFilter)
                .populate("user")
                    .exec((error, populated) => {
                        if (error){
                            reject(error)
                        } else {
                            resolve(populated)
                        }   
                    })
        } else {
            Model.find()
                .populate("user")
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

async function updateMessage(id, newMessage){
    const foundDocument = await Model.findById(id)
    foundDocument.message = newMessage
    const result = await foundDocument.save()
    return result
}

async function remove(id){
    let filter = {
        _id: id
    }
    await Model.deleteOne(filter)
    return `Usuario ${id} eliminado con exito`
}

module.exports = {
    add: addMessage,
    getMessages: getMessages,
    updateMessage: updateMessage,
    remove: remove
}