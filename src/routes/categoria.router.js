const { 
    getCategoria, 
    postCategoria, 
    deleteCategoria,
    updateCategoria } = require('../controllers/categoria.controller')
const express = require('express')
const { checkAdmin } = require('../middlewares/secure')

const categoriasRouter = express.Router()

categoriasRouter.post('/', 
    checkAdmin(), 
    postCategoria)
categoriasRouter.put('/', 
    checkAdmin(), 
    updateCategoria)
categoriasRouter.get('/', getCategoria)
categoriasRouter.delete('/:id', 
    checkAdmin(), 
    deleteCategoria)

module.exports = categoriasRouter
