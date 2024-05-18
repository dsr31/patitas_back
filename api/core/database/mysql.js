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

function getOne(table, id){

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

module.exports = { getAll, getOne };