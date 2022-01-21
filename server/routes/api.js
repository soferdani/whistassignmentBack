const express = require('express')
const router = express.Router()
const SoldItem = require('../models/SoldItem')
const ItemToSell = require('../models/ItemToSell')

router.get('bringAllProducts', (req, res) => {
    //this rout will bring all the data from the database
    res.send('Hello World!')
})


router.get('updateItem', (req, res) => {
    //this rout will update the item from the database
    res.send('Hello World!')
})



router.get('deleteItem', (req, res) => {
    //this rout will delete the item from the database
    res.send('Hello World!')
})


router.get('sellItem', (req, res) => {
    //this rout will take one item from the item collection and remove it then add this item to aouther collection
    res.send('Hello World!')
})


module.exports = router
