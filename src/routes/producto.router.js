const express = require('express')
const productos = require('../data/productos')

const productosRouter = express.Router()

productosRouter.get('/productos', (req, res) =>{
    res.end(JSON.stringify(productos.infoProductos))
})

productosRouter.get('/:categoria', (req, res) => {
    const categoria = req.params.categoria
    const productosCategoria = productos.infoProductos[categoria]
        if(productosCategoria){
            res.end(JSON.stringify(productosCategoria))
        } else {
            res.statusCode = 404
            res.end(`el Categoria ${categoria} no existe`)
        }
})

productosRouter.post('/:categoria', (req, res) => {
    const categoria = req.params.categoria
    const body = req.body
    productos.infoProductos[categoria].push(body)
    res.statusCode = 201
    res.end(JSON.stringify(body))
})

module.exports = productosRouter