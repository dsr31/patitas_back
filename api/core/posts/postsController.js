const mysql = require('../database/mysql');

function getAll(){
    return mysql.getAll('prueba');
}

function getAllPostsCard(){
    return mysql.getAllPostsCard();
}

function getPost(id){
    return mysql.getPost(id);
}

module.exports = { getAll, getAllPostsCard, getPost };