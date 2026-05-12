const { query } = require('express')
const { pool } = require('../db/connection')
const res = require('express/lib/response')
const { ref } = require('joi')

class ProductoService{
    
    async get() {
        const sql = `SELECT pro_id id,
                    pro_descripcion as descripcion,
                    pro_precio as precio,
                    cat_descripcion as categoria
                    FROM productos
                    INNER JOIN categoria ON cat_id = pro_id_categoria`
        const [rows] = await pool.query(sql)
        return rows
    }

    async getProductoPorCategoria(categoria){

        const sql = `SELECT pro_id id,
                    pro_descripcion as descripcion,
                    pro_precio as precio,
                    cat_descripcion as categoria
                    FROM productos
                    INNER JOIN categoria ON cat_id = pro_id_categoria
                    where cat_id = ?`
        const [rows] = await pool.query(sql, [categoria])

        if(rows.length === 0){
            const error = new Error(`el Categoria ${categoria} no existe`)
            error.status = 404
            throw error
        } 
        return rows
    }

    async post(producto){
        const sql = `insert into productos (pro_descripcion, 
        pro_precio, 
        pro_categoria) 
        values (?, ?, ?)`
        const [result] = await pool.query(sql, [producto.descripcion, 
            producto.precio, 
            producto.categoria])
        return {
            id: result.insertId,
            descripcion: producto.descripcion,
            precio: producto.precio,
            categoria: producto.categoria
        }
    }


}

module.exports = ProductoService