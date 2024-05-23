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

function filtrarFeed(array){
    return mysql.filtrarFeed(array);
}

function resolvePost(id, status){
    return mysql.resolvePost(id, status);
}

module.exports = { getAll, getAllPostsCard, getPost, registerPost, filtrarFeed, resolvePost };