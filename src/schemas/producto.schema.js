const joi = require('joi')

const id = joi.number().min(1).messages({
    'any.required': 'El id es obligatorio',
    'number.min': 'El id debe ser igual o mayor a {#limit}'
})
const descripcion = joi.string().min(3).max(15).messages({
    'any.required': 'La descripción es obligatoria',
    'string.min': 'La descripción debe tener por lo menos {#limit} caracteres',
    'string.max': 'La descripción debe tener como máximo {#limit} caracteres'
})
const precio = joi.number().min(100).messages({
    'any.required': 'El precio es obligatorio',
    'number.min': 'El precio debe ser igual o mayor a {#limit}'
})
const categoria = joi.number().required()

const postProductoSchema = joi.object({
    descripcion: descripcion.required(),
    precio: precio.required(),
    categoria: categoria
})

const paramCategoriaSchema = joi.object({
    categoria: categoria
})

module.exports = { postProductoSchema, paramCategoriaSchema }
