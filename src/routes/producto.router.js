const express = require('express')
const {
    getProducto,
    getProductoPorCategoria,
    postProducto
 } = require('../controllers/producto.controller')
 const { 
    postProductoSchema, 
    paramCategoriaSchema } = require('../schemas/producto.schema')
 const { validator } = require('../middlewares/validatorHandler')


const productosRouter = express.Router()
productosRouter.get('/', getProducto)
productosRouter.get('/:categoria',
    validator(paramCategoriaSchema, 'params'), 
    getProductoPorCategoria)
productosRouter.post('/',  
    validator(postProductoSchema, 'body'), 
    postProducto)

module.exports = productosRouter
