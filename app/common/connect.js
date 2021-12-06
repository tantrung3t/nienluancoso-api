var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'news_api'
});

connection.connect(function(err) {
    if(err) console.log("Ket noi SCDL that bai!");
});

module.exports = connection;