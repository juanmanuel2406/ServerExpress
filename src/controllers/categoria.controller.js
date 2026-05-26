const CategoriaService = require('../services/categoria.service')

const serviceCategoria = new CategoriaService()

function getCategoria(req, res, next){
    try {
        const categorias = serviceCategoria.get(req, res)
        res.json(categorias)
    }
    catch(error) {
        next(error) 
    }
}

function postCategoria(req, res, next){
    try {
        const body = req.body
        const resultado = serviceCategoria.post(body)
        res.status(201).json(resultado)       
    } catch (error) {
        next(error)        
    }
}

module.exports = {
    getCategoria,
    postCategoria,
}
