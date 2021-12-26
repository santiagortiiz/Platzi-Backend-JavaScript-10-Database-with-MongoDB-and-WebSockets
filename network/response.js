const chalk = require("chalk")

const statusMessages = {
    "200": "OK",
    "201": "Created",
    "301": "Movido permanentemente",
    "304": "No modificado",
    "400": "Error en la consulta",
    "401": "Sin autorizacion",
    "403": "Prohibido",
    "404": "No encontrado",
    "500": "Error del servidor"
}

exports.success = function(req, res, error, status, header, respuesta) {
    let statusCode = status
    let statusMessage = respuesta

    if (!status){
        status = 200
    }

    if (!respuesta){
        statusMessage = {
            "error": error || "",
            "body": statusMessages[status]
        }
    } else {
        statusMessage = {
            "error": error || "",
            "body": respuesta
        }
    } 
    
    res.header(header || "")
    res.status(statusCode).send(statusMessage)
}

exports.error = function(req, res, error, status, header, respuesta, detalles){
    let response = {
        "error": error,
        "body": respuesta || ""
    }
    
    res.header(header || "")
    res.status(status || 500).send(response)    
    
    console.log(chalk.red("[response error] " + detalles))
}