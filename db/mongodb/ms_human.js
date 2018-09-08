/**
 * Module dependencies.
 */
const db_conn = require('./db_conn');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model_base = require('./model_base');
const inherits = require("util").inherits;

module.exports = (function(){
	return new ms_human();
})();

function ms_human(){
	model_base.call(this);
	
	this.model = db_conn.model('human', new Schema({
		pubkey: String,
		nickname: String,
		token: String,
		login_ts: Number,
		wancloud_hash: String,
		date: { type: Date, default: Date.now }
	}));
	
	this.key = 'pubkey';
}

inherits(ms_human, model_base);

ms_human.prototype.insert = function(pubkey, value, cb){
	var self = this;

	self.count({[self.key] : pubkey}, function(count){
		if(count == 0){
			var doc = new self.model({
				pubkey: pubkey,
				nickname: value.nickname,
				token: value.token,
				login_ts: value.login_ts,
				wancloud_hash: value.wancloud_hash
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
	});
}