const express = require('express')
const { 
    getProducto,
    getProductoPorCategoria,
    postProducto
} = require('../controllers/producto.controller')

const productosRouter = express.Router()
exports.productosRouter = productosRouter

productosRouter.get('/', getProducto)

productosRouter.get('/:categoria', getProductoPorCategoria)

productosRouter.post('/:categoria', postProducto)

module.exports = productosRouter