const mysql = require('mysql');

const connection = mysql.connection({
    host: process.env.DB_HOST,
    port: 3360,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'burgers_db'
});

module.exports = connection;