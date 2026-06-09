const { pool } = require('../db/connection')

class ProductoService {
    async get() {
        const sql =
            `SELECT pro_id id, 
                    pro_descripcion descripcion, 
                    pro_precio precio, 
                    cat_descripcion categoria 
            FROM producto 
                INNER JOIN categoria ON cat_id = pro_id_categoria`
        const [rows] = await pool.query(sql)
        return rows
    }

    async getProductoPorCategoria(categoria) {
        const sql =
            `SELECT pro_id id, 
                    pro_descripcion descripcion, 
                    pro_precio precio, 
                    cat_descripcion categoria 
            FROM producto 
                INNER JOIN categoria ON cat_id = pro_id_categoria
            WHERE cat_id = ?`
        const [rows] = await pool.query(sql, [categoria])

        if (rows.length === 0){
            const error = new Error(`La categoria ${categoria} no existe`)
            error.status = 404
            throw error
        }
        return rows        
    }

    async post(producto) {
        const sql =
            `INSERT INTO producto(pro_nombre, pro_descripcion, pro_precio, pro_id_categoria, pro_usualta, pro_fechaalta)
            VALUES(?, ?, ?, ?, 1, CURRENT_TIMESTAMP())`
        
        const [result] = await pool.query(sql, [
            producto.descripcion,
            producto.descripcion,
            producto.precio,
            producto.categoria
        ])

        return {
            id: result.insertId,
            descripcion: producto.descripcion,
            precio: producto.precio,
            categoria: producto.categoria
        }
    }
}

module.exports = ProductoService
