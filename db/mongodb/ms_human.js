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
		contracts: [String],
		login_ts: Number,
		date: { type: Date, default: Date.now }
	}));
	
	this.key = 'pubkey';
}

inherits(ms_human, model_base);

ms_human.prototype.insert = function(pubkey, value, cb){
	self.count({[this.key] : pubkey}, function(count){
		if(count == 0){
			var doc = new this.model({
				pubkey: pubkey,
				nickname: value.nickname,
				token: value.token,
				contracts: value.contracts,
				login_ts: value.login_ts
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