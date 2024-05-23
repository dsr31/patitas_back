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

function registerPost(body){
    return mysql.registerPost(body);
}
module.exports = { getAll, getAllPostsCard, getPost, registerPost };