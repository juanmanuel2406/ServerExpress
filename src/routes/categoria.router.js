const express = require('express')
const productos = require('../data/productos')
const productosRouter = require('./producto.router.js')

const categoriaRouter = express.Router()

categoriaRouter.post('/', (req, res) => {
    const body = req.body
    const categoria = productos.infoProductos
    productos.infoProductos = {
        ...categorias,
        ...body
    }
    res.statusCode = 201
    res.end(JSON.stringify(body))
})

module.exports = categoriaRouter
