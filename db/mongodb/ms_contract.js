/**
 * Module dependencies.
 */
const db_conn = require('./db_conn');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model_base = require('./model_base');
const inherits = require("util").inherits;

module.exports = (function(){
	return new ms_contract();
})();

function ms_contract(){
	model_base.call(this);

	this.model = db_conn.model('ms_contracts', new Schema({
		contract_hash: String,
		party_a: String,
		party_b: String,
		create_at: { type: Date, default: Date.now }
	}));
	
	this.key = 'contract_hash';
}

inherits(ms_contract, model_base);

ms_contract.prototype.insert = function(contract_hash, value, cb){
	var self = this;

	self.count({[self.key] : contract_hash}, function(count){
		if(count == 0){
			var doc = new self.model({
				contract_hash: contract_hash,
				party_a: value.party_a,
				party_b: value.party_b,
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
