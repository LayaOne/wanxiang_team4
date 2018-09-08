/**
 * Module dependencies.
 */
const https = require('https');
const http = require('http');

var utils = {};

utils.request = function(obj, option, cb){
	obj.get(option, function(res) {
		var data = [], dataLen = 0;

		res.on('data', function(chunk) {
			data.push(chunk);
			dataLen += chunk.length;
		}).on('end', function() {
			var buf = new Buffer(dataLen);

			for (var i=0, len = data.length, pos = 0; i < len; i++) {
				data[i].copy(buf, pos);
				pos += data[i].length;
			}

			cb(null, buf);
		});
	}).on('error', (e) => {
		cb(e);
	});
}

utils.https_request = function(option, cb){
	this.request(https, option, cb);
}

utils.http_request = function(option, cb){
	this.request(http, option, cb);
}
module.exports = utils;