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
        SELECT post.id_post, post.post_type, post.date_add, pet.pet_name, post.content, post.address, post.post_image_1 
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

function getUser(id){
    return new Promise((resolve, reject) => {  
        connection.query(`
        SELECT user.id_user, user.name, user.description, user.email, user.username, user.phone, 
        user.rating, user.user_profile_image            
        FROM user 
        WHERE user.username = '${id}'`, (error, result) => {
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
        SELECT forum.id_forum, forum.forum_image_1, forum.title, forum.content, user.name, user.username
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
        SELECT forum.id_forum, forum.forum_image_1, forum.forum_image_2, forum.forum_image_3, forum.forum_image_4, forum.title, forum.content, user.name, user.username
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

function getForumReplies(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT forum.id_forum, forum.content, user.name, user.username, user.user_profile_image
        FROM forum
        LEFT JOIN user ON user.id_user = forum.id_user
        WHERE forum.id_reply = ${id}`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getMyPets(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT pet.id_pet, pet.pet_name, pet.pet_description, pet.chip_identifier, pet.pet_genre, pet.pet_profile_image,
        race.race_name, specie.specie_name
        FROM pet
        LEFT JOIN race ON pet.pet_id_race = race.id_race
        LEFT JOIN specie ON specie.id_specie = race.id_specie
        WHERE pet.pet_id_user = ${id}`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getMyPetsByUsername(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT pet.id_pet, pet.pet_name, pet.pet_description, pet.chip_identifier, pet.pet_genre, pet.pet_profile_image,
        race.race_name, specie.specie_name
        FROM pet
        LEFT JOIN race ON pet.pet_id_race = race.id_race
        LEFT JOIN specie ON specie.id_specie = race.id_specie
        LEFT JOIN user ON user.id_user = pet.pet_id_user
        WHERE user.username = "${id}"`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getMyForums(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT forum.id_forum, forum.title, forum.content, forum.forum_image_1, forum.id_reply, forum.id_user, 
        user.name, user.username
        FROM forum
        LEFT JOIN user ON user.id_user = forum.id_user
        WHERE forum.id_user = ${id}
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

function getMyReviews(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT ratings.id_rating, ratings.id_user_reviewer, ratings.description, ratings.rating, 
        user.name, user.username
        FROM ratings
        LEFT JOIN user ON user.id_user = ratings.id_user_reviewer
        WHERE ratings.id_reviewed_user = ${id}
        ORDER BY ratings.date_add DESC`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function registerUser(body){
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO user SET ?`, body, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function registerPost(body){
    const currentDate = new Date();
    body.date_add = currentDate;
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO post SET ?`, body, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function registerPet(body){
    const currentDate = new Date();
    body.pet_date_add = currentDate;

    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO pet SET ?`, body, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function comprobarDisponibilidadUsuario(email, username){

    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT id_user
        FROM user
        WHERE email = '${email}' OR username = '${username}'`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function comprobarInicioSesion(username){

    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT id_user, username, password 
        FROM user
        WHERE username = '${username}'`, (error, result) => {
            if(error){
                return reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

function getPetPosts(id){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT post.id_post, post.post_type, post.date_add, pet.pet_name, post.content, post.address, post.post_image_1 
        FROM post LEFT JOIN pet ON pet.id_pet = post.id_pet
        WHERE pet.id_pet = ${id}
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

function getRace(){
    return new Promise((resolve, reject) => {
        connection.query(`
        SELECT race.id_race, race.race_name, race.id_specie
        FROM race`, (error, result) => {
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
    connection = mysql.createConnection(config_db);
    connection.connect((error) => {
        if(error){
            console.log('No se pudo conectar a la base de datos', error);
            setTimeout(connectToDataBase, 200);
        }
        else{
            console.log('Hemos conectado a la base de datos');
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

module.exports = { getAll, getAllPostsCard, getPost, getAllForumsCard, getForum, getMyPets, 
    getMyForums, getMyReviews, getUser, registerUser, comprobarDisponibilidadUsuario, comprobarInicioSesion,
    getForumReplies, getPetPosts, getRace, registerPet, getMyPetsByUsername, registerPost };