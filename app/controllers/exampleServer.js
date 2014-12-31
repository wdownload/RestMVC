module.exports = {
    init: function (routerName, app, params) {
        if (typeof params == "undefined") {
            params = "";
        }

        app.get(routerName, function (req, res) { // GET functionality
            res.send('server');
        });
        app.post(routerName + params, function (req, res) { // POST functionality

        });
        app.put(routerName, function (req, res) { // PUT functionality

        });
        app.delete(routerName, function (req, res) { // DELETE functionality

        });
    }
};