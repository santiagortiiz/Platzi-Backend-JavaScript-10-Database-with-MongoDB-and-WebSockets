/* Modelo basado en el esquema de mensajes */
const Model = require("./model")

async function getUsers(filter){
    if (filter.name !== undefined){
        usersFilter = {
            name: new RegExp(filter.name, "i") 
        }
        const users = await Model.find(usersFilter)
        return users
    } else {
        const users = await Model.find()
        return users
    }
}

async function addUser(user){
    const myUser = new Model(user)
    await myUser.save()
    return `Usuario ${user} creado con exito`
}

module.exports = {
    addUser,
    getUsers
}