const express = require('express')
const { 
    getProducto,
    getProductoPorCategoria,
    postProducto
} = require('../controllers/producto.controller')
const { postProductosSchema, paramCategoriaSchema } = require('../schemas/producto.schema')
const { validator } = require('../middlewares/validatorHandler')

const productosRouter = express.Router()
exports.productosRouter = productosRouter

productosRouter.get('/', getProducto)

productosRouter.get('/:categoria', 
    validator(paramCategoriaSchema, 'params'), 
    getProductoPorCategoria)

productosRouter.post('/:categoria', 
    validator(postProductosSchema, 'body'), 
    validator(paramCategoriaSchema, 'params'), 
    postProducto)

module.exports = productosRouter