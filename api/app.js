const express = require('express');
const config  = require('./config');
const init    = express();

// constantes para las apis
const posts = require('./core/posts/routes');

init.set('port', config.app.port);

// rutas de acceso a las apis
init.use('/api/posts', posts);



// Esta es la ultima !!
module.exports = init;