const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    description: String
})


const SoldItem = mongoose.model("SoldItem", itemSchema)
module.exports = SoldItem