const express = require('express')
const productosRouter = require('./routes/producto.router')
const categoriaRouter = require('./routes/categoria.router')
const { errorHandler, errorLog} = require('./middlewares/errorHandler')
const { testConnection } = require('./db/connection')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/productos', productosRouter)
app.use('/categoria', categoriaRouter)


app.get('/', (req, res)=>{
    res.end('Servidor Desarrollado con modulo nativo http')
})

app.use(errorLog)
app.use(errorHandler)

const puerto = process.env.PUERTO
app.listen(puerto, async() =>{
    await testConnection()
    console.log(`Servidor Escuchando en el puerto ${puerto}`)
})
