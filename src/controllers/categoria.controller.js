const CategoriaServices = require('../services/categoria.service')

const serviceCategorias = new CategoriaServices()

async function getCategoria(req, res, next){
    try {
        const categorias = await serviceCategorias.get()
        res.json(categorias)
    }
    catch(error){
        next(error)
    }
}

async function postCategoria(req, res, next){
    try {
        const categoria = req.body
        const resultado = await serviceCategorias.post(categoria)
        res.status(201).json(resultado)
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    getCategoria,
    postCategoria
}
