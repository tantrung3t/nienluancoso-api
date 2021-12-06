const db = require('../common/connect');

const Header = function (header) {
}

Header.list_tin = function (result) {
    var string_query = "SELECT tintuc.id, tintuc.machude, tintuc.src, tintuc.title, tintuc.description, tintuc.content, chudechinh.tenchude, chudebaiviet.tenchudechinh FROM tintuc, chudebaiviet, chudechinh WHERE tintuc.machude = chudebaiviet.machudebaiviet and chudebaiviet.machude = chudechinh.machude and status = 0"
  db.query(string_query, function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}

Header.duyettin_xoa = function (id, ghichu, result) {
  var string_query = "UPDATE tintuc SET status = 3,`ghichu`='" + ghichu + "' WHERE id = " + id;
  db.query(string_query, id, function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(true);
    }
  })
}

Header.duyettin_duyet = function (id, result) {
  var string_query = "UPDATE tintuc SET status = 2 WHERE id = " + id;
  db.query(string_query, id, function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(true);
    }
  })
}

//duyetchude

Header.list_chude = function (result) {
    var string_query = "SELECT tenchude, machudebaiviet, tenchudechinh FROM chudechinh, chudebaiviet WHERE chudechinh.machude = chudebaiviet.machude and trangthai  = 1"
    db.query(string_query, function (err, data) {
      if (err) {
        result(null);
      }
      else {
        result(data);
      }
    })
  }
  
  Header.duyetchude_xoa = function (id, ghichu, result) {
    var string_query = "UPDATE chudebaiviet SET trangthai = 3, ghichu='" + ghichu + "' WHERE machudebaiviet = '" + id + "'";
    db.query(string_query, id, function (err, data) {
      if (err) {
        result(null);
      }
      else {
        result(true);
      }
    })
  }
  
  Header.duyetchude_duyet = function (id, result) {
    var string_query = "UPDATE chudebaiviet SET trangthai = 2 WHERE machudebaiviet = '" + id + "'";
    db.query(string_query, id, function (err, data) {
      if (err) {
        result(null);
      }
      else {
        result(true);
      }
    })
  }

  Header.chinhsuatin_id = function (id, result) {
    var string_query = "SELECT tintuc.id, tintuc.tacgia, tintuc.machude, tintuc.src, tintuc.title, tintuc.description, tintuc.content, tintuc.status, tintuc.ghichu, chudechinh.tenchude, chudebaiviet.tenchudechinh FROM tintuc, chudebaiviet, chudechinh WHERE tintuc.machude = chudebaiviet.machudebaiviet and chudebaiviet.machude = chudechinh.machude and tintuc.tacgia = '"+ id + "'"
    db.query(string_query, function (err, data) {
      if (err) {
        result(null);
      }
      else {
        result(data);
      }
    })
  }

  Header.chudecuatoi_id = function (id, result) {
    var string_query = "SELECT chudechinh.tenchude, chudebaiviet.tenchudechinh, chudebaiviet.trangthai, chudebaiviet.ghichu FROM taikhoan, chudebaiviet, chudechinh WHERE taikhoan.username = chudebaiviet.tacgia and chudebaiviet.machude = chudechinh.machude and chudebaiviet.tacgia = '"+ id +"'"
    db.query(string_query, function (err, data) {
      if (err) {
        result(null);
      }
      else {
        result(data);
      }
    })
  }

  Header.suatin = function (id, result) {
    var string_query = "SELECT tintuc.src, tintuc.title, tintuc.description, tintuc.content, chudechinh.tenchude, chudebaiviet.tenchudechinh FROM tintuc, chudebaiviet, chudechinh WHERE tintuc.machude = chudebaiviet.machudebaiviet and chudebaiviet.machude = chudechinh.machude and tintuc.id = '"+ id + "'"
    db.query(string_query, function (err, data) {
      if (err || data.length == 0) {
        result(null);
      }
      else {
        result(data);
      }
    })
  }

  Header.chinhsuatin = function (id, title, src, description, content, result) {
    var string_query = "UPDATE `tintuc` SET `src`='"+ src +"',`title`='"+title+"',`description`='"+description+"',`content`='"+content+"', status = 0 WHERE id = " + id
    if(src === null) string_query = "UPDATE `tintuc` SET `title`='"+title+"',`description`='"+description+"',`content`='"+content+"', status = 0 WHERE id = " + id
    
    
    db.query(string_query, function (err, data) {
      if (err || data.length == 0) {
        result(err);
      }
      else {
        result(data);
      }
    })
  }


module.exports = Header;