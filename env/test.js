var database = {
	url: "",
	name: "",
	credentials: ""
};


module.exports = {
	db: "mongodb://" + database.credentials + "@" + database.url + "/" + database.name
};
