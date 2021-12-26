const express = require("express")  // Gestion de servidores
const router = express.Router()     // Gestion de peticiones al servidor 
const response = require("../../network/response")
const controller = require("./controller")

/* Instancia de multer para la gestion y transmision de archivos */
const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination : "public/files/",
    filename : function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

router.get('/', function(req, res){
    const filter = req.query || null
    let header = {
        "encabezado": "Aprendiendo de http",
        "herramienta": "insomnia"
    }

    controller.getMessages(filter)
        .then(messageList => {
            response.success(req, res, "", 200, header, messageList)
        })
        .catch(error => {
            response.error(req, res, "Unexpected Error", 500, header, "", error)
        })
})

router.post('/', upload.single("file"), function(req, res){ 
    let body = req.body
    let file = req.file

    controller.addMessage(body, file)
        .then((fullMessage) => {
            response.success(req, res, "", 201, "", fullMessage)
        })
        .catch((error) => {
            response.error(req, res, error, 400, "", "", error)
        })
})

router.patch("/:id", function(req, res){
    const params = req.params
    let body = req.body

    controller.updateMessage(params.id, body.message)
        .then(result => response.success(req, res, "", 200, "", result))
        .catch(error => response.error(req, res, "Unexpected Error", 500, "", "", error))

})

router.delete("/:id", function(req, res){
    const params = req.params

    controller.remove(params.id)
        .then(result => response.success(req, res, "", 200, "", result))
        .catch(error => response.error(req, res, "Unexpected Error", 500, "", "", error))
})

module.exports = router