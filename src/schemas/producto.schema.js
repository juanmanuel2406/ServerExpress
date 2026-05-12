const joi = require('joi') 

const id = joi.number().min(1).messages({
    'any.requiered': 'El Id es obligatorio',
    'number.min': 'El Id debe ser igual o mayor a {#limit}'
})
const descripcion = joi.string().min(3).max(15).messages({
    'any.requiered': 'La Descripcion es obligatorio',
    'string.min': 'la descripcion debe ser igual o mayor a {#limit} caracteres',
    'string.max': 'la descripcion debe ser como maximo {#limit} caracteres'
})
const precio = joi.number().min(100).messages({
    'any.requiered': 'El precio es obligatorio',
    'number.min': 'El precio debe ser igual o mayor a {#limit}'
})
const categoria = joi.number().required()

const postProductosSchema = joi.object({
    descripcion: descripcion.required(),
    precio: precio.required(),
    categoria
})

const paramCategoriaSchema = joi.object({
    categoria: categoria
})

module.exports = { postProductosSchema, paramCategoriaSchema }