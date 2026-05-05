const { get } = require('express/lib/response')
const serviceCategoria = require('../services/categoria.service')

const serviceCategorias = new serviceCategoria()

function getCategoria(req, res, next){
    try {
        const categorias = serviceCategorias.get(req, res)
        res.json(categorias)
    }
    catch(error){
        next(error)
    }
    
}

function postCategoria(req, res, next){
    try {
        const body = req.body
        const resultado = serviceCategorias.post(body)
        res.statusCode = (201).json(resultad)
    }
    catch(error) {
        next(error)
    }
     
}

module.exports = {
    getCategoria,
    postCategoria
}