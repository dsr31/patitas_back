const mysql = require('../database/mysql');

function getAll(){
    return mysql.getAll('prueba');
}

module.exports = { getAll };