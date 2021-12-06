const db = require('../common/connect');

const Book = function (book) {
  this.id = book.id;
  this.name = book.name;
}

Book.get_all = function (result) {
  db.query("select * from tintuc where status = 2", function (err, data){
    if(err){
      result(null);
    }
    else {
      result(data);
    }
  })
  
}

Book.getById = function (id, result) {
  var string_query = "SELECT tintuc.tacgia, tintuc.src, tintuc.title, tintuc.content, taikhoan.name FROM `tintuc`, taikhoan WHERE tintuc.tacgia = taikhoan.username and id = " + id
  db.query(string_query, id, function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data[0]);
    }
  })
}

Book.getByMa = function (id, result) {
  db.query("select * from tintuc WHERE status = 2 and machude = '" + id + "'", id, function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data);
    }
  })
}


Book.getkhoahoc = function (result) {
  db.query("select * from tintuc where machude LIKE 'kh%' and status = 2", function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data);
    }
  })
  
}

Book.getthethao = function (result) {
  db.query("select * from tintuc where machude LIKE 'tt%' and status = 2", function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data);
    }
  })
  
}

Book.getgiaitri = function (result) {
  db.query("select * from tintuc where machude LIKE 'gt%' and status = 2", function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data);
    }
  })
  
}

Book.getcongnghe = function (result) {
  db.query("select * from tintuc where machude LIKE 'cn%' and status = 2", function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data);
    }
  })
  
}

Book.getquansu = function (result) {
  db.query("select * from tintuc where machude LIKE 'qs%' and status = 2", function (err, data){
    if(err || data.length == 0){
      result(null);
    }
    else {
      result(data);
    }
  })
}
Book.getquansutrongnuoc = function (result) {
  db.query("select * from tintuc where type = 'qstn' and status = 2", function (err, data){
    if(err){
      result(null);
    }
    else {
      result(data);
    }
  })
}
Book.getquansuquocte = function (result) {
  db.query("select * from tintuc where type = 'qsqt' and status = 2", function (err, data){
    if(err){
      result(null);
    }
    else {
      result(data);
    }
  })
}




module.exports = Book;