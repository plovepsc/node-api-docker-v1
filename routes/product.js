const express = require('express')

const Product = require('../controllers/product')

const router = express.Router()

router.post('/product', Product.createProduct)
//router.put('/movie/:id', MovieCtrl.updateMovie)
//router.delete('/movie/:id', MovieCtrl.deleteMovie)
//router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/products', Product.getProduct)

module.exports = router
