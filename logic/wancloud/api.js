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