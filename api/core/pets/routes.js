const express   = require('express');
const init      = express.Router();
const responses = require('../../responses');
const petController = require('../pets/petsController');

init.get('/', function(req, res){
    let status  = 200;
    let message = petController.getAllPostsCard().then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/races', function(req, res){
    let status  = 200;
    let message = petController.getRace().then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/:id/posts', function(req, res){
    let status  = 200;
    let message = petController.getPetPosts(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/:id', function(req, res){
    let status  = 200;
    let message = petController.getPost(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.post('', function(req, res){
    let status  = 200;
    let message = petController.registerPet(req.body).then(() => {
        responses.success(req, res, '¡Mascota nueva creada!', status);
    })
});

// Al final del todo exportamos
module.exports = init;