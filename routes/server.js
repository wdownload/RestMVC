var express = require('express');
var resource = require('express-resource');

var server = express();

server.resource('exampleserver', require('../controllers/example'));





module.exports = server;