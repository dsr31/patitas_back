const mysql = require('../database/mysql');

function getMyPets(id){
    return mysql.getMyPets(id);
}
function getMyForums(id){
    return mysql.getMyForums(id);
}
function getMyReviews(id){
    return mysql.getMyReviews(id);
}
function getUser(id){
    return mysql.getUser(id);
}
function registerUser(body){
    return mysql.registerUser(body);
}
function comprobarDisponibilidadUsuario(email, username){
    return mysql.comprobarDisponibilidadUsuario(email, username);
}
function comprobarInicioSesion(username){
    return mysql.comprobarInicioSesion(username);
}
module.exports = { getMyPets, getMyForums, getMyReviews, getUser, registerUser, comprobarDisponibilidadUsuario, comprobarInicioSesion };