const { get } = require('express/lib/response')
const productos = require('../data/productos')
const { productosRouter, post } = require('../routes/producto.router')
const { getProductoPorCategoria } = require('../controllers/producto.controller')

class ProductoService{
    constructor() {
        this.productos = productos.infoProductos
    }

    get() {
        return productos.infoProductos
    }

    getProductoPorCategoria(categoria){
        const productosCategoria = productos.infoProductos[categoria]
        if(productosCategoria){
            return productosCategoria
        } else {
            throw new Error(`el Categoria ${categoria} no existe`)
        }
    }

    post(categoria, producto){
        productos.infoProductos[categoria].push(producto)
        return producto
    }


}

module.exports = ProductoService