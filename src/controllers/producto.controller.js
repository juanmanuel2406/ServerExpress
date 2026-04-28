const { get } = require('express/lib/response')
const ProductoService = require('../services/producto.service')
const productos = require('../data/productos')

const serviceProducto = new ProductoService()

function getProducto(req, res){
    try {
        const productos = serviceProducto.get()
        res.json(productos)
    } catch (error){
        res.status(500).json({ message: error.message })
    }
}

function getProductoPorCategoria(req, res){
   try {
        const categoria = req.params.categoria
        const productos = serviceProducto.getProductoPorCategoria(categoria)
        res.json(productos)
    }catch (error){
        res.status(404).json({ message: error.message })
    }
}

function postProducto(req, res){
    try {
        const categoria = req.params.categoria
        const body = req.body
        const productoNuevo = serviceProducto.post(categoria, producto)
        res.status(201).json(productoNuevo)
    } catch (error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProducto,
    getProductoPorCategoria,
    postProducto
}