var express = require('express');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');


var app = express();
var port = process.env.PORT || 3000;
var path=require('path');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.bodyParser());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/inicio.html"));
});

app.post('/', function (req, res) {

});

app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});