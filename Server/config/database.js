const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database:"scms"
})
module.exports = db;    