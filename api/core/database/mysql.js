const mysql     = require('mysql');
const config    = require('../../config');
//const { connect } = require('../posts/routes');
//const prueba    = {id: 1, title: 'Conejito travieso', description: 'Eres un pedazo de bunuy....'};

// Obtenemos todos los datos de la tabla especificada
function getAll(table){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getAllPostsCard(){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT post.id_post, post.post_type, post.date_add, pet.pet_name, post.content, post.address 
        FROM post LEFT JOIN pet ON pet.id_pet = post.id_pet
        ORDER BY post.date_add DESC`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getPost(id){
    return new Promise((resolve, reject) => {  
        connection.query(`
        SELECT post.*, 
            pet.id_pet, pet.pet_name, pet.pet_description, pet.pet_genre,
            user.id_user, user.name, user.username, user.email, user.phone,
            race.race_name, specie.specie_name
        FROM post 
        LEFT JOIN pet ON pet.id_pet = post.id_pet 
        LEFT JOIN user ON pet.pet_id_user = user.id_user
        LEFT JOIN race ON pet.pet_id_race = race.id_race
        LEFT JOIN specie ON race.id_specie = specie.id_specie
        WHERE id_post = ${id}`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getAllForumsCard(){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT forum.id_forum, forum.images, forum.title, forum.content, user.name, user.username
        FROM forum
        LEFT JOIN user ON user.id_user = forum.id_user
        WHERE id_reply = 0
        ORDER BY forum.date_add DESC`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getForum(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT forum.id_forum, forum.images, forum.title, forum.content, user.name, user.username
        FROM forum
        LEFT JOIN user ON user.id_user = forum.id_user
        WHERE id_forum = ${id}`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

// CONEXION CON DB
let connection;
const config_db = {
    host:       config.database.host,
    user:       config.database.user,
    password:   config.database.password,
    database:   config.database.database,
}
function connectToDataBase(){
    console.log('PERRO');
    connection = mysql.createConnection(config_db);
    connection.connect((error) => {
        if(error){
            console.log('Esto ha petao', error);
            setTimeout(connectToDataBase, 200);
        }
        else{
            console.log('Estamos dentro B)');
        }
    })
    connection.on('error', error => {
        if(error.code == 'PROTOCOL_CONNECTION_LOST'){
            connectToDataBase();
        }
        else{
            throw error;
        }
    })
}

connectToDataBase();

module.exports = { getAll, getAllPostsCard, getPost, getAllForumsCard, getForum };