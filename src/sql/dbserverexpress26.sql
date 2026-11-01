CREATE DATABASE IF NOT EXISTS dbserverexpress26;
USE dbserverexpress26;

-- -----------------------------------------------------
-- Tabla usuarios
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
    usu_id INT AUTO_INCREMENT,
    usu_usuario VARCHAR(30) NOT NULL,
    usu_nombre VARCHAR(100) NOT NULL,
    usu_password VARCHAR(255) NOT NULL,
    usu_esadmin TINYINT(1) DEFAULT 0,
    PRIMARY KEY (usu_id),
    UNIQUE KEY uk_usu_usuario (usu_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- -----------------------------------------------------
-- Tabla categoria
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS categoria (
    cat_id INT AUTO_INCREMENT,
    cat_descripcion VARCHAR(100) NOT NULL,
    cat_usualta INT,
    cat_fechaalta DATETIME,
    cat_usumodif INT,
    cat_fechamodif DATETIME,
    cat_usubaja INT,
    cat_fechabaja DATETIME,
    PRIMARY KEY (cat_id),
    CONSTRAINT fk_categoria_usualta FOREIGN KEY (cat_usualta) REFERENCES usuarios(usu_id),
    CONSTRAINT fk_categoria_usumodif FOREIGN KEY (cat_usumodif) REFERENCES usuarios(usu_id),
    CONSTRAINT fk_categoria_usubaja FOREIGN KEY (cat_usubaja) REFERENCES usuarios(usu_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- -----------------------------------------------------
-- Tabla producto
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS producto (
    pro_id INT AUTO_INCREMENT,
    pro_nombre VARCHAR(100) NOT NULL,
    pro_descripcion VARCHAR(255) NOT NULL,
    pro_precio DECIMAL(10,2) NOT NULL,
    pro_id_categoria INT NOT NULL,
    pro_usualta INT,
    pro_fechaalta DATETIME,
    pro_usumodif INT,
    pro_fechamodif DATETIME,
    pro_usubaja INT,
    pro_fechabaja DATETIME,
    PRIMARY KEY (pro_id),
    CONSTRAINT fk_producto_id_categoria FOREIGN KEY (pro_id_categoria) REFERENCES categoria(cat_id),
    CONSTRAINT fk_producto_usualta FOREIGN KEY (pro_usualta) REFERENCES usuarios(usu_id),
    CONSTRAINT fk_producto_usumodif FOREIGN KEY (pro_usumodif) REFERENCES usuarios(usu_id),
    CONSTRAINT fk_producto_usubaja FOREIGN KEY (pro_usubaja) REFERENCES usuarios(usu_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
