// Import Sequelize constructor from the library
const Sequelize = require('sequelize');

// Load environment variables from .env file (make sure to add your .env file to .gitignore)
require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;