const express = require('express')
const router = express.Router()
const SoldItem = require('../models/SoldItem')
const ItemToSell = require('../models/ItemToSell')

router.get('/bringAllProductsToSale', (req, res) => {
    ItemToSell.find({}, (err, items) => { 
        if(err) {
            res.send(err)
        }
        res.json(items)
    })
})


router.post('/addItemToSale', (req, res) => { 
    let itemData = req.body
    let newItem = new ItemToSell(itemData)
    newItem.save()
    res.send("Item added to sale")
})

router.post('/editItem/:id', (req, res) => { 
    let itemData = req.body
    ItemToSell.findByIdAndUpdate(req.params.id, itemData, (err, item) => { 
        if(err) {
            res.send(err)
        }
        res.send("Item updated")
    })
})

router.delete('/deleteItemFromSale/:id', (req, res) => { 
    ItemToSell.findByIdAndRemove(req.params.id, (err, item) => {
        if(err) {
            res.send(err)
        }
        res.send("Item deleted from sale")
    })
})


router.post('/addItemToSoledItems', (req, res) => { 
    let itemData = req.body
    let newItem = new SoldItem(itemData)
    newItem.save()
    res.send("Item added to sold items")
})



router.get('/bringAllSoledItems', (req, res) => {
    SoldItem.find({}, (err, items) => { 
        if(err) {
            res.send(err)
        }
        res.json(items)
    })
})



module.exports = router
