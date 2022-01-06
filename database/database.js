//Import Enviroments Variables
require('dotenv').config();

const mysql2 = require('mysql2');

// Import express
const sequelize = require('sequelize');
// Connecting to the database with sequelize
const connection = new sequelize(
   process.env.PLANETSCALE_DB,
   process.env.PLANETSCALE_DB_USERNAME,
   process.env.PLANETSCALE_DB_PASSWORD, {
   host: process.env.PLANETSCALE_DB_HOST,
   dialect: 'mysql',
   timezone: '-03:00',
   dialectOptions: {
      encrypt: true,
      ssl: {
         rejectUnauthorized: false
      }
   },
   dialectModule: mysql2
});

module.exports = connection;