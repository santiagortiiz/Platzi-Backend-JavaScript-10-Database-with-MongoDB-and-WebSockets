/* Conexion con MongoDB Atlas usando mongoose */
const db = require("mongoose")

function connect(url){
    db.Promise = global.Promise   // Establece a mongoose el uso de la libreria de promesas que es global  
    db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Conexion exitosa"))
        .catch(error => console.log(error))
}

module.exports = connect

/* Conexion con MongoDB usando MongoClient*/
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:r00t@clusternodejs.jcrm1.mongodb.net/telegrom?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// client.connect(err => {
//     if (err){
//         console.log(err)
//         throw err
//     }
//     const db = client.db("telegrom")
//     console.log(db)
//     // client.close()
// })

