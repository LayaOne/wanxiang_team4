/**
 * Module dependencies.
 */
const config = require("../../config");
const request = require('superagent');
const randomstring = require('randomstring');

module.exports = (function(){
	return new wancloud_api();
})();

function wancloud_api(){
	this.map = {};
}
/*
wancloud_api.prototype.set = function(raw_data, label){
	
	// https://api.wancloud.io/apis/bcs/entry
	// {
	// 	"rawData": "123456789",
	// 	"label": {
	// 		"age": "12",
	// 		"size": "100",
	// 		"type": "a"
	// 	}
	// }
	
	return new Promise((resolve, reject) => {
		request
		.post("https://api.wancloud.io/apis/bcs/entry")
		.set('user-key', config.wanxiang_token)
		.send({
			"rawData": raw_data,
			"label": label
		})
		.end(function(err, res){
			if(err || res.body.code != 200){
				reject(res.body.status);
				return;
			}
			
			resolve(res.body);
		});
	});	
}

wancloud_api.prototype.get = function(raw_data_hash){
	
	// {
	// 	"rawData": "万向区块链",
	// 	"rawDataHash": "b0069eff1ac6795c58bf1dfbcb0de0ff",
	// 	"status": 1,
	// 	"label": {
	// 		"type": "bl",
	// 		"address": "上海"
	// 	}
	// }
	
	return new Promise((resolve, reject) => {
		request
		.get("https://api.wancloud.io/apis/bcs/entry/" + raw_data_hash)
		.end(function(err, res){
			if(err || res.body.code != 200){
				reject(res.body.status);
				return;
			}

			resolve(res.body);
		});
	});
}
*/
wancloud_api.prototype.set = function(raw_data, label){
	return new Promise((resolve, reject) => {
		let hash = randomstring.generate(32);
		
		this.map[hash] = {
			"rawData": raw_data,
			"rawDataHash": hash,
			"label": label
		}

		resolve({
			"rawDataHash": hash
		});
	});	
}

wancloud_api.prototype.get = function(raw_data_hash){
	return new Promise((resolve, reject) => {
		resolve(this.map[raw_data_hash]);
	});	
}