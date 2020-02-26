const mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'MealPlanner'
});

connection.connect(err => {
  if (err) throw err;
  console.log('database connection succesful');
});

module.exports = connection;
