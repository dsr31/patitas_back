require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 4000,
    },
    database:{
        host:       process.env.MYSQLHOST || 'localhost',
        user:       process.env.MYSQLUSER || 'root',
        password:   process.env.MYSQLPSWD || '',
        database:   process.env.MYSQLDB   || 'prueba',        
    }
}