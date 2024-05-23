const mysql = require('../database/mysql');

function getMyPets(){
    return mysql.getMyPets();
}
function getPetPosts(id){
    return mysql.getPetPosts(id);
}
function getRace(){
    return mysql.getRace();
}
function registerPet(body){
    return mysql.registerPet(body);
}
module.exports = { getMyPets, getPetPosts, getRace, registerPet };