const { pool } = require('../db/connection')

class CategoriaService {
    async get() {
        const sql =
            `SELECT cat_id id, cat_descripcion descripcion
               FROM categoria 
             WHERE cat_fechabaja IS NULL`
        const [rows] = await pool.query(sql)
        return rows
    }

    async post(categoria) {
        const sql =
            `INSERT INTO categoria(cat_descripcion, cat_usualta, cat_fechaalta) 
             VALUES(?, ?, CURRENT_TIMESTAMP())`
        
        const [result] = await pool.query(sql, [
            categoria.descripcion,
            categoria.idUsuario
        ])

        return {
            id: result.insertId,
            descripcion: categoria.descripcion
        }
    }

    async update(categoria){
        const sql = `UPDATE categoria 
                        SET cat_usumodif = ?,
                            cat_fechamodif = CURRENT_TIMESTAMP(),
                            cat_descripcion = ?
                      WHERE cat_id = ?`
        await pool.query(sql, [categoria.descripcion, 
            categoria.idUsuario, 
            categoria.id])
        return categoria
    }

    async delete(idUsuario, id) {
        const sql = `UPDATE categoria 
                        SET cat_usubaja = ?,
                            cat_fechabaja = CURRENT_TIMESTAMP()
                      WHERE cat_id = ?`

        await pool.query(sql, [idUsuario, id])

        return {
            id: id,
        }                      
    }
}

module.exports = CategoriaService
