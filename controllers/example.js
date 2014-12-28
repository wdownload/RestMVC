exports.index = function(req, res) {
	res.send('example');
};

exports.new = function(req, res) {
	res.send('new example');
};

exports.create = function(req, res) {
	res.send('create example');
};

exports.show = function(req, res){
  res.send('show example');
};

exports.edit = function(req, res){
  res.send('edit example');
};

exports.update = function(req, res){
  res.send('update example');
};

exports.destroy = function(req, res){
  res.send('destroy example');
};