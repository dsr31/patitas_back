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
module.exports = { getMyPets, getMyForums, getMyReviews, getUser };