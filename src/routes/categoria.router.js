const { getCategoria, postCategoria } = require('../controllers/categoria.controller')
const express = require('express')

const categoriasRouter = express.Router()

categoriasRouter.post('/', postCategoria)
categoriasRouter.get('/', getCategoria)

module.exports = categoriasRouter
