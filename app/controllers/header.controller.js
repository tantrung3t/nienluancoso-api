
var Header = require('../models/header.model');

exports.list_khoahoc = function(req, res) {
    Header.get_all_khoahoc(function(data){
        res.send({ result: data });
    })
}

exports.list_quansu = function(req, res) {
    Header.get_all_quansu(function(data){
        res.send({ result: data });
    })
}

exports.list_thethao = function(req, res) {
    Header.get_all_thethao(function(data){
        res.send({ result: data });
    })
}

exports.list_giaitri = function(req, res) {
    Header.get_all_giaitri(function(data){
        res.send({ result: data });
    })
}

exports.list_congnghe = function(req, res) {
    Header.get_all_congnghe(function(data){
        res.send({ result: data });
    })
}

exports.list_status = function(req, res) {
    Header.get_list_status(function(data){
        res.send({ result: data });
    })
}

exports.add_chude = function(req, res) {
    var data = req.body;
    Header.create(data, function(response){
        res.send({ result: response})
    });
}

exports.add_tintuc = function(req, res) {
    var data = req.body;
    Header.create_tintuc(data, function(response){
        res.send({ result: response})
    });
}

exports.remove_chude = function(req, res) {
    var id = req.params.id;
    Header.delete(id, function(response){
        res.send({ result: response})
    });
}

exports.update_chude = function(req, res) {
    var data = req.body;
    Header.create(data, function(response){
        res.send({ result: response})
    });
}

exports.duyettin_xoa = function(req, res) {
    var id = req.params.id;
    Header.duyettin_xoa(id, function(response){
        res.send({ result: response})
    });
}
exports.duyettin_duyet = function(req, res) {
    var id = req.params.id;
    Header.duyettin_duyet(id, function(response){
        res.send({ result: response})
    });
}



exports.login = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    Header.login(username, password, function(response){
        res.send({ result: response})
    });
}

exports.taikhoan = function(req, res) {
    Header.taikhoan(function(response){
        res.send({ result: response})
    });

}

exports.duyettaikhoan = function(req, res) {
    var username = req.body.username;
    var loaitk = req.body.loaitk;
    Header.duyettaikhoan(username, loaitk, function(response){
        res.send({ result: response})
    });

}

exports.signin = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var phone = req.body.phone;
    Header.signin(username, password, name, phone, function(response){
        res.send({ result: response})
    });
}



