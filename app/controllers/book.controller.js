
var Book = require('../models/book.model');
exports.list = function(req, res) {
    Book.get_all(function(data){
        res.send({ result: data });
    })
}

exports.getByMa = function(req, res) {
    Book.getByMa(req.params.id, function(data){
        res.send({result: data})
    })
}


exports.detail = function(req, res) {
    Book.getById(req.params.id, function(data){
        res.send({result: data})
    })
}

exports.khoahoc = function(req, res) {
    Book.getkhoahoc(function(data){
        res.send({ result: data });
    })
}

exports.thethao = function(req, res) {
    Book.getthethao(function(data){
        res.send({ result: data });
    })
}
exports.giaitri = function(req, res) {
    Book.getgiaitri(function(data){
        res.send({ result: data });
    })
}

exports.congnghe = function(req, res) {
    Book.getcongnghe(function(data){
        res.send({ result: data });
    })
}

exports.quansu = function(req, res) {
    Book.getquansu(function(data){
        res.send({ result: data });
    })
}
exports.quansutrongnuoc = function(req, res) {
    Book.getquansutrongnuoc(function(data){
        res.send({ result: data });
    })
}
exports.quansuquocte = function(req, res) {
    Book.getquansuquocte(function(data){
        res.send({ result: data });
    })
}


