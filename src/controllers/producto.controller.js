const { get } = require('express/lib/response')
const ProductoService = require('../services/producto.service')
const productos = require('../data/productos')

const serviceProducto = new ProductoService()

function getProducto(req, res, next){
    try {
        const productos = serviceProducto.get()
        res.json(productos)
    } catch (error){
       next(error)
    }
}

function getProductoPorCategoria(req, res, next){
   try {
        const categoria = req.params.categoria
        const productos = serviceProducto.getProductoPorCategoria(categoria)
        res.json(productos)
    }catch (error){
        next(error)
    }
}

function postProducto(req, res, next){
    try {
        const categoria = req.params.categoria
        const producto = req.body
        const productoNuevo = serviceProducto.post(categoria, producto)
        res.status(201).json(productoNuevo)
    } catch (error){
        next(error)
    }
}

module.exports = {
    getProducto,
    getProductoPorCategoria,
    postProducto
}