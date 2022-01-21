const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    description: String
})


const ItemToSell = mongoose.model("ItemToSell", itemSchema)
module.exports = ItemToSell