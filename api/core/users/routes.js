const express   = require('express');
const init      = express.Router();
const responses = require('../../responses');
const usersController = require('../users/usersController');

/*init.get('/', function(req, res){
    let status  = 200;
    let message = postController.getAllPostsCard().then((items) => {
        responses.success(req, res, items, status);
    })
});*/

init.get('/comprobarDisponibilidadUsuario', function(req, res){
    let status  = 200;
    let message = usersController.comprobarDisponibilidadUsuario(req.query.email, req.query.username).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/comprobarInicioSesion', function(req, res){
    let status  = 200;
    let message = usersController.comprobarInicioSesion(req.query.username).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/:id', function(req, res){
    let status  = 200;
    let message = usersController.getUser(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/:id/pets', function(req, res){
    let status  = 200;
    let message = usersController.getMyPets(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/:id/forums', function(req, res){
    let status  = 200;
    let message = usersController.getMyForums(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.get('/:id/reviews', function(req, res){
    let status  = 200;
    let message = usersController.getMyReviews(req.params.id).then((items) => {
        responses.success(req, res, items, status);
    })
});

init.post('', function(req, res){
    let status  = 200;
    let message = usersController.registerUser(req.body).then(() => {
        responses.success(req, res, '¡Enhorabuena!¡Un usuario nuevo se ha registrado!', status);
    })
});
// Al final del todo exportamos
module.exports = init;