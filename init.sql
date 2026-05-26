CREATE DATABASE IF NOT EXISTS dbserverexpress26;

USE dbserverexpress26;

CREATE TABLE IF NOT EXISTS categoria (
    cat_id INT AUTO_INCREMENT PRIMARY KEY,
    cat_descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS productos (
    pro_id INT AUTO_INCREMENT PRIMARY KEY,
    pro_descripcion VARCHAR(255) NOT NULL,
    pro_precio DECIMAL(10, 2) NOT NULL,
    pro_id_categoria INT NOT NULL,
    FOREIGN KEY (pro_id_categoria) REFERENCES categoria(cat_id)
);

INSERT INTO categoria (cat_descripcion) VALUES ('Electronica');
INSERT INTO categoria (cat_descripcion) VALUES ('Alimentos');
INSERT INTO categoria (cat_descripcion) VALUES ('Ropa');
