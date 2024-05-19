const express = require('express');
const config  = require('./config');
const init    = express();

// constantes para las apis
const posts = require('./core/posts/routes');
const forums = require('./core/forums/routes');

init.set('port', config.app.port);

// rutas de acceso a las apis
init.use('/api/posts', posts);

// rutas de acceso a las apis
init.use('/api/forums', forums);

// Esta es la ultima !!
module.exports = init;