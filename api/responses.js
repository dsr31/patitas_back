exports.success = function(req, res, message, status){
    res.status(status).send({error: false, status: status, body: message});
}
exports.errors = function(req, res, message, status){
    res.status(status).send({error: true, status: status, body: message});
}