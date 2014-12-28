var express		= require('express');

var server = express();

server.resource('exampleserver', require('../controllers/exampleserver'));

module.exports = server;