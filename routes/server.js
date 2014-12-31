module.exports = function(app) {
	var exampleControllerServer = 
	require('../app/controllers/example').init('/server', app);
}


