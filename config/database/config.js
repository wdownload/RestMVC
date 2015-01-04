var path = require('path'),
	extend = require('util')._extend,
	development = require('./dev'),
	production = require('./production');

var defaults = {
	root: path.normalize(__dirname + '/..')
};

module.exports = {
	dev: extend(development, defaults),
	production: extend(production, defaults)
}[process.env.NODE_ENV || 'production'];