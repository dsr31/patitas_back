const express   = require('express');
const init      = express.Router();
const responses = require('../../responses');
const postController = require('../posts/postsController');

/*init.get('/', function(req, res){
    let status  = 200;
    let message = postController.getAll().then((items) => {
        responses.success(req, res, items, status);
    })
});*/

init.get('/filtrar', function(req, res){
    try{
        let status  = 200;
        const message = postController.filtrarFeed(req.query).then((items) => {
            responses.success(req, res, items, status);
        })
    }catch(error){
        responses.errors(req, res, error, 500)
    }
});

init.get('/', function(req, res){
    let status  = 200;
    let message = postController.getAllPostsCard().then((items) => {
        responses.success(req, res, items, status);
    })
});


init.get('/:id', function(req, res){
    let status  = 200;
    let message = postController.getPost(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.put('/resolve', function(req, res){
    let status  = 200;
    let message = postController.resolvePost(req.body.id_post, req.body.status).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.post('', function(req, res){
    let status  = 200;
    let message = postController.registerPost(req.body).then(() => {
        responses.success(req, res, '¡Nuevo post subido!', status);
    })
});

// Al final del todo exportamos
module.exports = init;