const store = require("./store")

function getUsers(query){
    return new Promise(async (resolve, reject) => {
        let filter = {}
        if (query.name !== undefined){
            filter = {
                name: query.name
            }
            const listOfUsers = await store.getUsers(filter)
            resolve(listOfUsers)
        } else {
            const listOfUsers = await store.getUsers(filter)
            resolve(listOfUsers)
        }    
    })
}

function addUser(body){
    return new Promise((resolve, reject) => {
        if (!body.name){
            reject("[userControler] Revise los parametros del usuario")
        } else {
            const user = {
                name: body.name,
                date: new Date() 
            }
            store.addUser(user)
            resolve(user)
        }    
    })
}

module.exports = {
    addUser,
    getUsers
}