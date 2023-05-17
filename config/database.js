// // const Sequelize = require('sequelize');
// // const dotenv = require('dotenv');
// // const mysql = require('mysql2');

// // dotenv.config();

// // // Create database if it doesn't exist
// // const connection = mysql.createConnection({
// //     host: process.env.HOST,
// //     user: process.env.DB_USERNAME,
// //     password: process.env.DB_PASSWORD,
// //     port: process.env.DB_PORT,
// // });

// // connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`, (err, results) => {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(`Database ${process.env.DATABASE} created`);
// //     }
// // });

// // module.exports = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
// //     host: process.env.HOST,
// //     dialect: process.env.DIALECT,
// //     port: process.env.DB_PORT,
// // });

// const Sequelize = require('sequelize');
// const dotenv = require('dotenv');
// const mysql = require('mysql2');

// dotenv.config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   // Create database if it doesn't exist
//   const connection = mysql.createConnection({
//       host: 'localhost',
//       user: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       port: 3306,
//   });

//   //create connection to our dbi

//   const sequelize = process.env.JAWSDB_URL
//     new Sequelize(process.env.JAWSDB_URL)
//     new Sequelize(process.new.DB_NAME, process)

//   connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`, (err, results) => {
//       if (err) {
//           console.log(err);
//       } else {
//           console.log(`Database ${process.env.DATABASE} created`);
//       }
//   });

//   sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//   });
// }

// module.exports = sequelize;


const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();


const sequelize = process.env.JAWSDB_URL
    new Sequelize (process.env.JAWSDB_URL)
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });



  

module.exports = sequelize;
