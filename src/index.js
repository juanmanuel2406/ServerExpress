const express = require('express')
const productoRouter = require('./routes/producto.router')
const categoriaRouter = require('./routes/categoria.router')
const usuarioRouter = require('./routes/usuario.router')
const { errorLog, errorHandler } = require('./middlewares/errorHandler')
const { testConnection } = require('./db/connection')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/productos', productoRouter)
app.use('/categorias', categoriaRouter)
app.use('/usuarios', usuarioRouter)

app.get('/', (req, res) => {
    res.end('Servidor desarrollado con express')
})

app.use(errorLog)
app.use(errorHandler)

const puerto = process.env.PUERTO
app.listen(puerto, async () =>{
    await testConnection()
    console.log(`Servidor escuchando en el puerto ${puerto}`)
})
