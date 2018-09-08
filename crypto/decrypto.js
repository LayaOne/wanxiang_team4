const crypto = require('crypto');
const { deleteExt } = require("../utils/padding_deal.js");

exports.decrypt = function decrypt(algorithm, key, data, iv, cb){
	var decoder = [];
	var deCipher = crypto.createDecipheriv(algorithm, key, iv);
	deCipher.setAutoPadding(false);
	
	decoder.push(deCipher.update(data));
	decoder.push(deCipher.final());
	
	deleteExt(Buffer.concat(decoder).toString(), function(data){
		cb(null, data);
	});
}
