CREATE TABLE material (
  registro_sistema INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(45) NULL,
  sub_titulo VARCHAR(45) NULL,
  assunto VARCHAR(45) NULL,
  tipo VARCHAR(45) NULL,
  quantidade VARCHAR(45) NULL,
  ano VARCHAR(45) NULL,
  edicao VARCHAR(45) NULL,
  PRIMARY KEY (registro_sistema));

CREATE TABLE autor (
  id INT NOT NULL AUTO_INCREMENT,
  autor VARCHAR(255) NULL,
  PRIMARY KEY (id));

CREATE TABLE editora (
  id INT NOT NULL AUTO_INCREMENT,
  editora VARCHAR(255) NULL,
  PRIMARY KEY (id));