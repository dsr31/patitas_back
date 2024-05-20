const express = require('express');
const config  = require('./config');
const init    = express();

// constantes para las apis
const posts = require('./core/posts/routes');
const forums = require('./core/forums/routes');
const users = require('./core/users/routes');

// para poder hacer post
init.use(express.json());
init.use(express.urlencoded({extended:true}));

init.set('port', config.app.port);

// rutas de acceso a las apis
init.use('/api/posts', posts);

// rutas de acceso a las apis
init.use('/api/forums', forums);

// rutas de acceso a las apis
init.use('/api/users', users);

// Esta es la ultima !!
module.exports = init;