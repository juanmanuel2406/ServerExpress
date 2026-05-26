# Servidor Express

Servidor desarrollado con **Node.js** + **Express** en el Taller de Programación 2.

## Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Joi](https://joi.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor en modo desarrollo con Nodemon |
| `npm test`    | Ejecuta los tests (no configurados aún) |

## Configuración del entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PUERTO=3000

DB_HOST="localhost"
DB_PORT=3306
DB_DATABASE="dbserverexpress26"
DB_USER='xxxx'
DB_PASSWORD='xxxx'
```

### Variables de entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PUERTO` | Puerto donde se ejecutará el servidor | 3000 |
| `DB_HOST` | Host de la base de datos MySQL | localhost |
| `DB_PORT` | Puerto de la base de datos MySQL | 3306 |
| `DB_DATABASE` | Nombre de la base de datos | dbserverexpress26 |
| `DB_USER` | Usuario de la base de datos | - |
| `DB_PASSWORD` | Contraseña de la base de datos | - |

**Nota:** Puedes copiar `.env.example` a `.env` y actualizar los valores según tu configuración local.

## Estructura del proyecto

```
ServidorExpress/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── categoria.controller.js
│   │   └── producto.controller.js
│   ├── db/
│   │   └── connection.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── validatorHandler.js
│   ├── routes/
│   │   ├── categoria.router.js
│   │   └── producto.router.js
│   ├── schemas/
│   │   └── producto.schema.js
│   ├── services/
│   │   ├── categoria.service.js
│   │   └── producto.service.js
│   ├── sql/
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── readme.md
```

## Scripts SQL

### Crear tabla de usuarios

```sql
CREATE TABLE usuarios (
    usu_id INT AUTO_INCREMENT,
    usu_usuario VARCHAR(30) NOT NULL,
    usu_nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (usu_id)
);
```

### Agregar campos de auditoría a `producto`

```sql
ALTER TABLE producto
    ADD COLUMN pro_usualta INT,
    ADD COLUMN pro_fechaalta DATETIME,
    ADD COLUMN pro_usumodif INT,
    ADD COLUMN pro_fechamodif DATETIME,
    ADD COLUMN pro_usubaja INT,
    ADD COLUMN pro_fechabaja DATETIME,
    ADD CONSTRAINT fk_producto_usualta FOREIGN KEY (pro_usualta) REFERENCES usuarios(usu_id),
    ADD CONSTRAINT fk_producto_usumodif FOREIGN KEY (pro_usumodif) REFERENCES usuarios(usu_id),
    ADD CONSTRAINT fk_producto_usubaja FOREIGN KEY (pro_usubaja) REFERENCES usuarios(usu_id);
```

### Agregar campos de auditoría a `categoria`

```sql
ALTER TABLE categoria
    ADD COLUMN cat_usualta INT,
    ADD COLUMN cat_fechaalta DATETIME,
    ADD COLUMN cat_usumodif INT,
    ADD COLUMN cat_fechamodif DATETIME,
    ADD COLUMN cat_usubaja INT,
    ADD COLUMN cat_fechabaja DATETIME,
    ADD CONSTRAINT fk_categoria_usualta FOREIGN KEY (cat_usualta) REFERENCES usuarios(usu_id),
    ADD CONSTRAINT fk_categoria_usumodif FOREIGN KEY (cat_usumodif) REFERENCES usuarios(usu_id),
    ADD CONSTRAINT fk_categoria_usubaja FOREIGN KEY (cat_usubaja) REFERENCES usuarios(usu_id);
```
