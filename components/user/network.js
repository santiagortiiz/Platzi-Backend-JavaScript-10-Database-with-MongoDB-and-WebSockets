const express = require("express")  // Gestion de servidores
const router = express.Router()     // Gestion de peticiones al servidor 
const response = require("../../network/response")
const controller = require("./controller")

router.get('/', function(req, res){
    let query = req.query

    controller.getUsers(query)
        .then((users) => {
            response.success(req, res, "", 200, "", users)
        })
        .catch((error) => {
            response.error(req, res, error, 400, "", "", error)
        })
})

router.post('/', function(req, res){ 
    let body = req.body

    controller.addUser(body)
        .then((user) => {
            response.success(req, res, "", 201, "", user)
        })
        .catch((error) => {
            response.error(req, res, error, 400, "", "", error)
        })
})

module.exports = router