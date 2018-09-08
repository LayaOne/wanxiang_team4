/**
 * Module dependencies.
 */
const db_conn = require('./db_conn');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model_base = require('./model_base');
const inherits = require("util").inherits;

module.exports = (function(){
	return new ms_session_model();
})();

function ms_session_model(){
	model_base.call(this);

	this.model = db_conn.model('ms_session', new Schema({
		sid: String,
		username: String,
		login_time: Number,
		create_at: { type: Date, default: Date.now }
	}));

	this.key = 'sid';
}

inherits(ms_session_model, model_base);

ms_session_model.prototype.insert = function(sid, username, login_time, cb){
	var doc = new this.model({
		sid: sid,
		username: username,
		login_time: login_time
	});

	doc.save(function(err, product, numAffected){
		if(err){
			console.log(err, product, numAffected);
		}

		if(!!cb){
			cb(err, product, numAffected);
		}
	});
}
