// Import express
const sequelize = require('sequelize');
// Connecting to the database with sequelize
const connection = new sequelize('u331984428_lucasblog', 'u331984428_lucasblog', 'Lucas@99897', {
   host: 'sql541.main-hosting.eu',
   dialect: 'mysql',
   timezone: '-03:00'
});

module.exports = connection;