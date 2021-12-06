const db = require('../common/connect');

const Header = function (header) {
}

Header.get_all_khoahoc = function (result) {
  db.query("select * from chudebaiviet where machude = 'kh' and trangthai = 2", function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}

Header.get_all_quansu = function (result) {
  db.query("select * from chudebaiviet where machude = 'qs' and trangthai = 2", function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}

Header.get_all_thethao = function (result) {
  db.query("select * from chudebaiviet where machude = 'tt' and trangthai = 2", function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}

Header.get_all_giaitri = function (result) {
  db.query("select * from chudebaiviet where machude = 'gt' and trangthai = 2", function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}

Header.get_all_congnghe = function (result) {
  db.query("select * from chudebaiviet where machude = 'cn' and trangthai = 2", function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}

Header.get_list_status = function (result) {
  db.query("select * from tintuc where status = 1", function (err, data) {
    if (err) {
      result(null);
    }
    else {
      result(data);
    }
  })
}



Header.create = function (data, result) {
  db.query("INSERT INTO chudebaiviet SET ?", data, function (err) {
    if (err) {
      result(null);
    }
    else {
      result(1);
    }
  })
}

Header.create_tintuc = function (data, result) {
  db.query("INSERT INTO tintuc SET ?", data, function (err) {
    if (err) {
      result(null);
    }
    else {
      result(1);
    }
  })
}

Header.delete = function (id, result) {
  result("Xoa chu de co ma: " + id);
}

Header.update = function (data, result) {
  result(data);
}

Header.duyettin_xoa = function (id, result) {
  var string_query = "UPDATE tintuc SET status = 3 WHERE id = " + id;
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



Header.login = function (username, password, result) {
  var kq = {
    "data": null,
    "token": 13092000
  }
  var string_query = "SELECT loaitk, name FROM taikhoan where username = '" + username + "' AND password = '" + password + "'"
  db.query(string_query, username, function (err, data) {
    if (err || data.length == 0) {
      result(null);
    }
    else {
      kq.data = data;
      result(kq);
    }
  })
}

Header.taikhoan = function (result) {
  db.query("SELECT username, name, phone FROM `taikhoan` WHERE loaitk = 'cd'", function (err, data) {
    if (err || data.length == 0) {
      result(null);
    }
    else {
      result(data);
    }
  })
}


Header.duyettaikhoan = function (username, loaitk, result) {
  var string_query = "UPDATE `taikhoan` SET `loaitk`='" + loaitk + "' WHERE username = '" + username + "'"
  db.query(string_query, function (err, data) {
    if (err || data.length == 0) {
      result(null);
    }
    else {
      result("success");
    }
  })
}


Header.signin = function (username, password, name, phone, result) {
  
  var string_query = "INSERT INTO `taikhoan`(`username`, `password`, `loaitk`, `name`, `phone`) VALUES ('" + username + "','" + password + "','cd'"+ ",'" + name + "','" + phone +"')"
  db.query(string_query, username, function (err, data) {
    if (err || data.length == 0) { 
      result(null);
    }
    else {
      result(true);
    }
  })
}



module.exports = Header;