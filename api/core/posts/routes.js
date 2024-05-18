const express   = require('express');
const init      = express.Router();
const responses = require('../../responses');
const postController = require('../posts/postsController');

init.get('/', function(req, res){
    let status  = 200;
    let message = postController.getAll().then((items) => {
        responses.success(req, res, items, status);
    })
});


// Al final del todo exportamos
module.exports = init;