const { get } = require('express/lib/response')
const serviceCategoria = require('../services/categoria.service')

const serviceCategorias = new serviceCategoria()

function getCategoria(req, res){
    try {
        const categorias = serviceCategorias.get(req, res)
        res.json(categorias)
    }
    catch(error){
        res.status(500).json({ message: message.error })
    }
    
}

function postCategoria(req, res){
    try {
        const body = req.body
        const resultado = serviceCategorias.post(body)
        res.statusCode = (201).json(resultad)
    }
    catch(error) {
        res.status(500).json({ message: message.error })
    }
     
}

module.exports = {
    getCategoria,
    postCategoria
}