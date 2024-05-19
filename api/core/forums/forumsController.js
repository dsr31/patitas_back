const mysql = require('../database/mysql');

function getAll(){
    return mysql.getAll('prueba');
}

function getAllForumsCard(){
    return mysql.getAllForumsCard();
}

function getForum(id){
    return mysql.getForum(id);
}

module.exports = { getAll, getAllForumsCard, getForum };