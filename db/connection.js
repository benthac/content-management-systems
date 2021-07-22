const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: "08June28",
        database: 'employee'
    },
    console.log('Success!')
);

module.exports = db