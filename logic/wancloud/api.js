/**
 * Module dependencies.
 */
const config = require("../../config");
const request = require('superagent');

module.exports = (function(){
	return new wancloud_api();
})();

function wancloud_api(){

}

wancloud_api.prototype.set = function(raw_data, label, cb){
	/*
	https://api.wancloud.io/apis/bcs/entry
	{
		"rawData": "123456789",
		"label": {
			"age": "12",
			"size": "100",
			"type": "a"
		}
	}
	*/
	request
	.post("https://api.wancloud.io/apis/bcs/entry")
	.set('user-key', config.wanxiang_token)
	.send({
		"rawData": raw_data,
		"label": label
	})
	.end(cb);
}

wancloud_api.prototype.get = function(raw_data_hash){
	/*
	{
		"rawData": "万向区块链",
		"rawDataHash": "b0069eff1ac6795c58bf1dfbcb0de0ff",
		"status": 1,
		"label": {
			"type": "bl",
			"address": "上海"
		}
	}
	*/
	return new Promise((resolve, reject) => {
		request
		.get("https://api.wancloud.io/apis/bcs/entry/" + raw_data_hash)
		.end(function(err, res){
			if(err || res.body.code != 200){
				reject(err);
				return;
			}
			
			resolve(res.body);
		});
	});
}