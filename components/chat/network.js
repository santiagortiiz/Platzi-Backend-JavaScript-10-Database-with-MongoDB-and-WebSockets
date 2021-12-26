const express = require("express")  // Gestion de servidores
const router = express.Router()     // Gestion de peticiones al servidor 
const response = require("../../network/response")
const controller = require("./controller")

router.get('/', function(req, res){
    controller.getChats(req.query)
        .then(chatList => {
            response.success(req, res, "", 200, "", chatList)
        })
        .catch(error => {
            response.error(req, res, "Unexpected Error", 500, "", "", error)
        })
})

router.post('/', function(req, res){
    controller.addChat(req.body.users)
    .then(data => {
        response.success(req, res, "", 200, "", data)
    })
    .catch(error => {
        response.error(req, res, "Unexpected Error", 500, " ", "", error)
    })
})

module.exports = router