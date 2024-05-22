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

function getForumReplies(id){
    return mysql.getForumReplies(id);
}

module.exports = { getAll, getAllForumsCard, getForum, getForumReplies };