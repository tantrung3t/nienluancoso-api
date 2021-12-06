
var Header = require('../models/duyettin.model');

exports.list_tin = function(req, res) {
    Header.list_tin(function(data){
        res.send({ result: data });
    })
}

exports.duyettin_xoa = function(req, res) {
    var id = req.body.id;
    var ghichu = req.body.ghichu;
    Header.duyettin_xoa(id, ghichu, function(response){
        res.send({ result: response})
    });
}
exports.duyettin_duyet = function(req, res) {
    var id = req.params.id;
    Header.duyettin_duyet(id, function(response){
        res.send({ result: response})
    });
}

//duyetchude

exports.list_chude = function(req, res) {
    Header.list_chude(function(data){
        res.send({ result: data });
    })
}

exports.duyetchude_xoa = function(req, res) {
    var id = req.body.id;
    var ghichu = req.body.ghichu;
    Header.duyetchude_xoa(id, ghichu, function(response){
        res.send({ result: response})
    });
}
exports.duyetchude_duyet = function(req, res) {
    var id = req.params.id;
    Header.duyetchude_duyet(id, function(response){
        res.send({ result: response})
    });
}

exports.chinhsuatin_id = function(req, res) {
    var id = req.params.id;
    Header.chinhsuatin_id(id, function(response){
        res.send({ result: response})
    })
}

exports.chudecuatoi_id = function(req, res) {
    var id = req.params.id;
    Header.chudecuatoi_id(id, function(response){
        res.send({ result: response})
    })
}

exports.suatin = function(req, res) {
    var id = req.params.id;
    Header.suatin(id, function(response){
        res.send({ result: response})
    })
}

exports.chinhsuatin = function(req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var src = req.body.src;
    var description = req.body.description;
    var content = req.body.content;
    Header.chinhsuatin(id, title, src, description, content, function(response){
        res.send({ result: response})
    }) 
}



