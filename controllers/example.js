exports.index = function(req, res, next){
  res.send('forum index');
  next();
};

exports.new = function(req, res, next){
  res.send('new forum');
  next();
};

exports.create = function(req, res, next){
    res.send('create forum');
    next();
};

exports.show = function(req, res, next){
  res.send('show forum');
  next();
};

exports.edit = function(req, res, next){
  res.send('edit forum');
  next();
};

exports.update = function(req, res, next){
  res.send('update forum');
  next();
};

exports.destroy = function(req, res, next){
    res.send('destroy forum');
    next();
};

exports.load = function(id, fn){
  process.nextTick(function(){
    fn(null, { title: 'Ferrets' });
  });
};
