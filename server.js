const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: "08June28",
        database: 'employee'
    },
    console.log('Success!')
);



app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});