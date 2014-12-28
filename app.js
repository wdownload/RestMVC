var express			= require('express');
var resource	= require('express-resource');
var path			= require('path');
var favicon			= require('serve-favicon');
var logger			= require('morgan');
var cookieParser	= require('cookie-parser');
var bodyParser		= require('body-parser');
config				= require('./env/config.js');
var mongoose		= require('mongoose');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
var client = require('./routes/client');
var server = require('./routes/server');

app.use('/', client);
app.use('/', server);





// Configurations for the db connection
mongoose.connect(config.db, function(req, res) {
	console.log("Connect to the db done!");
});

// Configuration for the server run
app.listen(3000, function(req, res) {
    console.log("listening on 3000");
});