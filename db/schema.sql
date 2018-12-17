DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burger (
    burger_id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    isDevoured BOOLEAN DEFAULT false,
    PRIMARY KEY(burger_id)

);