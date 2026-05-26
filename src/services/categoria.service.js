const mockCategorias = [
    { id: 1, descripcion: 'Electronica' },
    { id: 2, descripcion: 'Alimentos' },
    { id: 3, descripcion: 'Ropa' }
]

class CategoriaServices{

    async get() {
        return mockCategorias
    }

    async post(categoria){
        const nueva = {
            id: mockCategorias.length + 1,
            descripcion: categoria.descripcion
        }
        mockCategorias.push(nueva)
        return nueva
    }
}

module.exports = CategoriaServices
