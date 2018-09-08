/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const config = require('../config');

module.exports = (function(){
	return new mongo_conn();
})()

function mongo_conn(){
	this.db = mongoose.createConnection(config.MONGO_DB.URL);

	this.db.on('connected', function(){
		console.log("mongodb connected");
	});

	this.db.on('disconnected', function(){
		console.log("mongodb disconnected");
	});
}

mongo_conn.prototype.close = function(){
	this.db.close();
}

mongo_conn.prototype.model = function(name, schema){
	return this.db.model(name, schema);
}
