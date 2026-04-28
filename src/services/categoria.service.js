const res = require('express/lib/response')
const productos = require('../data/productos')

class CategoriaServices{
    constructor(){
        this.productos = productos.infoProductos
    }

    get(){
        const categorias = Object.keys(productos.infoProductos)
        return categorias
    }

    post(listaProductos){
       const categorias = productos.infoProductos
        productos.infoProductos = {
            ...categorias,
            ...listaProductos
        }
        return listaProductos
    }
}

module.exports = CategoriaServices