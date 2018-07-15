-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
USE burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
--If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS Burgers;
DROP TABLE IF EXISTS customers;