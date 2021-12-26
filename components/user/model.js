const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mySchema = new Schema({
    name: String
})

const Model = mongoose.model("User", mySchema)
module.exports = Model
