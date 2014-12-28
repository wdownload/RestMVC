var express = require('express');
var resource = require('express-resource');

var client = express();

client.resource('example',require('../controllers/example'));



module.exports = client;