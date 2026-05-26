const { 
    getCategoria, 
    postCategoria, 
    deleteCategoria,
    updateCategoria } = require('../controllers/categoria.controller')
const express = require('express')

const categoriasRouter = express.Router()

categoriasRouter.post('/', postCategoria)
categoriasRouter.put('/', updateCategoria)
categoriasRouter.get('/', getCategoria)
categoriasRouter.delete('/:id', deleteCategoria)

module.exports = categoriasRouter
