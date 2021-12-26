const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: "Chat"
    },
    user: {
        type: Schema.ObjectId,
        ref: "User"
    },
    message: {
        type: String,
        required: true
    },
    file: String,
    date: Date, 
})

const Model = mongoose.model("Message", mySchema)
module.exports = Model


