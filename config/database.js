const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

// Create database if it doesn't exist
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Database ${process.env.DATABASE} created`);
    }
});

module.exports = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
});