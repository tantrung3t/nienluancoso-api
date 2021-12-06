var express = require('express');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var app = express();

//cho phep cors
app.use(cors());

app.use(fileUpload());

//Cau hinh parser
var body_Parser = require('body-parser');
app.use(body_Parser.urlencoded({extended: false}));
app.use(body_Parser.json());

require('./app/routers/home.router')(app);
require('./app/routers/book.router')(app);
require('./app/routers/header.router')(app);
require('./app/routers/duyettin.router')(app);


//upload hinh
app.post('/upload', (req, res) => {
    if(req.file === null){
        return res.status(400).json({smg: 'No file uploaded'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/app/public/${file.name}`, err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    });
});
app.get('/upload/:id', (req, res) => {
    res.download('./app/public/' + req.params.id);
})



app.listen(3008, function(){
    console.log("Server listening on http://localhost:3008");
});
