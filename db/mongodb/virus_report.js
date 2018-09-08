/**
 * Module dependencies.
 */
const db_conn = require('./db_conn');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model_base = require('./model_base');
const inherits = require("util").inherits;

module.exports = (function(){
	return new virus_report_model();
})();

function virus_report_model(){
	model_base.call(this);

	this.model = db_conn.model('virus_report', new Schema({
		scans: Schema.Types.Mixed,
		//scan_id: String,
		sha1: String,
		sha256: String,
		md5: String,
		scan_date: String,
		permalink: String,
		verbose_msg: String,
		total: Number,
		positives: Number,
		is_uploaded: Boolean,
		detail: Schema.Types.Mixed,
		date: { type: Date, default: Date.now }
	}));
}

inherits(virus_report_model, model_base);

virus_report_model.prototype.construct = function(value){
	return {
		scans: value.scans || {},
		sha1: value.sha1 || '',
		sha256: value.sha256 || '',
		md5: value.md5 || '',
		scan_date: value.scan_date || '',
		permalink: value.permalink || '',
		verbose_msg: value.verbose_msg || '',
		total: value.total || 0,
		positives: value.positives || 0,
		is_uploaded: false,
		detail: null
	};
}

virus_report_model.prototype.select = function(hash_method, hashcode, project, cb){
	this.model.where(hash_method).equals(hashcode).select(project).exec(function(err, doc){
		if(err){
			console.log(err);
			cb(null);
		}else{
			if(doc.length > 0){
				cb(doc[0]);
			}else{
				cb(null);
			}
		}
	});
}

virus_report_model.prototype.insert = function(hash_method, value, cb){
	var self = this;

	self.count({[hash_method] : value[hash_method]}, function(count){
		if(count == 0){
			var doc = new self.model(value);

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
