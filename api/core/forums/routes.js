const express   = require('express');
const init      = express.Router();
const responses = require('../../responses');
const forumsController = require('../forums/forumsController');


init.get('/', function(req, res){
    let status  = 200;
    let message = forumsController.getAllForumsCard().then((items) => {
        responses.success(req, res, items, status);
    })
});


init.get('/:id', function(req, res){
    let status  = 200;
    let message = forumsController.getForum(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

// Al final del todo exportamos
module.exports = init;