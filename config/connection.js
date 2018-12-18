const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'De*l%ta$Ra!y#Edge7!8$9',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;