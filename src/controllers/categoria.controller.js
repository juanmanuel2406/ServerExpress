const CategoriaService = require('../services/categoria.service')

const serviceCategoria = new CategoriaService()

async function getCategoria(req, res, next){
    try {
        const categorias = await serviceCategoria.get(req, res)
        res.json(categorias)
    }
    catch(error) {
        next(error) 
    }
}

async function postCategoria(req, res, next){
    try {
        const categoria = req.body
        const resultado = await serviceCategoria.post(categoria)
        res.status(201).json(resultado)       
    } catch (error) {
        next(error)        
    }
}

async function updateCategoria(req, res, next){
    try {
        const categoria = req.body
        const resultado = await serviceCategoria.update(categoria)
        res.status(200).json(resultado)       
    } catch (error) {
        next(error)        
    }
}

async function deleteCategoria(req, res, next){
    try {
        const id = req.params.id
        const idUsuario = req.body.idUsuario
        const resultado = await serviceCategoria.delete(idUsuario, id)
        res.status(200).json(resultado)       
    } catch (error) {
        next(error)        
    }
}

module.exports = {
    getCategoria,
    postCategoria,
    deleteCategoria,
    updateCategoria,
}
