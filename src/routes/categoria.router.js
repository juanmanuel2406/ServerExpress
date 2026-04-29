//Rutas de Categoria
const { getCategoria, postCategoria} = require('../controllers/categoria.controller.js')
const express = require('express')

const categoriaRouter = express.Router()

categoriaRouter.post('/', postCategoria)
categoriaRouter.get('/', getCategoria)

module.exports = categoriaRouter
