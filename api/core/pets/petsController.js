const mysql = require('../database/mysql');

function getMyPets(){
    return mysql.getMyPets();
}
function getPetPosts(id){
    return mysql.getPetPosts(id);
}
module.exports = { getMyPets, getPetPosts };