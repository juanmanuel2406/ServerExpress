const mockProductos = [
    { id: 1, descripcion: 'Celular', precio: 1500, categoria: 'Electronica' },
    { id: 2, descripcion: 'Notebook', precio: 3000, categoria: 'Electronica' },
    { id: 3, descripcion: 'Camiseta', precio: 500, categoria: 'Ropa' }
]

class ProductoService{
    async get() {
        return mockProductos
    }

    async getProductoPorCategoria(categoriaId){
        const categorias = { 1: 'Electronica', 2: 'Alimentos', 3: 'Ropa' }
        const categoriaNombre = categorias[categoriaId]
        
        if (!categoriaNombre) {
            const error = new Error(`la Categoria ${categoriaId} no existe`)
            error.status = 404
            throw error
        }

        const filtrados = mockProductos.filter(p => {
            if (categoriaId === '1') return p.categoria === 'Electronica'
            if (categoriaId === '2') return p.categoria === 'Alimentos'
            if (categoriaId === '3') return p.categoria === 'Ropa'
            return false
        })
        
        if (filtrados.length === 0) {
            const error = new Error(`no hay productos en la categoria ${categoriaId}`)
            error.status = 404
            throw error
        }
        return filtrados
    }

    async post(producto){
        const categorias = { 1: 'Electronica', 2: 'Alimentos', 3: 'Ropa' }
        const nuevo = {
            id: mockProductos.length + 1,
            descripcion: producto.descripcion,
            precio: producto.precio,
            categoria: categorias[producto.categoria] || 'Sin categoria'
        }
        mockProductos.push(nuevo)
        return nuevo
    }
}

module.exports = ProductoService
